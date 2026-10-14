# TechAble — Company Portfolio

A responsive company portfolio for TechAble, with a dark background, amber accents, the supplied blue-and-white logo, and a professional portrait edited from the owner's actual photo. Built with HTML, CSS, and vanilla JavaScript; no package installation or build step required.

Open `index.html` directly, or run `npm run dev` and visit http://localhost:3000. An alternative is `python -m http.server 3000 --bind 127.0.0.1`.

## Features

- Responsive navigation and section highlighting.
- Service links that lead to the contact section.
- Filterable project showcases with accessible native detail dialogs.
- Direct contact section with clickable company email and phone links.
- Keyboard focus styles, skip navigation, and reduced-motion support.

The title, company introduction, services, calls to action, and footer use TechAble branding. The logo is loaded directly from the supplied assets. No client testimonials or experience metrics are invented. Company contact details: `techableteam@gmail.com` and `+1 431 458 8530`.

Global colors, typography, spacing, and breakpoints live in `styles.css`. Page content is in `index.html`; project dialog copy is in `script.js`. Google Fonts is the only external request; system font fallbacks work offline. All imagery and project previews are local.

## Renew360 project

Renew360 is listed under AI projects. Its card opens a details modal with an official screenshot, a project overview, grouped relevant engineering skills, and a button to its [App Store page](https://apps.apple.com/us/app/renew360/id6736639375). Its description, icon, and screenshots were checked against the public listing on September 29, 2026. The skills describe relevant engineering disciplines, not a verified implementation stack or claim of personal contributions.

The official listing assets are saved as `assets/renew360-icon.jpg`, `assets/renew360-screen.jpg`, and `assets/renew360-dashboard.jpg`.

## Gigsters mobile project

Gigsters is listed under mobile projects using the name shown on its [Google Play listing](https://play.google.com/store/apps/details?id=com.booksmartllc). The card opens a modal with the problem addressed, public platform information, distinguishing features, grouped relevant engineering skills, an official screenshot, and a Google Play button. The listing was checked on September 29, 2026. Frameworks and personal contributions are not inferred from the listing.

Official listing images are saved as `assets/gigsters-icon.jpg`, `assets/gigsters-screen.jpg`, and `assets/gigsters-jobs.jpg`.

## Menbili mobile project

Menbili is listed under mobile projects using its [Google Play listing](https://play.google.com/store/apps/details?id=com.greeme.matchingapp), checked on September 29, 2026. The modal covers the problem addressed, public platform information, distinguishing features, and grouped relevant engineering skills, with an official screenshot and a Google Play button. The skills describe relevant disciplines rather than a verified implementation stack. Creator and publisher names are omitted from project content.

Official listing images used by the site are `assets/menbili-icon.jpg` and `assets/menbili-community.jpg`.

## Rolla mobile project

Rolla is listed under mobile projects using its [App Store listing](https://apps.apple.com/us/app/rolla-travel-journal-share/id6757051407), checked on September 29, 2026. Its card opens a details modal with a project overview, relevant engineering skills, an official screenshot, and an App Store button. Public capabilities inform the copy; implementation frameworks and personal contributions are not inferred. Creator and publisher references are omitted.

Official listing assets are saved as `assets/rolla-icon.jpg`, `assets/rolla-map.jpg`, and `assets/rolla-share.jpg`.

## Lucky Orange web project

The Web category includes Lucky Orange with a screenshot of its analytics page, a feature-based case study, grouped relevant engineering skills, and a link to its [analytics page](https://www.luckyorange.com/analytics). The page was checked on September 29, 2026. The page screenshot is saved as `assets/luckyorange-website.jpg`, captured from the public analytics page. The copy does not claim a personal contribution or unverified implementation frameworks.

## Miu Miu web project

The Web category includes the [Miu Miu Vinyl Club footwear collection](https://www.miumiu.com/de/de/miu-miu-vinyl-club/shoes/c/11132EU), with a public-feature overview, grouped relevant engineering skills, and an external website button. Text remains below the image. The German page HTML was retrieved and its collection filters were verified against the English regional page on September 29, 2026. The modal uses a storefront screenshot captured from the original German page. Browser network failures were handled by loading the official page assets through the capture client. Invalid generated image-resolution URLs were replaced with valid official image renditions before capture. Layout and content were retained.

`assets/miumiu-website.jpg` shows the storefront navigation, product grid, filters, and prices. No personal contribution or implementation framework is inferred.

## Professional hero portrait provenance

The active hero image is `assets/expert-portrait-natural.png`, refined from the first edit using the owner's original photograph as the identity reference and the built-in imagegen tool. The refinement relaxes the posture, softens the blazer and lighting, and reconstructs both shoulders and upper arms to remove the abrupt crop at the right edge. The transparent portrait fades into the page at the bottom. The earlier edit remains in `assets/expert-portrait.png`; the original source photograph remains unchanged.

Initial edit prompt:

> Use case: identity-preserve. Asset type: transparent professional portrait cutout for TechAble's company website hero. Input image 1 is the EDIT TARGET and the sole identity reference: an actual photograph of the website owner. Edit this exact person, preserving their recognizable face, eye shape, facial proportions, age, skin tone, natural skin texture, facial hair, and dark medium-length hairstyle. Primary request: remove the neon street background completely and make the portrait look like a polished expert in software and AI. Replace the leather jacket with a tailored dark charcoal blazer over a simple black crew-neck shirt, remove the visible necklaces, subtly neaten stray hair while preserving the hairstyle, correct the colored neon cast to natural studio lighting with a restrained warm amber rim light. Retain the calm expression, natural facial asymmetry, and direct camera engagement. No dramatic beautification or identity changes. Composition: vertical 4:5 chest-up portrait, complete head and both shoulders inside the frame with generous clear padding above the hair and at the sides, confident natural posture, detailed clean hair edges. Transparent background with real alpha, no backdrop, no scenery, no floor, no drop shadow rectangle. No text, logos, badges, glasses, props, or watermark. Photorealistic premium business editorial finish, professional yet approachable.

Final refinement prompt:

> Use case: identity-preserve. Asset type: refined transparent portrait for a company website hero. Image 1 is the EDIT TARGET, the current edited professional portrait. Image 2 is the original actual photograph and the authoritative identity reference. Refine the edit to look more natural and relaxed, preserving the actual person's recognizable facial identity, eye shape, facial proportions, age, skin tone, natural facial asymmetry, sparse moustache, medium-length dark hairstyle, and realistic skin texture. Address the awkward posture: reduce the pronounced head tilt slightly, align head and neck comfortably with the torso, let the shoulders rest naturally with subtle asymmetry and a slight three-quarter torso angle, and keep a calm approachable expression with just a small relaxed closed-mouth smile. Keep the charcoal blazer and black crew-neck shirt, but make the blazer softer and naturally draped, with believable cloth folds, comfortable shoulder construction and less rigid lapels. Soften the overly orange rim lighting, use gentle neutral studio key light and a very restrained warm edge light suited to a dark website. CRITICAL FRAMING: zoom out and reconstruct the entire upper torso, BOTH complete shoulders and upper arms; leave at least 12 percent transparent margin on both left and right sides. Absolutely no shoulder, sleeve, hair or upper-arm contours intersecting either vertical canvas edge. The previous version has a severe straight crop on its right shoulder: eliminate it. Upper torso down to waist at bottom, complete head with generous padding above. Transparent background with real alpha, fine natural hair edges, no scenery, no backdrop, no rectangular shadow, no text, no logos, no jewellery, no props, no artificial glossy skin, no exaggerated smile. Professional but personable editorial photograph.

## Previous AI hero image provenance


Generated with the built-in imagegen tool; saved at `assets/ai-core.png` and retained as an unused asset. The initial fictional portrait is also retained as an unused asset. The header, company section, and footer use `assets/Techable-Logo-Horizontal-Colorless-Dark.png`, and the favicon uses `assets/TechAble-Logo-Icon-Coloress.png`.

Final prompt:

> Use case: stylized-concept. Asset type: hero illustration for TechAble, an AI and software development company portfolio. Primary request: a polished abstract artificial intelligence illustration to replace a human portrait. Subject: a luminous neural intelligence core formed from elegant interwoven glass filaments and small connected nodes, suspended above a compact layered graphite computing platform, subtle orbital arcs and fine circuit connections around it. Style: premium 3D editorial technology illustration, sculptural and precise, restrained detail. Composition: square image, centered entire sculpture with generous dark negative space around all sides, no cropped elements, suitable for the right half of a website hero. Backdrop: seamless nearly black charcoal #0c0e10, edges fading into this color. Lighting: warm amber and gold core with a few restrained electric blue and cyan highlights echoing a blue company logo. Materials: smoked glass, graphite metal, luminous filaments. Constraints: no people, no faces, no humanoid robots, no text, no logos, no watermarks, no UI panels. Sophisticated, clear silhouette, suitable for a business audience.
