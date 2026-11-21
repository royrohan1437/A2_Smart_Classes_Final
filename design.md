# A2Smart Classes — Design System & UI/UX Guidelines

**Document:** `DESIGN.md`  
**Project:** A2Smart Classes  
**Purpose:** Define the visual identity, design language, component appearance, interactions and responsive behaviour of the entire application.

This document is the single source of truth for the visual implementation of A2Smart Classes.

All developers and AI coding agents must follow these guidelines when designing or modifying the interface.

---

# 1. Overall Design Philosophy

A2Smart Classes should have a **Luxury Editorial × Premium Academic** visual identity.

The interface should feel like an established, premium educational institution with a sophisticated editorial design language.

The design must balance:

- Elegance and professionalism.
- Academic credibility.
- Modern interaction patterns.
- Readability and accessibility.
- Clean layouts and meaningful whitespace.
- Purposeful animations and transitions.

The application must not look like a generic AI-generated SaaS dashboard or an automatically assembled component-library template.

## Core principles

1. Visual hierarchy must be intentional.
2. Not everything should be placed inside a card.
3. Use whitespace instead of unnecessary decorative containers.
4. Avoid excessive shadows, gradients and visual effects.
5. Use images as meaningful visual elements.
6. Typography should establish the personality of the brand.
7. Interactions should feel polished and purposeful.
8. Every page must be responsive.
9. Functionality and readability take priority over decoration.
10. Maintain consistency without forcing every page into an identical layout.

---

# 2. Colour System

The primary palette consists of four colour families.

## 2.1 Primary Navy

| Colour | Hex |
|---|---|
| Deep Navy | `#07142B` |
| Secondary Navy | `#12264A` |

Usage:
- Main website header.
- Homepage hero.
- Footer.
- Major visual sections.
- Student portal navigation.
- Admin portal navigation.
- Important interactive elements.

Deep navy should establish the primary brand identity.

## 2.2 Gold Accent

| Colour | Hex |
|---|---|
| Deep Gold | `#8C6523` |
| Light Gold | `#E5C16A` |

Usage:
- Interactive highlights.
- Navigation hover effects.
- Underlines.
- Selected text accents.
- Borders and separators where appropriate.
- Important visual details.
- Neumorphic button styling.

Gold must be used selectively. Do not turn every element gold.

## 2.3 White and Ivory

| Colour | Hex |
|---|---|
| White | `#FFFFFF` |
| Light Ivory | `#F5F6F8` |

Usage:
- Main content backgrounds.
- Homepage sections following the hero.
- Form surfaces.
- Content areas.
- Reading surfaces.

## 2.4 Text Colours

| Colour | Hex |
|---|---|
| Dark Charcoal | `#0B0D10` |
| Secondary Charcoal | `#1F242D` |

Usage:
- Body text.
- Descriptions.
- Labels.
- Supporting content.
- Form information.

## 2.5 Colour application rules

- Navy is the dominant brand colour.
- Ivory and white provide contrast and comfortable reading surfaces.
- Gold is reserved for meaningful accents and interactions.
- Charcoal is used for readable text on light backgrounds.
- Do not use arbitrary colours outside the approved palette without justification.
- Functional status colours, such as paid/unpaid indicators, may use appropriate accessible semantic colours where required by the existing product behaviour.

---

# 3. Typography

Typography is a major part of the A2Smart Classes identity.

The desired style is elegant, editorial and academic rather than bold, boxy or overly geometric.

## 3.1 Typography ratio

Target visual balance:

- **70% Serif**
- **30% Calligraphic**

### Serif typography

Use serif fonts for:
- Hero headlines.
- Main page headings.
- Section headings.
- Faculty names.
- Course and subject titles.
- Editorial introductory content.

The serif typeface should feel elegant, refined and readable.

### Calligraphic typography

Use calligraphic fonts selectively for:
- Hero accent phrases.
- Selected words in large headings.
- Important editorial highlights.
- Occasional decorative text treatments.

Calligraphy should complement the serif typography, not compete with it.

### Supporting typography

Use a clean, readable supporting typeface for:
- Body text.
- Navigation.
- Forms.
- Tables.
- Buttons.
- Dashboard content.
- Document information.

