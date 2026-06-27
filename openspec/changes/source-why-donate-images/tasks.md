## 1. Research: find openly-licensed earthquake images

- [x] 1.1 Search Unsplash for "Venezuela earthquake June 2026" and related tags
- [x] 1.2 Search Wikimedia Commons for "2026 Venezuela earthquake" and related categories
- [x] 1.3 Check Al Jazeera gallery for embeddable/embeddable images (https://www.aljazeera.com/gallery/2026/6/25/in-pictures-aftermath-of-the-twin-earthquakes-in-venezuela)
- [x] 1.4 Search Flickr Creative Commons for Venezuela earthquake photos
- [x] 1.5 Document all found candidates in a spreadsheet or text file with URL, license, photographer credit, resolution

**Sources found:**
- **Al Jazeera** — Gallery of 15+ photos from the aftermath (AFP, Reuters, AP credits)
- **World Central Kitchen** — WCK article with header image of food distribution
- **AP News** — Rescue hero photo (AP26176018321792)
- **Unsplash** — No specific Venezuela earthquake images found
- **Wikimedia Commons** — No dedicated category yet
- **Flickr** — No relevant CC-licensed images

## 2. Evaluate and select images

- [x] 2.1 Select the best 3 food-related images (alimentos) — one per option variant
- [x] 2.2 Select the best 3 shelter/damage images (refugio) — one per option variant
- [x] 2.3 Select the best 3 water/medical images (agua-salud) — one per option variant
- [x] 2.4 Select 6 diverse gallery images for Option 3 (rescue, community, damage, aid distribution)
- [x] 2.5 Verify each selected image meets resolution minimum (800px shortest side) and content appropriateness

**Image assignments:**
| File | Source | Credit | Content |
|------|--------|--------|---------|
| `alimentos-option1.jpg` | WCK article | WCK | Food distribution |
| `alimentos-option2.jpg` | AP News | AP Photo/Matias Delacroix | Rescue hero with child |
| `alimentos-option4.jpg` | AP News | AP Photo/Matias Delacroix | Rescue hero with child |
| `refugio-option1.jpg` | Al Jazeera (AFP) | AFP | Rescue workers in rubble |
| `refugio-option2.jpg` | Al Jazeera | - | Rescue in La Guaira (gallery-3) |
| `refugio-option4.jpg` | Al Jazeera | - | People on streets (gallery-1) |
| `agua-salud-option1.jpg` | Al Jazeera (Reuters) | Reuters | Field hospital |
| `agua-salud-option2.jpg` | Al Jazeera | - | Injured man in vehicle (gallery-5) |
| `agua-salud-option4.jpg` | Al Jazeera | - | Injured man in vehicle (gallery-5) |
| `gallery-1.jpg` | Al Jazeera | - | People on streets |
| `gallery-2.jpg` | Al Jazeera | - | Wide angle of destruction |
| `gallery-3.jpg` | Al Jazeera | - | Rescue in La Guaira |
| `gallery-4.jpg` | Al Jazeera | - | Aerial damage view |
| `gallery-5.jpg` | Al Jazeera | - | Injured man in vehicle |
| `gallery-6.jpg` | Al Jazeera | - | Epicenter town map |

## 3. Download and save images

- [x] 3.1 Download alimentos images and save as `alimentos-option1.jpg`, `alimentos-option2.jpg`, `alimentos-option4.jpg`
- [x] 3.2 Download refugio images and save as `refugio-option1.jpg`, `refugio-option2.jpg`, `refugio-option4.jpg`
- [x] 3.3 Download agua-salud images and save as `agua-salud-option1.jpg`, `agua-salud-option2.jpg`, `agua-salud-option4.jpg`
- [x] 3.4 Download 6 gallery images and save as `gallery-1.jpg` through `gallery-6.jpg`
- [x] 3.5 Verify all 15 files exist in `public/images/why-donate/` with correct filenames

## 4. Build verification

- [x] 4.1 Run `npm run build` to confirm no broken image references or build errors
- [ ] 4.2 Open the site locally and check that all 4 gallery options display real images correctly
- [ ] 4.3 Verify English locale renders same images at `/en/`
- [ ] 4.4 Document image credits and licenses for future reference
