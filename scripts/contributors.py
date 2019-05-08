#!/usr/bin/env python
"""Script to autogenerate the contributors page
"""

import json
import urllib2


HEADER = """# Contributors

Thank you everyone that have contributed to creating this awesome guide. Here are the names of a few; for the full list please visit the [GitHub Contributor page](https://github.com/sb2nov/mac-setup/graphs/contributors).

"""

USER_TEMPLATE = "- [{username}]({url})"
BASE_URL = "https://api.github.com/repos/sb2nov/mac-setup/contributors?page={0}"

contributors_list = []

# Iterate through the names of contributors
counter = 0
while True:
  counter += 1
  data = urllib2.urlopen(BASE_URL.format(counter)).read()
  contributors = json.loads(data)
  if not contributors:
    break
  for contributor in contributors:
    string = USER_TEMPLATE.format(username=contributor['login'],
                                  url=contributor['html_url'])
    contributors_list.append(string)

# Output to a text file
file_output = HEADER + '\n'.join(contributors_list)

with open("Contributors.md", "w") as text_file:
    text_file.write(file_output)
