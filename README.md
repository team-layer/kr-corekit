# corekit

A comprehensive collection of TypeScript utility functions for modern web development.

## Features

- 🛠️ **Comprehensive**: String, object, cookie, number, validation, and common utilities
- 📦 **Tree-shakable**: Import only what you need
- 🔒 **Type-safe**: Full TypeScript support with type definitions
- ⚡ **Lightweight**: Minimal dependencies and optimized for performance
- 🧪 **Well-tested**: Extensive test coverage with comprehensive test cases

## Installation

```bash
npm install corekit
# or
pnpm add corekit
# or
yarn add corekit
```

## Usage

```typescript
import {
  stringUtil,
  objectUtil,
  cookieUtil,
  numberUtil,
  validationUtil,
  commonUtil,
} from "corekit";

// String utilities
const escaped = stringUtil.escapeHtml("<div>Hello</div>");
const unescaped = stringUtil.unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;");

// Object utilities
const cleaned = objectUtil.clearNullProperties({ a: 1, b: null, c: 3 });
const frozen = objectUtil.deepFreeze({ a: { b: 1 } });

// Number utilities
const total = numberUtil.sum(1, 2, 3, 4, 5); // 15
const difference = numberUtil.subtract(10, 3); // 7

// Validation utilities
const isValid = validationUtil.checkEmail("user@example.com"); // true
const isHttpUrl = validationUtil.checkHttpUrl("https://example.com"); // true

// Common utilities
const empty = commonUtil.isEmpty(""); // true
const notEmpty = commonUtil.isEmpty("hello"); // false

// Cookie utilities
cookieUtil.setCookie("theme", "dark");
const theme = cookieUtil.getCookie("theme");
```

## API Reference

### StringUtil

- `escapeHtml(str: string): string` - Escapes HTML special characters
- `unescapeHtml(str: string): string` - Unescapes HTML entities

### ObjectUtil

- `clearNullProperties(obj: object): object` - Removes null/undefined properties
- `deepFreeze(obj: object): object` - Deep freezes an object recursively

### NumberUtil

- `sum(...numbers: number[]): number` - Calculates sum of numbers
- `subtract(...numbers: number[]): number` - Calculates subtraction of numbers

### ValidationUtil

- `checkEmail(email: string): boolean` - Validates email format
- `checkHttpUrl(url: string): boolean` - Validates HTTP/HTTPS URL format

### CommonUtil

- `isEmpty(value: unknown): boolean` - Checks if a value is empty (null, undefined, "", 0, [], {}, empty Set/Map, NaN, or invalid Date)

### CookieUtil

- `setCookie(name: string, value: string, options?: object): void` - Sets a cookie
- `getCookie(name: string): string | null` - Gets a cookie value

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.
