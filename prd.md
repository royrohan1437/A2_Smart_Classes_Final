# A2Smart Classes — Complete Product Requirements domumemt
**Document:** `prd.md`  
**Product:** A2Smart Classes — Coaching Academy Platform  
**Version:** 1.0  
**Status:** Product Requirements & Design Specification  
**Year:** 2026

---

# 1. Project Overview

A2Smart Classes is a coaching academy website and management platform consisting of three interconnected experiences:

1. **Public Website:** Provides information about the academy, faculty, courses, study materials, video lectures, gallery, contact information and admission enquiries.
2. **Student Experience:** Allows registered students to log in, access restricted study materials, view their profiles and manage their fee information.
3. **Super Admin Portal:** Allows the academy owner to manage students, teachers, academics, study materials, videos, enquiries, fees and other administrative operations.

The student experience must remain integrated into the main website. It must not be developed as a separate student portal or dashboard.

The admin portal will be part of the same domain, using dedicated routes.

## 1.1 Product Goals

- Provide a professional and responsive coaching academy website.
- Organise academic information dynamically.
- Provide structured access to study materials.
- Allow students to access their assigned academic resources.
- Manage admission enquiries and student accounts.
- Maintain student fee records and payment history.
- Give the Super Admin complete control over academy operations.
- Keep the architecture extensible for future features such as a Teachers Portal.

## 1.2 Version 1 Scope

Version 1 includes:

- Public-facing website.
- Student login and profile.
- Student password management.
- Study materials and access control.
- Video lectures.
- Gallery.
- Contact page.
- Enquiry system.
- Super Admin portal.
- Student management.
- Teacher management.
- Academic management.
- Study-material management.
- Video management.
- Gallery management.
- Enquiry management.
- Fee management.
- Shared website footer.
- Privacy Policy.
- Disclaimer.

The following are intentionally deferred:

- Teachers Portal.
- Individual teacher login accounts.
- Teacher-specific permissions.
- Dynamic website-content management.
- Academy branding management through the admin panel.
- Separate admin roles and permissions.
- Admin email-address editing.

---

# 2. Technology Stack

The selected technology stack is:

| Layer | Technology |
|---|---|
| Frontend | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | Lucide Icons |
| Backend | Next.js Route Handlers and Server Actions |
| ORM | Prisma |
| Database | Supabase PostgreSQL |
| Authentication | Custom Authentication |
| File Storage | Cloudflare R2 |
| Email Delivery | Brevo |
| Video Hosting | YouTube Playlists |
| Hosting | Vercel |
| Version Control | Git and GitHub |
| Automation | GitHub Actions |
| Development Assistance | OpenAI Codex |

## 2.1 Architectural Principles

- Use TypeScript throughout the application.
- Maintain a reusable component architecture.
- Separate frontend components, backend logic and database operations.
- Use Prisma for database access.
- Use Supabase PostgreSQL as the primary database.
- Store uploaded files in Cloudflare R2.
- Keep restricted files private.
- Use Brevo for OTP and administrative notification emails.
- Never expose secrets or private credentials in frontend code.
- Use server-side permission checks for protected operations.
- Avoid unnecessary third-party services and recurring expenses.

## 2.2 Cost Considerations

The project should prioritise free or zero-cost services wherever possible.

However, hosting, database, email and storage providers have quotas, commercial-use restrictions and possible future charges.

The implementation must:

- Monitor storage consumption.
- Avoid unnecessary duplicate file uploads.
- Permanently delete unused study-material files and gallery images.
- Avoid accidental paid-service usage.
- Respect the applicable hosting and provider terms.
- Never assume that a free plan provides unlimited usage.

---

# 3. Global Design System

All public and student-facing pages must follow one consistent academy-wide design system.

## 3.1 Visual Consistency

- Consistent typography.
- Consistent spacing.
- Reusable buttons.
- Consistent card designs.
- Consistent border radii.
- Consistent input fields.
- Consistent page layouts.
- Consistent navigation.
- Responsive design.

The actual academy colour palette, logo and typography must be finalised separately. Do not invent permanent brand assets or colours.

## 3.2 Responsive Design

Every page must support:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Responsive behaviour must be considered from the beginning rather than added after desktop development.

## 3.3 Design References

Uploaded screenshots and references are for layout and information arrangement only unless explicitly stated otherwise.

Do not copy reference colours, backgrounds, textures, typography or branding without approval.

---

# 4. Public Website Architecture

## 4.1 Public Routes

| Page | Route |
|---|---|
| Homepage | `/` |
| About | `/about` |
| Courses / Academics | `/academics` |
| Faculty | `/faculty` |
| Study Materials | `/study-materials` |
| Video Lectures | `/videos` |
| Gallery | `/gallery` |
| Contact Us | `/contact` |
| Enquiry | `/enquiry` |
| Privacy Policy | `/privacy-policy` |
| Disclaimer | `/disclaimer` |

## 4.2 Website Header

### Desktop Header

The desktop header contains:

- Academy logo.
- Academy name.
- Optional tagline.
- Home.
- About.
- Teachers.
- Courses.
- Login dropdown.
- Enroll Now button.

The Login button must be a single dropdown trigger.

When clicked, it displays:

1. Student Login.
2. Admin Login.

Routes:

- Student Login → `/student/login`
- Admin Login → `/admin/login`
- Enroll Now → `/enquiry`

Do not display separate Student Login and Admin Login buttons in the desktop header.

The Login dropdown saves horizontal space for the Enroll Now button.

### Mobile Header

The mobile header contains:

- Academy logo on the left.
- Academy name and tagline centred.
- Hamburger menu on the right.

The collapsible navigation contains:

- Home.
- About.
- Teachers.
- Courses.
- Student Login.
- Admin Login.
- Enroll Now.

Student Login and Admin Login appear as separate menu options on mobile.

### Header Behaviour

- Responsive navigation.
- Smooth menu interactions.
- Appropriate dropdown behaviour.
- Clear active navigation state.
- Accessible keyboard interactions.
- No horizontal overflow.

---

# 5. Homepage

**Route:** `/`

The homepage design has been approved.

## 5.1 Hero Section

The hero section contains a background slideshow.

### Background

- Educational photographs.
- Multiple slides.
- Desktop and mobile support.
- Smooth slide transitions.
- Readability overlay or gradient.
- Slide indicators.
- Previous and next controls on desktop.

### Content

- Academy name.
- Academy tagline.
- Introductory text.
- Explore Courses button.
- Enroll Now button.

### Desktop

- Left-aligned content.
- Buttons horizontally arranged.
- Large background imagery.