Supporting typography must remain highly legible.

## 3.2 Typography restrictions

- Do not use excessively bold or boxy fonts.
- Do not use generic sans-serif typography for every element.
- Avoid oversized text without proper hierarchy.
- Do not use calligraphy for long paragraphs.
- Do not use decorative italics everywhere.
- Do not combine fonts randomly.
- Maintain consistent font weights and line heights.

The final font families must be selected and established as shared design tokens before implementation.

---

# 4. Backgrounds and Surfaces

Use alternating navy, ivory and white sections to create visual rhythm.

## Homepage background direction

- Hero: Solid deep navy.
- Immediately after hero: Ivory background.
- Subsequent sections: Alternating ivory, white and selected navy sections.
- Enquiry section: Navy background.
- Footer: Deep navy background.

## Surface rules

- Not every content section requires a card.
- Use open layouts and whitespace where possible.
- Use borders only when they improve separation.
- Avoid unnecessary shadows under every element.
- Avoid excessive rounded containers.
- Do not introduce decorative textures.
- Maintain consistent background contrast.

The design may use cards for faculty, subjects, classes and other suitable content, but cards must not become the default container for everything.

---

# 5. Header and Navigation

## 5.1 Desktop header

The desktop header must initially have:

- Solid deep navy background.
- Academy logo and identity.
- Ivory navigation text.
- Gold interaction accents.

Navigation includes the previously defined public website links and actions.

Login and Enroll Now buttons must appear horizontally in the header.

## 5.2 Header scroll behaviour

The header must remain at the top while scrolling.

Two visual states:

**Initial state**
- Solid deep navy background.
- No unnecessary blur.
- Clear ivory navigation text.

**Scrolled state**
- Fixed/sticky positioning at the top.
- Glassmorphic navy background.
- Controlled transparency.
- Backdrop blur.
- Smooth transition between states.
- No layout jumping.

Glassmorphism is permitted specifically for this scrolled header. It must not become a general design pattern across the application.

## 5.3 Desktop navigation hover

Navigation links such as Home, About, Courses and Faculty must not use neumorphic button styling.

On hover:
- Text colour becomes brighter.
- A subtle glow effect is introduced.
- An underline draws from left to right.
- The animation is smooth and restrained.
- The active page retains a persistent indicator.

Underline and glow colours must adapt to the background.

## 5.4 Mobile header

- Logo on the left.
- Hamburger menu on the right.
- Deep navy background.
- Ivory and gold details.
- Smooth menu opening and closing.

When the Login option inside the hamburger menu is clicked, open a dropdown containing:

1. Student Login
2. Admin Login

All other Login buttons across the website must navigate directly to Student Login.

---

# 6. Buttons and Interactive Components

Two distinct button interaction systems must be implemented.

## 6.1 Primary CTA buttons: Neumorphic style

Use for prominent actions such as:
- Login.
- Enroll Now.
- Explore Courses.
- Other major call-to-action buttons.

Reference styling:

```css
.neu-button {
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
```

The visual treatment should use:
- Soft inset shadows.
- Subtle outer shadows on hover.
- Refined pressed-surface appearance.
- Smooth background and colour transitions.
- Palette-adapted backgrounds and shadow colours.

The supplied grey neumorphic CSS is a reference for the interaction and depth effect, not a literal colour specification.

Buttons must adapt to their surroundings:
- Gold/navy variants where appropriate.
- Ivory/navy variants where appropriate.
- Accessible text contrast.

### Button states

Every button must have:
- Default.
- Hover.
- Active/pressed.
- Keyboard focus.
- Disabled.
- Loading.

The hover effect must feel tactile rather than simply fading the button.

## 6.2 Header navigation buttons

Header navigation links use the glow and animated underline interaction described earlier, not neumorphic styling.

## 6.3 Other interactive elements

Teacher cards, subject cards, class tiles, course cards and gallery items should have meaningful hover/tap feedback.

Possible interactions:
- Subtle image zoom.
- Slight lift.
- Gold underline.
- Border transition.
- Text colour transition.

Do not apply every effect to every component. Select the effect that suits the element.

On touch devices, provide appropriate tap and active feedback instead of relying on hover.

