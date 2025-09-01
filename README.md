# kr-corekit

A comprehensive collection of TypeScript utility functions for modern web development.

## Features

- 🛠️ **Comprehensive**: String, object, cookie, number, validation, and common utilities
- 📦 **Tree-shakable**: Import only what you need
- 🔒 **Type-safe**: Full TypeScript support with type definitions
- ⚡ **Lightweight**: Minimal dependencies and optimized for performance
- 🧪 **Well-tested**: Extensive test coverage with comprehensive test cases

## Installation

```bash
npm install kr-corekit
# or
pnpm add kr-corekit
# or
yarn add kr-corekit
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
} from "kr-corekit";

// String utilities
const escaped = stringUtil.escapeHtml("<div>Hello</div>");
const unescaped = stringUtil.unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;");

// Object utilities
const cleaned = objectUtil.clearNullProperties({ a: 1, b: null, c: 3 });
const frozen = objectUtil.deepFreeze({ a: { b: 1 } });

// Number utilities
const total = numberUtil.sum(1, 2, 3, 4, 5); // 15
const difference = numberUtil.subtract(10, 3); // 7
const product = numberUtil.multiply(2, 3, 4); // 24

// Validation utilities
const isValid = validationUtil.checkEmail("user@example.com"); // true
const isHttpUrl = validationUtil.checkHttpUrl("https://example.com"); // true
const isDomain = validationUtil.checkDomain("example.com"); // true

// Common utilities
const empty = commonUtil.isEmpty(""); // true
const notEmpty = commonUtil.isEmpty("hello"); // false
const nullCheck = commonUtil.isNull(null); // true
const notNull = commonUtil.isNull("hello"); // false
await commonUtil.sleep(1000); // Pauses execution for 1 second

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
- `multiply(...numbers: number[]): number` - Calculates multiplication of numbers

### ValidationUtil

- `checkEmail(email: string): boolean` - Validates email format
- `checkHttpUrl(url: string): boolean` - Validates HTTP/HTTPS URL format
- `checkDomain(domain: string): boolean` - Validates domain name format

### CommonUtil

- `isEmpty(value: unknown): boolean` - Checks if a value is empty (null, undefined, "", 0, [], {}, empty Set/Map, NaN, or invalid Date)
- `isNull(value: unknown): value is null` - Type guard that checks if a value is null and narrows the type
- `sleep(ms: number): Promise<void>` - Pauses execution for a specified number of milliseconds

### CookieUtil

- `setCookie(name: string, value: string, options?: object): void` - Sets a cookie
- `getCookie(name: string): string | null` - Gets a cookie value

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.
