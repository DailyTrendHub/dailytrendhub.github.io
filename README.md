# Daily Trend — Jekyll site scaffold

This is a simple Jekyll-based static site scaffold inspired by Beautiful Jekyll, ready to be hosted on GitHub Pages.

## How to use

1. Replace `https://USERNAME.github.io` in `_config.yml` with your GitHub Pages URL (or leave it blank for project pages).
2. Create a new repository on GitHub:
   - For a user/site site: name it `USERNAME.github.io`
   - For a project site: name it anything and set Pages to use the `main` branch or `gh-pages`
3. Push these files to the repository root.
4. In GitHub repo Settings → Pages, ensure the site is published (branch: `main` / folder: `/ (root)`).
5. Add your AdSense Publisher ID in `_includes/adsense.html` and follow AdSense verification steps (see note below).

### AdSense note

- Google AdSense requires you to own the site and verify it. On GitHub Pages you can add the AdSense snippet to the HTML head and/or body.
- Replace `YOUR_ADSENSE_PUBLISHER_ID` in `_includes/adsense.html` with your publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`).
- AdSense often needs a domain verification and some content history. Using `USERNAME.github.io` usually works for AdSense but verify in your AdSense account.

### Development

To test locally:
- Install Ruby and Jekyll (instructions at https://jekyllrb.com/)
- Run: `bundle exec jekyll serve` and open http://127.0.0.1:4000