---

# 7. Homepage Design

The homepage must follow this exact visual sequence:

1. Hero section.
2. Editorial storytelling/introduction.
3. Featured courses.
4. More Courses button.
5. Permanent enquiry form.
6. Footer.

Do not introduce additional homepage sections without approval.

## 7.1 Hero section

<escape>Layout inspiration: The user-provided reference screenshot.</escape>

The screenshot is a composition reference, not a source to copy its styling.

### Background

- Solid deep navy.
- Subtle gold decorative details.
- No grain textures.
- No purple gradients.
- No unnecessary ambient glow.

### Left-side content

The left side contains:

1. Large serif headline.
2. Calligraphic accent phrase.
3. Short introduction.
4. Explore Courses button.
5. Enroll Now button.

Content must be left-aligned.

The headline should use a large editorial treatment, occupying approximately 50–55% of the hero width on desktop where the layout permits.

The calligraphic phrase should create visual contrast without reducing readability.

### Right-side image composition

Use three vertical image columns.

Each column must contain at least three images, giving a minimum of nine images in total.

Images should:
- Use pill-shaped or softly arched masks.
- Maintain appropriate image proportions.
- Use meaningful educational imagery.
- Avoid obvious repetition.

### Parallax movement

Implement scroll-based parallax:

- First column moves upward.
- Second column moves downward.
- Third column moves upward.
- Each column moves at a different speed.
- Movement reverses naturally when the user scrolls upward.
- Keep movement subtle and smooth.
- Avoid excessive motion or distraction.

Use performant transforms rather than repeatedly triggering expensive layout calculations.

Respect `prefers-reduced-motion`.

### Image licensing

Use appropriately licensed imagery, such as properly licensed Unsplash images or original assets.

- Do not copy images from random websites.
- Check the applicable image licence.
- Consider third-party rights for identifiable people.
- Maintain image source/licensing records where practical.

## 7.2 Mobile hero

Mobile is a separately designed composition.

Order:

1. Headline.
2. Calligraphic accent.
3. Short description.
4. Explore Courses button.
5. Enroll Now button.
6. Image composition.

### Mobile buttons

- Full width.
- Stacked vertically.
- Explore Courses first.
- Enroll Now second.
- Comfortable touch targets.

### Mobile image composition

- Retain all three image groups.
- At least nine images total.
- Three horizontally arranged image rows, with three images in each row.
- Use horizontal pill-shaped image treatments.
- Keep image spacing and proportions balanced.
- Maintain the alternating movement concept where practical.
- Do not compress the desktop columns into tiny unreadable images.

## 7.3 Editorial introduction/storytelling

Immediately after the hero, use an ivory background.

The section should include:
- Large serif heading.
- Selective calligraphic emphasis.
- Introductory content.
- Relevant institute imagery.
- Editorial image/text composition.
- Generous whitespace.

Text and decorative elements on ivory backgrounds should use navy, charcoal and restrained gold.

## 7.4 Featured courses

Use an editorial image-led grid.

Only display:
- Course name.
- Board name.

Do not display descriptions, fees, duration or other details in this homepage section.

Add a clearly visible **More Courses** button linking to the Courses page.

## 7.5 Permanent enquiry section

The enquiry section must appear immediately before the footer.

Use a premium split layout:

**Left side**
- Deep navy background.
- Large serif heading.
- Supporting text.
- Gold accents.

**Right side**
- Ivory form surface.
- Clean input fields.
- Clear labels.
- Appropriate validation.
- Neumorphic submit button.

Use the existing approved enquiry form fields and functionality.

---

# 8. Footer

Use a premium dark footer.

- Deep navy background.
- Ivory typography.
- Gold links.
- Subtle dividers.
- Four-column desktop layout following the approved footer structure.
- No unnecessary cards or shadows.

Retain the agreed content:
- Academy logo, name and tagline.
- Quick Links.
- Study Materials links.
- Contact details.
- Copyright.
- Privacy Policy and Disclaimer.
- Developer credits.

The mobile footer must use expandable sections, as specified in the responsive design section.

---

# 9. Individual Public Pages

## 9.1 About

Use an editorial layout.

