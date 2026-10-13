// scripts/validators.js
// Regex rules and validation functions for the Student Finance Tracker.

export const rules = {
  // No leading or trailing spaces
  description: /^\S(?:.*\S)?$/,
  // 0 or a number without leading zeros, optional 1-2 decimals
  amount: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
  // YYYY-MM-DD
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  // Letters, with single spaces or hyphens between words
  category: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
  // Advanced: back-reference catches a repeated word ("coffee coffee")
  duplicateWord: /\b(\w+)\s+\1\b/i,
};

const ok = () => ({ valid: true, message: '' });
const fail = (message) => ({ valid: false, message });

export function validateDescription(value) {
  if (!rules.description.test(value)) {
    return fail('Description cannot be empty or start/end with a space.');
  }
  if (/\s{2,}/.test(value)) {
    return fail('Description cannot contain double spaces.');
  }
  if (rules.duplicateWord.test(value)) {
    return fail('Description repeats a word (for example "coffee coffee").');
  }
  return ok();
}

export function validateAmount(value) {
  if (!rules.amount.test(value)) {
    return fail('Enter a number like 12 or 12.50 (max 2 decimals).');
  }
  return ok();
}

export function validateDate(value) {
  if (!rules.date.test(value)) {
    return fail('Use the format YYYY-MM-DD, for example 2026-10-12.');
  }
  // The regex allows 2026-02-31, so also check the real calendar date.
  const [y, m, d] = value.split('-').map(Number);
  const real = new Date(y, m - 1, d);
  if (real.getFullYear() !== y || real.getMonth() !== m - 1 || real.getDate() !== d) {
    return fail('That date does not exist.');
  }
  return ok();
}

export function validateCategory(value) {
  if (!rules.category.test(value)) {
    return fail('Category can only use letters, spaces and hyphens.');
  }
  return ok();
}