### Mobile

- Centre-aligned content.
- Buttons vertically stacked.
- Responsive text and imagery.

### Navigation

- Explore Courses → `/academics`
- Enroll Now → `/enquiry`

## 5.2 New Batch Announcement

A dedicated card below the hero section.

Content:

**New Batch Starting**

- Batch date: April 2027.
- Supporting text: Admissions open for new academic session.
- CTA: Book an Enquiry.

CTA route: `/enquiry`

Desktop layout: Horizontal card.

Mobile layout: Vertically stacked card.

Other homepage sections are not yet specified and must not be added without discussion.

---

# 6. About Page

**Route:** `/about`

The About page contains three approved sections.

## 6.1 Inspirational Quote Banner

- Full-width institute photograph.
- Inspirational quote.
- Background image.
- Readability overlay or gradient.
- Responsive text positioning.

## 6.2 Our Story

Desktop:

- Two-column layout.
- Left: Our Story heading and academy story.
- Right: Multiple academy photographs arranged vertically.

Mobile:

- Story text first.
- Images stacked underneath.

## 6.3 Join Us CTA

Card containing:

**Join Us**

"Let us walk towards success together."

Button:

**Enroll Now**

Route: `/enquiry`

Use the academy's global design system.

---

# 7. Faculty Page

**Route:** `/faculty`

The Faculty page uses the approved teacher-card layout.

Reference images are for layout and information structure only.

Do not copy the reference's dark background, rose-gold styling, texture, borders or typography.

## 7.1 Teacher Card

Each teacher card contains:

- Circular teacher photograph.
- Teacher name.
- Qualification badges.
- Subject(s) taught.
- Teaching experience.

Example qualifications:

- BA.
- MA.
- B.Ed.

These are examples only.

## 7.2 Layout

Desktop:

- Responsive grid.
- For five teachers, three cards in the first row and two centred in the second row.

Mobile:

- Appropriate responsive columns.
- Cards stacked when required.

Do not hardcode individual teacher card positions.

## 7.3 Dynamic Data

Teacher information must be loaded from the database.

Only actual admin-entered teacher information should appear.

Changes made through `/admin/teachers` must automatically reflect on `/faculty`.

---

# 8. Courses / Academics Page

**Route:** `/academics`

## 8.1 Main Page

The Courses page displays all available boards together, with their classes underneath.

There is no intermediate board-selection page.

Example structure:

CBSE:
- Class 9.
- Class 10.
- Class 11.
- Class 12.

ICSE:
- Class 9.
- Class 10.

These are examples, not hardcoded values.

## 8.2 Navigation

Board → Class → Subjects.

Clicking a class opens its respective page.

Example dynamic route:

`/academics/[board]/[class]`

## 8.3 Subject Cards

Each subject card contains:

- Subject photograph.
- Subject name.
- Subject description.
- Course mode.
- Course duration.
- Course fees.

Course mode:

- Online.
- Offline.

No View Details button.

No unnecessary subject-detail page.

## 8.4 Dynamic Administration

The admin can:

- Add subjects.
- Edit subjects.
- Delete subjects, subject to academic-record dependencies.
- Change subject names.
- Upload or replace photographs.
- Edit descriptions.
- Change course mode.
- Change duration.
- Change fees.
- Reorder subjects.

Changes must automatically reflect on the public Courses page.

---

# 9. Study Materials

**Public Route:** `/study-materials`

Study Materials is a major feature of the platform.

## 9.1 Academic Hierarchy

The browsing hierarchy is:

**Boards → Classes → Subjects → Chapters → Resource Sections → Categories → Files**

The main Study Materials page displays all boards and their respective classes.

Clicking a class displays its subjects.

Clicking a subject displays its chapters.

Clicking a chapter opens its resource page.

## 9.2 Resource Sections

Each chapter has two main resource sections.

### Section A — Notes

Default categories:

- Chapter Summary.
- Class Notes.
- Important Questions.

Admin-created additional categories are also supported.

### Section B — Sample Papers & PYQs

Default categories:

- Sample Papers.
- Sample Paper Solutions.
- Previous Year Questions (PYQs).
- PYQ Solutions.

Admin-created additional categories are also supported.

## 9.3 Dynamic Categories

Categories must be dynamically manageable through `/admin/materials`.

Admin can:

- Create categories.
- Edit categories.
- Delete empty categories.

Categories are managed separately for each chapter.

No drag-and-drop ordering for resource categories.

Category deletion must be blocked when uploaded files remain inside that category.

The admin must first move or delete the files.

Files must never be automatically deleted when deleting a category.

## 9.4 Supported Files

Supported formats:

- PDF.
- DOCX.

Each uploaded file must be assigned:

- Board.
- Class.
- Subject.
- Chapter.
- Resource section.
- Resource category.
- Custom display title.
- Access status.

## 9.5 File Access Status

Every individual file must have an admin-controlled access status.

Two access types:

**FREE**

- Accessible without login.
- Viewable or downloadable by visitors.
- No fixed limit on free files.

**RESTRICTED**

- Requires student login.
- Student must have the matching assigned board and class.
- Students cannot access restricted files from other boards or classes.
- Visitors can see restricted file listings.
- Restricted files display a lock icon.
- Visitors cannot open or download restricted files.

There is no visitor PDF quota or per-session download counter.

## 9.6 Server-Side Access Security

All restricted-file permissions must be enforced by the backend.

Never rely only on frontend visibility.

The backend must verify:

- Authentication.
- Active account status.
- Deleted status.
- Assigned student board.
- Assigned student class.
- File access status.

Restricted R2 URLs must never be exposed to unauthorised users.

Use controlled server-side access and short-lived signed URLs where appropriate.

## 9.7 PDF Viewing

PDF files use a separate viewing page.

The chapter page must not embed the PDF directly.

The PDF viewer page contains:

- Back to Chapter.
- File title.
- Board context.
- Class context.
- Subject context.
- Chapter context.
- Embedded PDF preview.
- Download PDF button.

FREE PDFs can be viewed without login.

RESTRICTED PDFs require authentication and matching board/class permissions.

## 9.8 DOCX Behaviour

DOCX files use direct download.

No DOCX viewing page.

No online DOCX preview.

FREE and RESTRICTED access permissions apply equally to DOCX files.

## 9.9 File Ordering

Admin can drag and drop files within each category.

- Save the ordering in the database.
- Students see the same ordering.
- Each category has independent file ordering.
- Reordering does not change access status.

## 9.10 File Deletion

Study-material files must be permanently deleted.

