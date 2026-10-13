# Student Finance Tracker: Spec

## Data model

Each transaction record:

| Field       | Type   | Example                  | Notes                              |
|-------------|--------|--------------------------|------------------------------------|
| id          | string | "txn_0001"               | Unique, generated on creation      |
| description | string | "Lunch at cafeteria"     | No leading/trailing/double spaces  |
| amount      | number | 12.50                    | Max 2 decimals, in `currency`      |
| currency    | string | "RWF"                    | One of the 3 supported currencies  |
| category    | string | "Food"                   | Letters, spaces, hyphens only      |
| date        | string | "2026-10-12"             | YYYY-MM-DD                         |
| createdAt   | string | "2026-10-12T09:30:00Z"   | ISO timestamp, set once            |
| updatedAt   | string | "2026-10-12T09:30:00Z"   | ISO timestamp, changes on edit     |

## Settings object

- baseCurrency: "RWF"
- rates: { USD: ..., EUR: ... } (entered manually)
- categories: Food, Books, Transport, Entertainment, Fees, Other
- monthlyCap: number

## Storage keys (localStorage)

- `sft:transactions`
- `sft:settings`