VASMU RESIZER: website package for https://vishujeetkumar.vasmustudy.site
=====================================================

Files (keep ALL of them together in ONE folder)
-----------------------------------------------
index.html           home page with all the tools
donate.html          Support page (UPI ID vishujeetkumar@fam + QR code)
privacy.html         Privacy Policy
terms.html           Terms of Use
site.css, site.js    shared header, footer, light/dark switch and page styles
favicon.svg          browser tab icon and logo
icon-192.png, icon-512.png, apple-touch-icon.png   app and phone icons
og-image.png         picture shown when your link is shared (1200x630)
upi-qr.png           the Support QR as a picture (for sharing or printing)
site.webmanifest     lets phones "install" the site
robots.txt, sitemap.xml   for Google and other search engines
pmd-wasm.js         PageMaker (.pmd) reader used by PDF tools > PMD to PDF (loaded only when needed)

All links between the pages are relative, so the site works from any folder.

Upload
------
Upload everything into one folder on your host and make that folder the web root
of vishujeetkumar.vasmustudy.site (or open it at its own address). Free hosts with good link previews:
Cloudflare Pages or Netlify. InfinityFree also works, but its security system can
block link-preview robots.

If the site opens at a path such as https://vishujeetkumar.vasmustudy.site/myfolder/ instead of
https://vishujeetkumar.vasmustudy.site/ then update these three places with the real address:
  1. the canonical, og:url and og:image lines in index.html, donate.html, privacy.html, terms.html
  2. sitemap.xml
  3. robots.txt (it only works when it sits at the very top of the domain)

Point the subdomain
-------------------
In the DNS settings of vasmustudy.site, point "vishujeetkumar" where your host
tells you (a CNAME or A record), then switch on HTTPS/SSL.

After it is live
----------------
- Test the share preview: Facebook Sharing Debugger, LinkedIn Post Inspector.
  WhatsApp and Telegram cache previews, so the first share may take a moment.
- Add the site in Google Search Console and submit the sitemap.

Good to know
------------
- Photo to Word/Excel, scanned PDF to Word/Excel and OCR PDF run in the visitor's
  browser with Tesseract.js. Nothing is uploaded. On first use the browser downloads
  the engine (cdn.jsdelivr.net) and a language file (tessdata.projectnaptha.com).
- OCR PDF adds a searchable layer for Latin-script text only.
- AI Summarizer and Translate PDF show "Coming soon". To add them later you need the
  Claude API behind a small server function that keeps your API key secret.
  Never put the key in a page. If you add it, also update privacy.html.
- PMD to PDF runs in the browser like the other converters. It uses pmd-wasm.js, the open source
  libpagemaker library (MPL 2.0) compiled to WebAssembly and stored as text so that every host
  and browser accepts it. Upload pmd-wasm.js next to index.html, otherwise the tool shows
  "The PageMaker reader (pmd-wasm.js) could not be loaded". It reads PageMaker 6.0, 6.5 and
  7.0 files only. Each page is saved as a picture in the PDF.
  Pictures inside the file (stored as TIFF) are converted with UTIF and pako, loaded from the CDN
  the first time one is needed. Master page items, gradients and some effects are not read by libpagemaker.
- The only thing saved in a visitor's browser is the light/dark choice.
- To change the UPI ID, edit donate.html and make a new QR code.
- The Privacy Policy and Terms are plain-language templates, not legal advice.