When the admin deletes a file:

1. Confirm the deletion.
2. Delete the database record.
3. Permanently delete the associated R2 object.
4. Remove the file reference and metadata.
5. Ensure it is no longer accessible.

Do not soft-delete study-material files.

## 9.11 File Replacement

When replacing an existing file:

1. Upload the replacement file to R2.
2. Verify successful upload.
3. Update the database record.
4. Permanently delete the old R2 object.
5. Preserve existing title, category, access status and ordering unless changed by the admin.

If the replacement upload fails, the old file must remain untouched.

---

# 10. Video Lectures

**Public Route:** `/videos`

All video lectures are free and accessible without login.

## 10.1 Public Structure

The main page displays all boards and classes together.

Navigation:

Board → Class → Subject → Playlists.

## 10.2 Playlist Organisation

- Videos organised by subject.
- Multiple playlists supported under one subject.
- YouTube playlists embedded.
- Playlist navigation.
- Recently added videos.

## 10.3 Admin Management

Admin manages playlists through `/admin/videos`.

Workflow:

1. Select Board.
2. Select Class.
3. Select Subject.
4. Manage playlists for that subject.

## 10.4 Playlist Fields

Add Playlist Form:

1. Custom Playlist Title.
2. YouTube Playlist URL.

## 10.5 Admin Actions

- Add playlist.
- Edit playlist title.
- Edit playlist URL.
- Delete playlist.

Multiple playlists per subject are supported.

Changes automatically reflect on the public Video Lectures page.

---

# 11. Gallery

**Public Route:** `/gallery`

## 11.1 Gallery Design

- Simple responsive image grid.
- No categories.
- Clicking an image opens a larger lightbox.
- Previous and next navigation.
- Close button.
- Desktop keyboard arrow navigation.

## 11.2 Admin Gallery

Route: `/admin/gallery`

The admin can:

- Upload multiple images.
- Add optional captions.
- Edit image captions.
- View uploaded images.
- Delete images permanently.

Images are stored in Cloudflare R2.

When deleting an image:

- Delete its database record.
- Permanently delete the corresponding R2 object.

No gallery categories in Version 1.

---

# 12. Contact Us

**Route:** `/contact`

The Contact page contains six elements:

1. Institute address.
2. Contact phone number.
3. Email address.
4. Embedded Google Maps location and directions.
5. Social media links.
6. Direct WhatsApp contact button.

### Behaviour

- Phone number supports click-to-call.
- Email uses mailto.
- WhatsApp opens a direct conversation.
- Address provides Google Maps directions.
- Responsive layout.

All contact details and external links will initially be fixed website content.

Dynamic contact management through the admin panel is deferred to a future version.

---

# 13. Enquiry System

**Public Route:** `/enquiry`

The enquiry form is the primary admission-interest submission mechanism.

## 13.1 Enquiry Form Fields

1. Student Name.
2. Class.
3. Board.
4. Date of Birth.
5. Phone Number.
6. Email Address.

The form must validate required fields and appropriate input formats.

## 13.2 Submission Process

When an enquiry is successfully submitted:

1. Validate submitted data.
2. Save the enquiry in Supabase PostgreSQL.
3. Set the initial status to New.
4. Generate an in-app admin notification.
5. Send an email notification to the Super Admin through Brevo.
6. Display a success confirmation on the website.

Success message:

**Enquiry Submitted Successfully!**

"Thank you for your interest in our academy. Our team will contact you soon."

No automated confirmation email is sent to the student.

The admin manually contacts the student.

## 13.3 Enquiry Statuses

Available statuses:

- New.
- Contacted.
- Responded.
- Not Interested.
- Admitted.

## 13.4 Admission Workflow

1. Student submits an enquiry.
2. Enquiry appears in the admin panel.
3. Initial status is New.
4. Admin personally contacts the student.
5. Admin discusses admission.
6. Admin updates the enquiry status.
7. Once admission is confirmed, admin manually creates the student's account.
8. Student receives login credentials through the academy's account-creation process.

Enquiry submission never creates a student account automatically.

An enquiry alone never grants access to restricted study materials.

## 13.5 Enquiry Retention

Enquiries must never be deleted.

- No Delete option.
- Preserve submitted details.
- Preserve current status.
- Preserve internal notes.
- Preserve historical records.

## 13.6 Enquiry Internal Notes

Each enquiry has one editable internal notes field.

- Admin can add notes.
- Admin can edit the existing notes.
- Only the latest saved note is retained.
- Notes are private.
- Students and public visitors cannot view them.

## 13.7 Enquiry Filters

The admin can filter enquiries using only:

1. Date Range.
2. Enquiry Status.
3. Board.
4. Class.

Do not add name, phone-number or email search functionality.

Filters may be combined.

---

# 14. Shared Website Footer

A shared footer must appear on every public and student-facing page.

**The footer must not appear anywhere in the Admin Portal.**

The uploaded screenshot is a layout reference only.

Do not copy its exact design, branding, colours, text or external links.

## 14.1 Footer Structure

The footer has four main sections.

### Section 1 — Academy Branding

Vertical arrangement:

1. Company/academy logo.
2. Academy name: A2Smart Classes.
3. Academy tagline.

The logo appears above the name, with the tagline underneath.

### Section 2 — Quick Links

- Home.
- About.
- Faculty.
- Courses.
- Enquiry.
- Contact Us.

### Section 3 — Study Materials

- Study Materials.
- Video Lectures.

### Section 4 — Contact

- Institute Address.
- Contact Number.
- WhatsApp Number.
- Email Address.

## 14.2 Footer Bottom Row

Copyright:

**© 2026 A2Smart Classes. All rights reserved.**

Legal links:

- Privacy Policy.
- Disclaimer.

Developer credit:

**Designed and Developed by Poulami Karmakar and Rohan Roy**

## 14.3 Footer Behaviour

- Desktop: Four-column layout.
- Mobile: Responsive stacked layout.
- Phone number: Click-to-call.
- WhatsApp: Direct WhatsApp link.
- Email: mailto link.
- Address: Google Maps link where appropriate.
- Privacy Policy and Disclaimer are accessible through footer links only.
- Both pages use the shared public website theme and footer.
- Include the discreet Admin Access footer link as described in Section 23.

---

# 15. Privacy Policy

**Route:** `/privacy-policy`

This page contains original privacy-policy content appropriate for the actual platform.

It must not invent academy registrations, certifications, addresses or legal claims.

## 15.1 Information We Collect

A2Smart Classes may collect:

- Student name.
- Date of birth.
- Phone number.
- Email address.
- Parent/guardian name.
- Parent/guardian contact number.
- Board.
- Class.
- Academic session.
- Enrolled subjects.
- Admission details.
- Fee records.
- Information submitted through enquiry forms.

## 15.2 Purpose of Collection

Information is used for:

- Admission enquiries.
- Student account creation.
- Student identification.
- Academic administration.
- Study-material access.
- Fee management.
- Communication with students and parents.
- Account recovery.
- Administrative operations.

## 15.3 Authentication and Security

The website uses custom authentication.

Student and admin passwords must be securely hashed.

OTP verification is used for account recovery.

Access to restricted study materials is controlled through backend authorisation.

## 15.4 Third-Party Services

The platform uses:

- Supabase PostgreSQL for database services.
- Cloudflare R2 for file storage.
- Brevo for transactional emails.
- YouTube for video content.
- Vercel for website hosting.

Relevant service-provider policies and terms apply.

## 15.5 Data Storage

Student records, admission information and fee history are retained for academy administration.

Enquiries are not deleted through the admin panel.

Deactivated student records are preserved.

Study-material files and gallery images are permanently deleted when the admin explicitly deletes them.

## 15.6 Data Protection

Reasonable technical and organisational safeguards must be used to protect personal information.

No online system can guarantee absolute security.

## 15.7 Student Access

Students can view their own profile and fee information.

Students cannot edit their academic profile details.

Students cannot access other students' private information.

## 15.8 Contact

Privacy-related questions can be directed to the academy's official contact email, which will be added before publication.

---

# 16. Disclaimer

**Route:** `/disclaimer`

The Disclaimer page must contain original content appropriate to A2Smart Classes.

## 16.1 Educational Information

Website content, study notes, PDFs and educational resources are intended for learning and academic assistance.

## 16.2 Accuracy

The academy makes reasonable efforts to maintain accurate educational resources.

However, the academy does not guarantee that every document or resource will always be error-free or completely up to date.

## 16.3 Academic Results

Academic performance depends on multiple factors, including student effort, attendance, preparation and examination conditions.

No specific academic result or rank is guaranteed.

## 16.4 Third-Party Content

YouTube videos and other third-party resources may be hosted or controlled by external providers.

A2Smart Classes is not responsible for changes, interruptions or availability of external content beyond its control.

## 16.5 Website Availability

The website may occasionally experience:

- Maintenance.
- Technical interruptions.
- Hosting issues.
- Network problems.
- Third-party service interruptions.

Continuous uninterrupted availability is not guaranteed.

## 16.6 External Links

External links are provided for convenience.

The academy does not control the content or policies of third-party websites.

## 16.7 Intellectual Property

Study materials, documents, images and other educational resources must not be redistributed, reproduced or commercially exploited without appropriate permission.

Users must respect applicable intellectual-property rights.

## 16.8 Limitation of Liability

The website and its educational resources are provided for informational and academic purposes.

Nothing on the website should be interpreted as a guarantee of educational results.

The final published wording should be reviewed for compliance with applicable Indian laws.

---

# 17. Student Authentication

## 17.1 Student Login

**Route:** `/student/login`

Login fields:

1. Student ID.
2. Password.

Student ID is the registered phone number.

Students do not log in using email addresses.

After successful login:

Redirect to:

`/study-materials`

## 17.2 Student Account Creation

Student accounts are created manually by the Super Admin.

The account is created only after admission has been confirmed.

The enquiry form does not create an account.

## 17.3 Temporary Password Generation

The system generates an initial temporary password using:

`<FirstName><BirthYear>`

Example:

Student Name: Rahul Sharma.

Birth Year: 2008.

Temporary Password:

`Rahul2008`

Only the first name and four-digit birth year are used.

The student may keep the generated password or change it.

### Security Requirements

This is a predictable initial password format and should be treated as a temporary credential.

- Never store passwords in plaintext.
- Store only secure password hashes.
- Encourage password change after the first login.
- Apply login rate limiting.
- Never expose passwords in frontend code or public responses.

---

# 18. Student Profile

**Route:** `/profile`

The student profile is integrated into the main website.

It is not a separate dashboard.

## 18.1 Profile Fields

Display all seven fields:

1. Student Name.
2. Student ID / Registered Phone Number.
3. Email Address.
4. Date of Birth.
5. Board.
6. Class.
7. Academic Session.

## 18.2 Permissions

Students:

- Can view their details.
- Cannot edit their profile.

Super Admin:

- Can edit all seven fields through student management.

Changes made by the admin must reflect in the student's profile.

---

# 19. Student Navigation

After successful login:

- Student sees a circular profile badge.
- Badge contains initials derived from the first and last name.
- Clicking the badge opens a dropdown.

Dropdown:

1. Profile.
2. Fees.
3. Log out.

Student navigation routes:

- Profile → `/profile`
- Fees → `/fees`

Study Materials remain accessible through the main website.

Video Lectures remain publicly accessible without login.

---

# 20. Student Password Management

Students have two password-management options.

## 20.1 Change Password

Accessible through the student's Profile section.

Fields:

1. Current Password.
2. New Password.
3. Confirm New Password.

Backend requirements:

- Verify current password.
- Validate new password.
- Confirm both new-password fields match.
- Securely hash the new password.
- Update the stored password hash.

## 20.2 Forgot Password

Available on `/student/login`.

### Step 1 — Identity Information

Ask for:

- Registered phone number.
- Registered email address.

The system verifies that the details match the student's account.

### Step 2 — OTP Generation

- Generate a random 4-digit OTP on the backend.
- Send the OTP to the registered email through Brevo.
- OTP validity: 5 minutes.

### Step 3 — OTP Verification

- Student enters OTP.
- Backend validates OTP.
- Limit incorrect attempts.
- OTP cannot be reused.

### Step 4 — Resend OTP

- Resend available after 30 seconds.
- New OTP invalidates the previous OTP.
- Apply appropriate rate limiting.

### Step 5 — New Password

Fields:

1. New Password.
2. Confirm New Password.

Update the password only after successful OTP validation.

## 20.3 OTP Security

OTP generation, storage, expiry and validation must happen on the backend.

Avoid exposing OTPs in frontend responses or application logs.

---

# 21. Student Fees

**Route:** `/fees`

Students can access their own fee records only.

## 21.1 Academic Year

The academic year runs from April to March.

Only one academic year is visible at a time.

Students can select another year to view its records.

Previous years are not displayed by default.

## 21.2 Empty Fee Records

New students initially have empty fee records.

No automatic fee generation.

No automatic Paid or Unpaid status.

