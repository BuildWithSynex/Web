# Evergreen Dental Studio — reusable demo website

A responsive, static dental clinic website built with HTML, CSS and vanilla JavaScript. No build step, backend, database or paid service is required.

## Run locally
1. Unzip the project.
2. Open `index.html` in a browser.

For a local development server, run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Customize for a client
Edit **`config.js`** only for most client changes:
- Clinic name, city, announcement and hero copy
- Phone, WhatsApp number, address and opening hours
- Clinic images
- Services, dentist profiles and testimonial

WhatsApp number must be country code + number, digits only. Example: `919876543210`.

The appointment form opens WhatsApp with the enquiry details. It does not save submissions or send email. Confirm the clinic's real WhatsApp number before publishing.

## Deploy free with Vercel
### Option A — GitHub (recommended)
1. Create a GitHub repository, e.g. `dental-clinic-demo`.
2. Upload all project files from this folder to the repository root.
3. Sign in to Vercel using GitHub.
4. Click **Add New → Project** and import the repository.
5. Framework Preset: **Other**. Build Command: leave blank. Output Directory: `.` (or leave default if Vercel detects static files).
6. Click **Deploy**.
7. Copy the public `*.vercel.app` URL and share it with your prospect.

### Option B — Vercel CLI
Install Node.js, then:
```bash
npm install -g vercel
cd dentacare-demo
vercel
```
Follow the prompts. Use `vercel --prod` when ready to publish production.

## Reusing for another clinic
Best workflow:
1. Duplicate the folder and rename it for the clinic.
2. Edit `config.js`.
3. Replace the sample images with clinic-approved images.
4. Replace sample dentist names and testimonials with verified information.
5. Deploy the duplicate as a separate Vercel project.

## Before showing a real clinic
- Replace all sample contact details and confirm WhatsApp.
- Replace fictional staff, experience claims and sample testimonials.
- Use only images the clinic owns or has permission to use.
- Confirm service descriptions, qualifications, opening hours and address.
- Add a privacy notice and a real booking backend if you intend to collect/store patient data.
- Do not imply this demo is a real clinic or that sample reviews are genuine.

## Files
- `index.html` — page structure
- `styles.css` — visual design and responsive layout
- `config.js` — client-specific content
- `script.js` — rendering, mobile menu and WhatsApp enquiry behaviour