- Large serif headings.
- Calligraphic highlights.
- Quote/banner treatment.
- Institute imagery integrated into the content.
- Spacious text/image compositions.
- Navy and ivory section alternation.
- Clear CTA.

Avoid excessive card layouts.

## 9.2 Courses / Academics

Use a combination of editorial presentation and structured academic browsing.

Structure:
1. Editorial introduction.
2. Board-wise sections.
3. Classes.
4. Subjects.

### Class cards

- Simple rectangular tiles.
- Refined typography.
- Subtle gold hover accents.
- Consistent dimensions and spacing.

### Subject cards

- Image-led editorial cards.
- Subject name.
- Appropriate image treatment.
- Subtle hover movement.
- Consistent image proportions.

Use the existing academic data and functionality. Do not invent extra information.

## 9.3 Faculty

Use editorial portrait cards.

Each card should display the existing faculty information:
- Portrait.
- Name.
- Qualifications.
- Subjects.
- Experience.

Visual direction:
- Large circular or softly rounded portraits.
- Elegant serif faculty names.
- Clean supporting information.
- Subtle image movement on hover.
- No unnecessary shadows or decorative borders.

## 9.4 Study Materials

Use a combination of structured library navigation and tasteful document previews.

- Clear category navigation.
- Separate Notes and Sample Papers/PYQs sections.
- Structured document lists.
- Document titles.
- File-type indicators.
- Clear View and Download actions.
- Understandable FREE and RESTRICTED access indicators.

Avoid oversized document cards.

## 9.5 Videos

Use a combination of:
- Featured playlist presentation.
- Structured playlist grid.

The featured playlist may have a larger editorial presentation.

Other playlists should use clean, consistent layouts with:
- Thumbnail.
- Playlist title.
- Clear interaction.

## 9.6 Gallery

Use a combination of masonry and uniform image layouts.

- Varied image sizes where suitable.
- Consistent spacing.
- Responsive image proportions.
- Optional captions.
- Elegant lightbox.
- Clear close and navigation controls.

## 9.7 Contact

Use editorial design principles.

- Large serif heading.
- Integrated imagery where appropriate.
- Spacious layout.
- Clear contact information.
- Map and contact elements must remain easy to find and use.

## 9.8 Enquiry

Maintain the approved enquiry form functionality.

Use:
- Elegant labels.
- Minimal fields.
- Accessible validation.
- Clear submission feedback.
- Appropriate loading states.

---

# 10. Student Portal Design

The student portal must use a premium academic visual language.

### Overall appearance

- Navy sidebar/navigation.
- Ivory workspace.
- Elegant serif page headings.
- Minimal calligraphic accents.
- Clean readable body typography.
- Gold accents for selected states.

### Functional components

- Tables must be readable and well-spaced.
- Forms must use the shared input design.
- Fee calendars must have clear status distinctions.
- Study material lists must remain compact and usable.
- Loading and empty states must match the design system.

Usability takes priority over decoration.

---

# 11. Admin Portal Design

The admin portal must be more minimal and utility-focused than the public website.

Use:
- Same navy, ivory, gold and charcoal palette.
- Compact navigation.
- Clear data tables.
- Practical forms.
- Readable labels.
- Efficient management layouts.
- Minimal decorative elements.

### Typography

- Serif page headings.
- Clean supporting typography.
- Minimal calligraphic accents.

### Enquiry notification indicator

A notification dot must appear beside the Enquiries navigation option when new enquiries arrive.

Requirements:
- Clearly visible but unobtrusive.
- Uses an appropriate gold or semantic accent.
- Appears when a new enquiry is available.
- Updates according to the enquiry notification state.
- Must not be permanently displayed without a new enquiry.

The indicator must be driven by actual application data, not a decorative placeholder.

---

# 12. Forms and Input Fields

Use minimal, elegant input styling.

### Input appearance

- White or ivory surfaces.
- Thin, understated borders.
- Subtle gold focus state.
- Refined labels.
- Clear placeholders.
- Accessible validation messages.

### CTA buttons

Use the approved neumorphic button treatment for primary actions.

### Consistency

Maintain consistent:
- Field heights.
- Border radius.
- Spacing.
- Label typography.
- Error presentation.
- Focus treatment.

