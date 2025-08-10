# Analytics Setup Guide

This document explains how to complete the Google Analytics setup for tracking popular sections.

## Google Analytics 4 Configuration

The site has been configured with Google Analytics 4 (GA4) integration using the `@docusaurus/plugin-google-gtag` plugin.

### Final Setup Steps

1. **Create a Google Analytics 4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property for your website
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update the Configuration**:
   - Edit `docusaurus.config.ts`
   - Replace `G-XXXXXXXXXX` on line 70 with your actual Measurement ID

3. **Verify Installation**:
   - Deploy the site with your tracking ID
   - Check Google Analytics Real-time reports to confirm data collection

## What's Tracked

The current configuration tracks:

- Page views and navigation
- User sessions and demographics
- Popular content sections
- Search queries (from the search functionality)
- Traffic sources and referrals

## Privacy Compliance

The configuration includes `anonymizeIP: true` to comply with privacy regulations by anonymizing visitor IP addresses.
