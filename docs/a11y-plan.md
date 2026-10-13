# Accessibility Plan

## Structure
- Semantic landmarks: header, nav, main, section, footer
- One h1 per page, then h2 for each section, in order
- A "Skip to content" link as the first focusable element

## Keyboard
- Every button, link and input can be reached with Tab
- Tab order follows the visual order
- Visible focus outline on every interactive element
- Enter submits the form; Escape cancels editing

## Forms
- Every input has a <label> connected with for/id
- Error messages appear next to the field and are announced to screen readers

## Live announcements
- Form errors and success messages: role="status" (aria-live="polite")
- Monthly cap: polite when under the cap, assertive when exceeded

## Visuals
- Text contrast of at least 4.5:1 against its background
- Information is never shown by color alone (add text or icons)
- Highlighted search matches use <mark>

## Responsive
- Mobile-first, with breakpoints at 360px, 768px and 1024px