When no fee records exist for the selected academic year, display:

"No fee records available for this academic year."

## 21.3 Fee Information

Display:

- Monthly Fee Amount.
- Last Month Paid.
- Next Applicable / Upcoming Fee Month.
- Total Paid.
- Outstanding Fees.
- Twelve-month payment calendar.

## 21.4 Payment Calendar

The calendar covers April through March.

Status indicators:

- Paid: Green.
- Unpaid / Due: Red.
- Upcoming: Grey.

A current unpaid month must display Due/Unpaid, not Upcoming.

A month does not become unpaid automatically merely because it has passed.

The admin must explicitly create or update the relevant fee record.

## 21.5 Last Month Paid

Derived from the latest admin-recorded payment.

## 21.6 Upcoming Fee Month

Determined from the selected academic year's applicable fee records.

Do not infer or invent future fee obligations.

## 21.7 Fee Calculation

Fee records are maintained separately for each student, month and academic year.

Unpaid amounts carry forward.

The outstanding balance represents the total unpaid applicable fee amounts.

Example:

Monthly fee: ₹1,000.

April unpaid: ₹1,000.

May unpaid: ₹1,000.

June unpaid: ₹1,000.

Outstanding balance: ₹3,000.

## 21.8 Independent Month Settlement

Students may settle an older unpaid month independently.

Example:

In June, a student pays only April's ₹1,000.

The admin records the payment against April.

Result:

- April: Paid.
- May: Unpaid.
- June: Unpaid.
- Outstanding: ₹2,000.

Do not force the student to clear every outstanding month together.

## 21.9 Partial Payments

Partial payments are not supported in Version 1.

A monthly fee must be paid in full to be marked Paid.

Monthly status is either:

- Paid.
- Unpaid.

## 21.10 Payment History

Every payment must be stored as a separate historical transaction.

Record:

- Student.
- Academic year.
- Settled month.
- Amount.
- Payment date.
- Payment method.

Payment methods:

- UPI.
- Cash.

## 21.11 Immutable Paid Records

Once a monthly fee is marked Paid:

- It cannot be edited.
- It cannot be deleted.
- Its amount cannot be changed.
- Its payment date cannot be changed.
- Its payment method cannot be changed.

Preserve the historical payment transaction permanently.

## 21.12 Fee Amount Changes

Admin can change the monthly fee amount effective from a selected month.

Example:

Old monthly fee: ₹1,000.

New monthly fee: ₹1,200.

Effective from August.

April–July retain ₹1,000.

August onward uses ₹1,200.

Previous paid and unpaid monthly records retain their original amounts.

## 21.13 Student Data Isolation

Students must only be able to access their own fee records.

All access checks must happen on the backend.

---

# 22. Admin Portal

Admin routes:

| Page | Route |
|---|---|
| Admin Login | `/admin/login` |
| Admin Dashboard | `/admin/dashboard` |
| Students | `/admin/students` |
| Teachers | `/admin/teachers` |
| Academics | `/admin/academics` |
| Materials | `/admin/materials` |
| Videos | `/admin/videos` |
| Enquiries | `/admin/enquiries` |
| Gallery | `/admin/gallery` |
| Fees | `/admin/fees` |

No dynamic website-content management section in Version 1.

No separate notification management page.

## 22.1 Admin Dashboard

**Route:** `/admin/dashboard`

The dashboard will intentionally remain empty.

Do not add:

- Statistics.
- Summary cards.
- Charts.
- Graphs.
- Recent activity.
- Additional dashboard widgets.

The admin can navigate directly to management sections.

## 22.2 Admin Account Structure

Version 1 contains only one Super Admin.

The Super Admin has full administrative permissions.

No additional admin accounts.

No teacher login accounts.

No public admin registration.

Future versions may introduce:

- Teachers Portal.
- Individual teacher accounts.
- Teacher roles.
- Role-based teacher permissions.

These are not part of Version 1.

## 22.3 Initial Super Admin Setup

The initial Super Admin account must be created through a controlled setup process.

Credentials are configured securely through environment variables.

Requirements:

- No public registration.
- Never expose credentials in frontend code.
- Never commit credentials to GitHub.
- Store passwords as secure hashes.
- Prevent uncontrolled repeated account creation.
- Remove or disable the initial setup mechanism after successful provisioning.

---

# 23. Admin Login and Navigation

## 23.1 Admin Login

Route:

`/admin/login`

The admin uses the configured Super Admin credentials.

There is no public registration page.

## 23.2 Header Login Dropdown

Desktop:

A single Login button in the public header.

Clicking it displays:

- Student Login.
- Admin Login.

Do not display two separate login buttons.

The single dropdown preserves space for the Enroll Now button.

Mobile:

The hamburger menu contains separate:

- Student Login.
- Admin Login.

## 23.3 Admin Access Footer Link

The public website footer also contains a discreet Admin Access link.

It opens:

`/admin/login`

## 23.4 Same Domain

Admin authentication must remain on the same domain.

Do not create a separate admin subdomain.

## 23.5 Admin Portal Layout

The admin portal uses its own administrative layout.

The public website footer must not appear in the Admin Portal.

The admin navigation should provide access to the approved management sections.

---

# 24. Admin Password Management

The Super Admin has both Change Password and Forgot Password functionality.

## 24.1 Change Password

Available after admin login.

Fields:

1. Current Password.
2. New Password.
3. Confirm New Password.

Backend verifies the current password before updating it.

## 24.2 Forgot Password

Available on `/admin/login`.

Process:

1. Enter registered admin email.
2. Backend generates random 4-digit OTP.
3. Send OTP through Brevo.
4. OTP expires after 5 minutes.
5. Resend available after 30 seconds.
6. Limit incorrect attempts.
7. Invalidate previous OTP when generating a new OTP.
8. Validate OTP.
9. Display New Password and Confirm New Password fields.
10. Update password after successful validation.

## 24.3 OTP Requirements

Same rules as student OTP recovery:

- Backend-generated random 4-digit OTP.
- Five-minute validity.
- Thirty-second resend cooldown.
- Attempt limiting.
- Single-use OTP.
- Secure server-side validation.

## 24.4 Admin Logout

The Super Admin can log out using the account menu.

Logout workflow:

1. Admin selects Logout.
2. Display confirmation.
3. Invalidate the server-side authentication session.
4. Clear authentication cookies.
5. Redirect to `/admin/login`.
6. Prevent access to protected admin pages after logout.
7. Prevent browser-back navigation from restoring authenticated admin content.

---

# 25. Admin Students

