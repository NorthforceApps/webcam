# WebCam — GitHub Pages Website

Landing page for [WebCam: Instant Wi-Fi Camera](https://play.google.com/store/apps/details?id=com.stream.webcam).

Live site: https://northforceapps.github.io/webcam/
GitHub repo: https://github.com/NorthforceApps/webcam

---

## Setup — deploy to GitHub Pages

1. Create repo `NorthforceApps/webcam` (public).
2. Copy everything from this `website/` folder into the repo root.
3. Copy the following image assets from `../` (the parent `playstore/` folder) into the repo root:
   - `feature_graphic.png`
   - `store_01_home_live.png` through `store_09_pro.png`
   - `icon.png` → rename to `app_icon.png`
4. In GitHub repo Settings → Pages → set source to **Deploy from a branch**, branch `main`, folder `/` (root).
5. The site will be live at `https://northforceapps.github.io/webcam/` within a minute.

---

## YouTube demo link

The `index.html` demo section currently links to the NorthforceApps YouTube channel.
Once the feature video is uploaded, replace both occurrences of:

```
https://www.youtube.com/@northforceapps
```

in `index.html` with the direct video URL, e.g.:

```
https://www.youtube.com/watch?v=YOUR_VIDEO_ID
```

Keep the channel link for the second button ("YouTube Channel").

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `privacy.html` | Privacy policy |
| `styles.css` | Shared stylesheet |
| `robots.txt` | Search engine directives |
| `sitemap.xml` | Sitemap for crawlers |
| `app_icon.png` | App icon (copy from `../icon.png`) |
| `feature_graphic.png` | Feature graphic (copy from `../`) |
| `store_01_*.png` … | Screenshots (copy from `../`) |
