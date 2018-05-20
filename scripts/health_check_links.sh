#!/bin/bash

# This script verifies that no provided links in the repo are broken. It does
# so by making a HTTP request to each website and looking at the status code of
# the response.
#
# If the request responds with 5xx the script terminates with a status code of
# 1, meaning a link is broken. 3xx and 4xx responses are treated as warnings
# and are simply logged, because they do not guarantee that there is something
# wrong with the requested website. The status code 000 is also treated as a
# warning because the status code alone does not specify where the problem
# lies, only that there is a problem, read more here: https://tinyurl.com/superuser-status-code-000
#
### Dependencies
# - curl
# - GNU grep
# - GNU parallel
#
### Usage
#
#  /bin/bash ./health_check_links.sh
#
### Improvements to be made
# - Be able to Blacklist files to be ignored
# - Output the actual problem if the response status code was 000 (see link
#   above for more info)
# - Do not use GNU grep
#
# Author: http://github.com/simeg
# License: MIT
#

readonly PARALLEL_JOBS_COUNT=200

echo "🔎 Finding markdown files.."
readonly MARKDOWN_FILES_STR=$(find "$(PWD)"/.. -type f -name "*.md")
readonly MARKDOWN_FILES_ARR=(${MARKDOWN_FILES_STR// / })
echo "Found [" ${#MARKDOWN_FILES_ARR[@]} "] files"

echo "🔬 Parsing URLs.."
URL_ARR=()
for FILE in "${MARKDOWN_FILES_ARR[@]}"; do
  # Parse URL
  URLS_STR=$(cat $FILE | ggrep -o -E 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)')
  # Split string into array
  URLS_STR_SPLIT=(${URLS_STR// / })
  for i in "${URLS_STR_SPLIT[@]}"; do
    URL_ARR+=("$i")
  done
done

echo "Found [" ${#URL_ARR[@]} "] URLs"

# Write URLs to file, parallel needs input from file
readonly RAW_URLS_FILE=$(mktemp)
printf "%s\\n" "${URL_ARR[@]}" > "$RAW_URLS_FILE"

curl_for_status_code() {
  local url
  local status_code
  url="$1"

  status_code=$(
  curl "$url" \
    --silent \
    --max-time 5 \
    --location \
    --write-out "%{http_code}" \
    --output /dev/null
  )
  printf "%s\\t%d\\n" "$url" "$status_code"
}

# Make function available for parallel
export -f curl_for_status_code

echo "🚦 Checking statuses of URLs.."
readonly URLS_WITH_STATUSES_FILE=$(mktemp)
parallel --jobs $PARALLEL_JOBS_COUNT curl_for_status_code < "$RAW_URLS_FILE" >> "$URLS_WITH_STATUSES_FILE"

cat "$URLS_WITH_STATUSES_FILE" | while read RESULT
do
  URL=$(echo "$RESULT" | cut -f1)
  STATUS_CODE=$(echo "$RESULT" | cut -f2)
  FIRST_DIGIT=${STATUS_CODE:0:1}

  case "$FIRST_DIGIT" in
    "2")
      echo "✅ OK!"
      ;;
    "3" | "4" | "0")
      printf "⚠️  WARNING: URL [ %s ] responded with status code [ %d ], continuing..\\n" "$URL" "$STATUS_CODE"
      ;;
    "5")
      printf "🚨 ERROR: URL [ %s ] responded with status code [ %d ], aborting!\\n" "$URL" "$STATUS_CODE"
      exit 1
      ;;
    *)
      printf "UNKNOWN STATUS CODE: URL [ %s ] responded with status code [ %d ], continuing..\\n" "$URL" "$STATUS_CODE"
      ;;
  esac
done