**Route:** `/admin/students`

This section manages student accounts and student information.

## 25.1 Student Listing Workflow

When the admin opens `/admin/students`:

1. Select Board.
2. Select Class.
3. Select Academic Year.
4. Display matching student records.

All three filters must be selected before showing the corresponding filtered student table.

## 25.2 Student Table

Columns:

| Field | Details |
|---|---|
| Student Name | Full name |
| Class | Enrolled class |
| Date of Birth | DOB |
| Email | Registered email |
| Phone Number | Student ID |
| Subjects | Enrolled subjects |
| Parent/Guardian Name | Guardian name |
| Parent's Number | Guardian contact |
| Admission Date | Admission date |
| Account Status | Active / Inactive |
| Actions | Edit / Delete |

The selected board and academic year can be represented by the active filters.

## 25.3 Search

Search by:

- Student name.
- Phone number.
- Email address.

## 25.4 Pagination

Provide pagination for large student lists.

## 25.5 Add Student Form

Fields:

1. Student Name.
2. Date of Birth.
3. Email Address.
4. Phone Number.
5. Board.
6. Class.
7. Academic Year.
8. Enrolled Subjects.
9. Parent/Guardian Name.
10. Parent's Phone Number.
11. Admission Date.

Student ID is the registered phone number.

## 25.6 Initial Password

The system generates:

`<FirstName><BirthYear>`

Example:

Rahul Sharma, born in 2008:

`Rahul2008`

Student can retain or change this password.

Never store the password in plaintext.

## 25.7 Edit Student

Admin can edit all student information.

Updated information must reflect in the student profile.

## 25.8 Soft Deletion

Student records must not be permanently deleted.

When the admin chooses Delete:

1. Ask for confirmation.
2. Set account status to INACTIVE.
3. Set `deleted = 1`.
4. Preserve all student records.
5. Preserve fee history.
6. Preserve academic records.
7. Revoke login access.
8. Revoke restricted study-material access.

Suggested database fields:

- `account_status`
- `deleted`

When reactivating:

- Set account status to ACTIVE.
- Set `deleted = 0`.
- Restore authorised access.

## 25.9 Inactive Student Visibility

By default, show only Active students.

Inactive students remain hidden.

The admin can explicitly switch to view inactive records.

Admin can reactivate inactive students.

## 25.10 Security

All student authentication and data-access operations must verify:

- Account status.
- Deleted flag.

Do not rely only on hiding inactive students in the UI.

---

# 26. Admin Teachers

**Route:** `/admin/teachers`

Teacher management is performed through forms.

## 26.1 Add Teacher Form

Fields:

1. Teacher Name.
2. Teacher Photo.
3. Qualifications.
4. Subjects Taught.
5. Teaching Experience.

## 26.2 Multiple Qualifications

Support multiple qualifications per teacher.

Example:

- BA.
- MA.
- B.Ed.

Admin can add and remove qualifications.

Each qualification appears as a separate badge on the public Faculty page.

## 26.3 Multiple Subjects

Support multiple subjects per teacher.

Admin can add and remove subjects.

## 26.4 Teaching Experience

Numerical field measured in years.

Example:

Admin enters 8.

Public page displays:

"8 Years of Experience".

## 26.5 Edit Teacher

Admin can update:

- Name.
- Photo.
- Qualifications.
- Subjects.
- Experience.

## 26.6 Delete Teacher

Confirmation required before deletion.

Deleted teachers are removed from the public Faculty page.

Changes automatically reflect on `/faculty`.

Teacher login accounts are not part of Version 1.

---

# 27. Admin Academics

**Route:** `/admin/academics`

Use one hierarchical academic-management interface.

Do not create five unrelated independent management pages.

## 27.1 Academic Structure

Boards → Classes → Subjects → Chapters.

Academic Sessions are managed independently within the same interface.

## 27.2 Hierarchical Workflow

1. Manage/select Board.
2. Select Board to manage its Classes.
3. Select Class to manage its Subjects.
4. Select Subject to manage its Chapters.

At each level, the admin can view and manage the relevant records.

## 27.3 Board Management

Admin can:

- Add board.
- Edit board.
- Delete board, subject to dependencies.

Board examples such as CBSE and ICSE are illustrative.

## 27.4 Class Management

Classes belong to a board.

Admin can:

- Add class.
- Edit class.
- Delete or deactivate class where appropriate.
- Enter any class name manually.
- Drag and drop classes to arrange their order.

Class names are not restricted to Class 1–12.

Examples:

- Class 9.
- Class 10.
- Class 11.
- Class 12.
- Foundation.

Class ordering is maintained independently for each board.

## 27.5 Subject Management

Subjects belong to a board and class.

Admin can:

- Add subject.
- Edit subject.
- Delete subject, subject to dependencies.
- Enter custom subject names.
- Drag and drop subjects.
- Upload subject photographs.
- Replace photographs.
- Edit descriptions.
- Set course mode.
- Set course duration.
- Set course fees.

Subject fields:

1. Subject Name.
2. Subject Photo.
3. Subject Description.
4. Course Mode: Online / Offline.
5. Course Duration.
6. Course Fees.

Changes automatically reflect on the public Courses page.

Subject ordering is maintained independently for each class.

## 27.6 Chapter Management

Chapters belong to a specific board, class and subject.

Admin can:

- Add chapter.
- Edit chapter.
- Delete chapter, subject to dependencies.
- Enter custom chapter names.
- Drag and drop chapters.

Chapter order determines the order on the Study Materials page.

## 27.7 Academic Sessions

Academic Sessions are managed independently of boards and classes.

Examples:

- 2026–2027.
- 2027–2028.
- 2028–2029.

Admin can:

- Create sessions.
- Edit sessions.
- Manage session dates.
- Mark session Active or Inactive.

Suggested fields:

- Session Name.
- Start Date.
- End Date.
- Status.

Only one academic session may be Active at a time.

When a new session becomes Active, the previous active session becomes Inactive.

The active session can be used as the default selection when adding students and managing fees.

Historical sessions and records must be preserved.

## 27.8 Dependency Protection

Academic records are interconnected.

Do not allow accidental deletion of a board, class, subject or chapter when dependent records still exist.

Preserve historical student and fee records.

Use appropriate deactivation or controlled removal rather than cascading destructive deletion.

---

# 28. Admin Materials

**Route:** `/admin/materials`

Study-material categories and files are managed separately from Academic Management.

## 28.1 Workflow

1. Select Board.
2. Select Class.
3. Select Subject.
4. Select Chapter.
5. Manage categories and files belonging to that chapter.