### Dark backgrounds

When forms appear inside navy sections, use contrasting ivory input surfaces.

Do not use neumorphic input styling by default.

---

# 13. Global Notifications and Toasts

Use the existing global Sonner toast system.

Relevant user actions throughout the public website, student portal and admin portal must provide appropriate feedback.

Toast types:
- Success.
- Error.
- Warning.
- Information.

Rules:
- Success only after server confirmation.
- Meaningful, user-friendly messages.
- No duplicate notifications.
- Consistent position and styling.
- Appropriate duration.
- Accessible contrast.
- Avoid interrupting users unnecessarily.

Do not use toast notifications as a replacement for persistent validation messages or confirmation dialogs.

---

# 14. Loading States and Animations

## 14.1 Everyday loading

Use a minimal animated brand mark or logo/monogram with a subtle gold line animation.

This is the standard loading treatment for everyday operations.

Examples:
- Page content loading.
- Data fetching.
- Form submission where appropriate.
- Asynchronous operations.

## 14.2 Initial application loading

Use a custom branded loading screen containing:
- Academy logo.
- Short tagline.
- Subtle animation.

The initial loading screen should feel elegant and lightweight.

Do not display it unnecessarily for every small request.

## 14.3 Skeleton loading

Implement page-specific skeleton states for:
- Tables.
- Cards.
- Images.
- Document lists.
- Faculty profiles.
- Course and subject content.

Skeletons must:
- Match the dimensions and approximate layout of the final content.
- Reduce layout shifts.
- Use subtle animation.
- Avoid excessive shimmering.
- Respect reduced-motion preferences.

## 14.4 Animation rules

- Animations must have a purpose.
- Use smooth, restrained transitions.
- Avoid unnecessary scroll-triggered animations.
- Avoid excessive bouncing or spinning.
- Avoid distracting loops.
- Respect reduced-motion preferences.
- Do not animate every element on the page.

---

# 15. Custom 404 Page

Create a custom branded 404 page.

Requirements:
- Follow the A2Smart Classes visual identity.
- Use the approved colour palette.
- Elegant typography.
- Clear explanation that the requested page could not be found.
- Provide a functional route back to the homepage.
- Responsive layout.
- No default framework error screen.

The 404 page must use the existing Next.js `not-found.tsx` implementation.

---

# 16. Scroll-to-Top Button

Provide a scroll-to-top control on appropriate long pages.

Requirements:
- Appears after the user scrolls down.
- Remains unobtrusive.
- Smoothly scrolls to the top.
- Uses approved colours.
- Clear hover, focus and active states.
- Accessible label.
- Appropriate mobile placement.
- Must not obstruct important content or fixed controls.

Respect reduced-motion preferences.

---

# 17. Responsive Design System

Responsive design is mandatory across the entire application.

The interface must be designed and tested for mobile, tablet and desktop.

Do not simply scale down desktop layouts.

## 17.1 Breakpoints

| Device | Width |
|---|---|
| Mobile | Below 768px |
| Tablet | 768px–1023px |
| Desktop | 1024px and above |

Use fluid sizing and intermediate adjustments where necessary.

## 17.2 Mobile header

- Logo on left.
- Hamburger menu on right.
- Login dropdown with Student Login and Admin Login.
- Enroll Now available inside the opened menu.
- Smooth navigation interactions.

## 17.3 Mobile hero

- Text first.
- Images below.
- Responsive serif headline.
- Calligraphic accent.
- Full-width stacked CTA buttons.
- Three horizontal image rows.
- At least nine images total.
- Smooth movement where supported.

## 17.4 Mobile course grids

- Featured course presentations: one column.
- Classes: two columns.
- Subjects: two columns where space permits.
- Avoid cramped text and images.

## 17.5 Mobile faculty

- One full-width faculty card per row.
- Prominent portrait.
- Readable information.
- Appropriate spacing.

## 17.6 Mobile study materials

- Horizontally scrollable category tabs.
- Compact document lists.
- Clear file indicators.
- Easily accessible View and Download actions.

## 17.7 Mobile enquiry form

