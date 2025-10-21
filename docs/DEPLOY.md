# Deploying to GitHub Pages

## Option A — User/Organization site
1. Create a repository named `USERNAME.github.io`.
2. Push the contents of this project to the `main` branch.
3. GitHub will automatically build the site using Jekyll and publish it at https://USERNAME.github.io.

## Option B — Project site
1. Create a repo with any name and push these files to `main`.
2. In GitHub Settings → Pages, select "Deploy from a branch" and choose `main` and `/ (root)`.

## Adding Google AdSense
1. Sign in to Google AdSense and add your site (https://USERNAME.github.io or custom domain).
2. AdSense will provide a code snippet and/or meta tag for verification. Add those to `_includes/adsense.html` or to `<head>` in `_layouts/default.html`.
3. Place ad units into posts by editing `_layouts/post.html` (there is an example).
