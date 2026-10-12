# Wireframes

## Mobile (360px): one column

```
+-----------------------+
| [Skip to content]     |
| Student Finance   [≡] |
+-----------------------+
| ABOUT                 |
| Purpose + contact     |
+-----------------------+
| DASHBOARD             |
| Total records:   12   |
| Total spent:  45,000  |
| Top category:   Food  |
| Cap: 18,000 left      |
| [7-day bar chart]     |
+-----------------------+
| ADD TRANSACTION       |
| Description [______]  |
| Amount      [______]  |
| Currency    [RWF v]   |
| Category    [Food v]  |
| Date        [______]  |
| [Save]                |
+-----------------------+
| RECORDS               |
| Search regex [_____]  |
| [ ] Case-insensitive  |
| Sort: [Date v]        |
| +-------------------+ |
| | Lunch    12.50    | |
| | Food  2026-10-12  | |
| | [Edit] [Delete]   | |
| +-------------------+ |
+-----------------------+
| SETTINGS              |
| Base currency, rates, |
| categories, cap,      |
| [Import] [Export]     |
+-----------------------+
| Footer                |
+-----------------------+
```

## Desktop (1024px): wider layout

```
+--------------------------------------------------------+
| [Skip to content]                                      |
| Student Finance   About Dashboard Records Add Settings |
+--------------------------------------------------------+
| DASHBOARD                                              |
| [Records: 12] [Total: 45,000] [Top: Food] [Cap: left]  |
| [ 7-day bar chart ]                                    |
+--------------------------------------------------------+
| ADD / EDIT FORM        | RECORDS                       |
| Description [_____]    | Search [_____] [x] ignore case|
| Amount      [_____]    | Sort: [Date v]                |
| Currency    [RWF v]    | Description | Amt | Cat | Date |
| Category    [Food v]   | Lunch       | 12  | Food | ... |
| Date        [_____]    | Bus pass    | 45  | Trans| ... |
| [Save]                 |            [Edit] [Delete]    |
+--------------------------------------------------------+
| SETTINGS: base currency, rates, categories, cap, JSON  |
+--------------------------------------------------------+
| Footer                                                 |
+--------------------------------------------------------+
```

## Breakpoints
- 360px: single column, records as cards, menu button
- 768px: nav links visible, stats in 2 columns
- 1024px: form and records side by side, records as a table