Categories and uploaded files are managed on the same chapter-specific screen.

## 28.2 Category Management

Two sections:

### Notes

- Chapter Summary.
- Class Notes.
- Important Questions.
- Admin-created categories.

### Sample Papers & PYQs

- Sample Papers.
- Sample Paper Solutions.
- Previous Year Questions.
- PYQ Solutions.
- Admin-created categories.

## 28.3 Category Actions

Admin can:

- Add category.
- Edit category.
- Delete empty category.

Categories do not support drag-and-drop ordering.

Category deletion is blocked when files exist.

Files must be moved or deleted first.

## 28.4 File Upload Form

Fields:

1. File Upload (PDF/DOCX).
2. Custom Display Title.
3. Resource Section.
4. Resource Category.
5. Access Status (FREE/RESTRICTED).

Board, Class, Subject and Chapter are already determined by the selected hierarchy.

## 28.5 File Actions

Admin can:

- Upload files.
- Edit display titles.
- Replace files.
- Change access status.
- Change categories.
- Delete files.
- Drag and drop files within a category.

## 28.6 Permanent Deletion

Study-material files are permanently deleted from both database and Cloudflare R2.

No soft deletion.

## 28.7 Safe Replacement

Upload the replacement first.

Verify success.

Update database references.

Only then delete the old R2 object.

If the replacement upload fails, retain the existing file.

---

# 29. Admin Videos

**Route:** `/admin/videos`

## 29.1 Workflow

1. Select Board.
2. Select Class.
3. Select Subject.
4. Manage playlists.

## 29.2 Add Playlist Form

Fields:

1. Custom Playlist Title.
2. YouTube Playlist URL.

## 29.3 Playlist Management

- Multiple playlists per subject.
- Add playlist.
- Edit playlist title.
- Edit playlist URL.
- Delete playlist.

Changes automatically reflect on `/videos`.

All videos remain public and free.

---

# 30. Admin Gallery

**Route:** `/admin/gallery`

## 30.1 Upload

- Multiple images can be uploaded.
- Optional image captions.
- Store images in R2.

## 30.2 Management

- View images.
- Edit captions.
- Delete images.

## 30.3 Deletion

Images are permanently deleted from R2 and the database.

No soft deletion.

Public gallery updates automatically.

---

# 31. Admin Enquiries

**Route:** `/admin/enquiries`

## 31.1 Enquiry List

Display submitted enquiries and their current status.

Statuses:

- New.
- Contacted.
- Responded.
- Not Interested.
- Admitted.

## 31.2 Individual Enquiry

Opening an enquiry displays:

- Student Name.
- Class.
- Board.
- Date of Birth.
- Phone Number.
- Email Address.
- Enquiry Submission Date.
- Current Status.
- Internal Notes.

## 31.3 Status Updates

Admin can change enquiry status.

## 31.4 Internal Notes

One editable notes field per enquiry.

No multiple-note history.

Notes are private to the Super Admin.

## 31.5 Filters

Only:

- Date Range.
- Enquiry Status.
- Board.
- Class.

No name, email or phone-number search.

## 31.6 Retention

Enquiries must never be deleted.

No Delete button.

Preserve all enquiry records.

## 31.7 Admission

Admin manually creates student account only after admission confirmation.

---

# 32. Admin Notifications

There is no separate notification management page in Version 1.

However, new enquiry notifications are still required.

## 32.1 Email Notifications

When an enquiry is submitted:

- Send an email to the Super Admin through Brevo.
- Include relevant student details.
- Notify the admin that a new enquiry has arrived.

## 32.2 In-App Notifications

Generate an in-app notification inside the admin panel.

The admin can identify new enquiries and navigate to the corresponding enquiry.

No separate notification history or notification-management page is required.

Students do not receive enquiry-confirmation emails.

---

# 33. Admin Fees

**Route:** `/admin/fees`

## 33.1 Overview Workflow

When the admin opens the page:

1. Select Board.
2. Select Class.
3. Select Academic Year.
4. Display the matching student table.

## 33.2 Consolidated Student Fee Table

Only the student table with individual fee overviews.

No summary cards or aggregate statistics.

Columns:

| Field | Details |
|---|---|
| Student Name | Full name |
| Phone Number | Student ID |
| Monthly Fee | Current applicable fee |
| Last Month Paid | Latest settled month |
| Upcoming Fee Month | Next applicable month |
| Total Paid | Paid amount in selected year |
| Outstanding | Remaining unpaid amount |
| Fee Status | Clear / Due |
| Action | Open Fee Record |

## 33.3 Individual Fee Record

Clicking a student opens their individual fee record.

Display:

- Monthly Fee Amount.
- Last Month Paid.
- Upcoming Fee Month.
- Total Fees Paid.
- Outstanding Fees.
- Twelve-month payment calendar.

## 33.4 Twelve-Month Calendar

Display all 12 months of the selected academic year.

For each month:

- Monthly fee.
- Payment status.
- Payment date.
- Payment method.

## 33.5 Admin Payment Management

Admin can:

- Select academic year.
- View all monthly statuses.
- Change monthly fee amount for applicable unpaid records.
- Mark unpaid month Paid after full payment.
- Record payment method.
- Record payment date.
- View historical payment records.

Payment methods:

- UPI.
- Cash.

## 33.6 Fee Records

New students initially have empty fee records.

No automatic fee generation.

Admin manually creates fee records.

## 33.7 Payment Immutability

Once Paid:

- Cannot edit.
- Cannot delete.
- Cannot change amount.
- Cannot change payment date.
- Cannot change payment method.

Historical payment records must remain preserved.

## 33.8 Carry-Forward

Unpaid fees accumulate in the outstanding balance.

A payment must be allocated to a specific month.

Paying an older month reduces the outstanding balance by the amount settled for that month.

## 33.9 No Partial Payments

Only full monthly fee settlement is supported.

---

# 34. Security Requirements

Security must be implemented at the backend, not only through frontend visibility.

## 34.1 Authentication

- Custom authentication.
- Secure password hashing.
- Secure session handling.
- Protected admin routes.
- Protected student routes.
- Login rate limiting.
- Logout session invalidation.

## 34.2 Role Separation

Version 1 contains:

- One Super Admin.
- Student accounts.

No teacher login accounts.

## 34.3 Student Access

Students may access:

- Their own profile.
- Their own fee records.
- FREE study materials.
- RESTRICTED materials matching their assigned board and class.

## 34.4 Restricted Files

Verify permissions on the server before providing file access.

Never expose restricted R2 object URLs to unauthorised visitors.