- Single-column layout.
- Full-width fields.
- Vertically stacked inputs.
- Comfortable touch targets.
- Full-width submit button.

## 17.8 Mobile footer

- Logo and tagline first.
- Quick Links, Study Materials and Contact as expandable sections.
- Smooth accordion transitions.
- Copyright, legal links and developer credits at the bottom.

## 17.9 Mobile student and admin navigation

Use slide-out navigation drawers adapted from the desktop sidebar.

Requirements:
- Menu button opens the drawer.
- Current page clearly highlighted.
- Drawer closes after navigation.
- Main content uses available screen width.
- No cramped desktop sidebar on mobile.

## 17.10 Responsive quality requirements

Every relevant component must adapt:
- Navigation.
- Hero.
- Forms.
- Tables.
- Cards.
- Images.
- Gallery.
- Document lists.
- Dialogs.
- Toast notifications.
- Loading states.
- Footer.

Avoid:
- Horizontal overflow.
- Text clipping.
- Unreadable small typography.
- Buttons too small for touch.
- Overlapping fixed elements.
- Unusable tables.
- Images with distorted aspect ratios.

Test at representative viewport widths, not only one desktop and one mobile size.

---

# 18. Accessibility

- Use semantic HTML.
- Maintain sufficient colour contrast.
- Provide visible keyboard focus.
- Support keyboard navigation.
- Use appropriate accessible labels.
- Provide alt text for meaningful images.
- Ensure interactive elements have appropriate touch targets.
- Do not rely exclusively on colour to communicate status.
- Respect reduced-motion preferences.
- Ensure menus, drawers, dialogs and lightboxes are keyboard accessible.

---

# 19. Design Anti-Patterns

The following patterns are prohibited unless a specific, approved design requirement justifies an exception.

1. Purple-to-blue gradients.
2. Gradient hero text.
3. Badges above headlines.
4. Three icon boxes in a row as a default layout.
5. Emojis in headings.
6. Coloured left-border cards.
7. Glassmorphism cards, except the approved scrolled header.
8. Untouched default shadcn components.
9. Lucide icons everywhere.
10. Inter as the automatic font choice.
11. Space Grotesk and Instrument Serif as a default font combination.
12. Serif italics used merely to accent words.
13. Excessive em-dash usage.
14. Generic marketing buzzwords.
15. Sections fading in automatically as users scroll.
16. Cursor-following lines.
17. Buttons that merely fade on hover.
18. Low-contrast dark mode.
19. Inconsistent spacing.
20. Decorative grain textures.

Additional restrictions:
- No excessive shadows.
- No unnecessary gradients or glows.
- No floating decorative shapes.
- No unnecessary blur.
- No excessive rounded containers.
- No random icon decoration.
- No fake statistics or decorative charts.
- No repetitive template-like page layouts.
- No placeholder controls.
- No meaningless animation.
- No unnecessary visual elements.

---

# 20. Design Implementation Rules for AI Agents

Before implementing any UI:

1. Read `DESIGN.md`.
2. Read `RULES.md`.
3. Read `ARCHITECTURE.md`.
4. Inspect the existing component and page implementation.
5. Reuse existing design tokens and components.
6. Do not invent a new colour palette.
7. Do not introduce unapproved font families.
8. Do not replace existing page layouts without approval.
9. Do not add unrequested sections or components.
10. Implement responsive behaviour alongside the desktop design.
11. Test interactive states.
12. Verify accessibility and visual consistency.

When a design requirement is unclear, ask before making assumptions.

---

# 21. Definition of Done — UI Implementation

A UI task is complete only when:

- The approved design direction is followed.
- Existing functionality remains intact.
- Desktop and mobile layouts are usable.
- Tablet behaviour is considered.
- Buttons and interactive elements work.
- Loading states are implemented where applicable.
- Errors and success feedback are handled.
- No horizontal overflow or obvious layout breakage exists.
- Typography and colours follow the design system.
- Accessibility requirements are respected.
- No unapproved visual features have been introduced.

**Final design principle:**

A2Smart Classes should feel elegant, trustworthy, academically credible and thoughtfully designed. Every visual element must serve a purpose. The interface should be memorable through typography, composition, imagery, spacing and refined interactions, not through excessive decoration.