## 34.5 Account Deactivation

Inactive or deleted student accounts must lose authentication and protected resource access immediately.

## 34.6 Password and OTP Security

- Hash passwords.
- Store OTPs securely.
- Expire OTPs.
- Enforce resend cooldowns.
- Limit failed verification attempts.
- Prevent OTP reuse.
- Rate-limit login and recovery endpoints.

## 34.7 Operational Security

Include:

- Database backups.
- File backups where appropriate.
- Audit logs.
- Error monitoring.
- Spam protection.

---

# 35. Shared Components

Reusable components should be created for:

- Public Header.
- Mobile Navigation.
- Login Dropdown.
- Footer.
- Board Cards.
- Class Cards.
- Subject Cards.
- Teacher Cards.
- Chapter Lists.
- Resource Category Sections.
- File Cards.
- PDF Viewer.
- Video Playlist Player.
- Gallery Grid.
- Gallery Lightbox.
- Enquiry Form.
- Student Profile.
- Fee Calendar.
- Admin Sidebar/Navigation.
- Admin Tables.
- Add/Edit Forms.
- Confirmation Dialogs.
- OTP Verification.
- Password Forms.
- Status Indicators.

Avoid duplicating the same UI logic across pages.

---

# 36. Suggested Application Structure

The following is a suggested organisational structure, not a restriction on implementation.

```text
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── academics/
│   │   ├── faculty/
│   │   ├── study-materials/
│   │   ├── videos/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── enquiry/
│   │   ├── privacy-policy/
│   │   └── disclaimer/
│   │
│   ├── student/
│   │   ├── login/
│   │   ├── forgot-password/
│   │   └── change-password/
│   │
│   ├── profile/
│   ├── fees/
│   │
│   ├── admin/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── students/
│   │   ├── teachers/
│   │   ├── academics/
│   │   ├── materials/
│   │   ├── videos/
│   │   ├── enquiries/
│   │   ├── gallery/
│   │   └── fees/
│   │
│   └── api/
│
├── components/
│   ├── layout/
│   ├── public/
│   ├── student/
│   ├── admin/
│   ├── academics/
│   ├── materials/
│   ├── videos/
│   ├── gallery/
│   └── shared/
│
├── lib/
│   ├── auth/
│   ├── db/
│   ├── storage/
│   ├── email/
│   ├── validation/
│   └── permissions/
│
├── server/
│   ├── actions/
│   ├── services/
│   └── repositories/
│
└── types/
```

The implementation may adjust this structure where necessary while preserving the agreed product behaviour.

---

# 37. Implementation Rules

1. Do not hardcode academic boards, classes, subjects or chapters.
2. Use database-driven academic structures.
3. Do not introduce features that have not been approved.
4. Do not invent academy branding or contact details.
5. Do not change approved page layouts without discussion.
6. Preserve existing student and fee history.
7. Do not allow students to edit profile details.
8. Do not automatically create accounts after enquiry submission.
9. Do not automatically generate fee records for new students.
10. Do not assume past months are unpaid.
11. Do not allow changes to completed paid transactions.
12. Do not expose restricted study-material files.
13. Do not use soft deletion for study-material files or gallery images.
14. Use soft deletion for student accounts.
15. Never delete enquiries.
16. Do not show the public website footer in the admin portal.
17. Keep all admin routes on the same domain.
18. Make every page responsive.
19. Validate inputs on both client and server.
20. Implement all permissions on the backend.
21. Preserve the exact approved OTP rules.
22. Avoid unnecessary external dependencies and paid services.
23. Maintain consistent design and reusable components.
24. Test all important workflows before deployment.

---

# 38. Confirmed vs Pending Requirements

## Confirmed

- Public website structure.
- Homepage layout.
- About page layout.
- Faculty page layout.
- Courses hierarchy.
- Study Materials hierarchy.
- FREE and RESTRICTED file access.
- PDF separate viewing page.
- DOCX direct download.
- Video Lectures structure.
- Gallery structure.
- Contact page elements.
- Enquiry form and admission workflow.
- Student login and profile.
- Student password recovery.
- Admin password recovery.
- Four-digit OTP.
- Five-minute OTP expiry.
- Thirty-second resend cooldown.
- One Super Admin.
- Environment-variable Super Admin setup.
- Empty admin dashboard.
- Student soft deletion.
- Teacher management.
- Hierarchical academic management.
- Independent academic sessions.
- Drag-and-drop class, subject and chapter ordering.
- Separate material management.
- Permanent R2 file deletion.
- Safe file replacement.
- Multiple video playlists.
- Gallery image management.
- Enquiry management.
- Enquiry notifications.
- No enquiry deletion.
- Fee carry-forward.
- No partial payments.
- Immutable paid fee records.
- Fee changes effective from selected month.
- Consolidated fee student table without summary cards.
- Shared footer.
- Privacy Policy and Disclaimer.
- Desktop Login dropdown.
- Mobile separate login menu items.
- Admin Access footer link.
- Same-domain admin login.

## Pending Clarifications

The following details should not be treated as final until discussed:

1. Exact academy logo and tagline.
2. Global colour palette and typography.
3. Exact content for the homepage sections not yet specified.
4. Exact quotation and story content for the About page.
5. Actual faculty information and photographs.
6. Actual contact details and social media links.
7. Actual academy address and Google Maps location.
8. Whether the Super Admin account settings need additional profile functionality.
9. Whether password recovery should use any additional verification beyond the agreed email OTP.
10. Exact outstanding-fee calculation details for unusual or historical cases.
11. Whether course fees and student fee records need any additional relationship beyond the agreed workflows.
12. Final wording and legal review of the Privacy Policy and Disclaimer.
13. Final detailed visual design of the admin portal.
14. Detailed design of the Student Profile and Fees pages.
15. Any additional features introduced through future discussions.

---

# 39. Final Product Direction

A2Smart Classes Version 1 must be built as a unified coaching academy platform.

The public website should provide a professional academy experience.

The student experience should remain integrated into the main website and provide secure access to student-specific information and restricted learning resources.

The Super Admin portal should provide complete operational control over the academy's approved Version 1 functionality.

The system must prioritise:

- Security.
- Data integrity.
- Maintainability.
- Responsive design.
- Dynamic academic management.
- Reliable file access.
- Historical record preservation.
- Cost-conscious infrastructure.
- Extensibility for future versions.

**Most importantly: implement the requirements documented here as approved. Do not introduce additional features, pages, workflows or business rules without discussing them first.**

---

**End of product requirements — A2Smart Classes Version 1.0**