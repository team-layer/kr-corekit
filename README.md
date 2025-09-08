# kr-corekit

A comprehensive collection of TypeScript utility functions for modern web development.

## Features

- 🛠️ **Comprehensive**: String, object, cookie, number, validation, common, and search query utilities
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
  searchQueryUtil,
} from "kr-corekit";

// String utilities
const escaped = stringUtil.escapeHtml("<div>Hello</div>");
const unescaped = stringUtil.unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;");

// Object utilities
const cleaned = objectUtil.clearNullProperties({ a: 1, b: null, c: 3 });
const frozen = objectUtil.deepFreeze({ a: { b: 1 } });
const withoutKey = objectUtil.removeKey("b", { a: 1, b: 2, c: 3 }); // { a: 1, c: 3 }

// Number utilities
const total = numberUtil.sum(1, 2, 3, 4, 5); // 15
const difference = numberUtil.subtract(10, 3); // 7
const product = numberUtil.multiply(2, 3, 4); // 24

// Validation utilities
const isValid = validationUtil.checkEmail("user@example.com"); // true
const isHttpUrl = validationUtil.checkHttpUrl("https://example.com"); // true
const isDomain = validationUtil.checkDomain("example.com"); // true
const isBase64 = validationUtil.checkBase64("U29tZSB2YWxpZCBiYXNlNjQgc3RyaW5n"); // true
const isPasswordValid = validationUtil.checkPassword("Abc123!@#", {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecialChar: true,
}); // true

// Common utilities
const empty = commonUtil.isEmpty(""); // true
const notEmpty = commonUtil.isEmpty("hello"); // false
const nullCheck = commonUtil.isNull(null); // true
const notNull = commonUtil.isNull("hello"); // false
await commonUtil.sleep(1000); // Pauses execution for 1 second

// Search query utilities
const parsed = searchQueryUtil.parseQueryString("name=John&tags=react&tags=typescript");
// { name: "John", tags: ["react", "typescript"] }
const queryString = searchQueryUtil.buildQueryString({ name: "Jane", age: 25, tags: ["vue", "nodejs"] });
// "name=Jane&age=25&tags=vue&tags=nodejs"
const cleaned = searchQueryUtil.removeEmptyParams({ name: "John", city: "", tags: ["frontend", null] });
// { name: "John", tags: ["frontend"] }
const normalized = searchQueryUtil.normalizeQuery({ NAME: "  JOHN  " }, { toLowerCase: true, trimValues: true });
// { name: "john" }

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
- `removeKey(key: string, obj: Record<string, any>): object` - Returns a new object with the specified key removed

### NumberUtil

- `sum(...numbers: number[]): number` - Calculates sum of numbers
- `subtract(...numbers: number[]): number` - Calculates subtraction of numbers
- `multiply(...numbers: number[]): number` - Calculates multiplication of numbers

### ValidationUtil

- `checkEmail(email: string): boolean` - Validates email format
- `checkHttpUrl(url: string): boolean` - Validates HTTP/HTTPS URL format
- `checkDomain(domain: string): boolean` - Validates domain name format
- `checkBase64(value: string): boolean` - Validates whether a string is a valid base64 encoded value
- `checkPassword(password: string, options?: { minLength?: number; maxLength?: number; requireUppercase?: boolean; requireLowercase?: boolean; requireNumber?: boolean; requireSpecialChar?: boolean }): boolean` - Validates password strength and requirements

### CommonUtil

- `isEmpty(value: unknown): boolean` - Checks if a value is empty (null, undefined, "", 0, [], {}, empty Set/Map, NaN, or invalid Date)
- `isNull(value: unknown): value is null` - Type guard that checks if a value is null and narrows the type
- `sleep(ms: number): Promise<void>` - Pauses execution for a specified number of milliseconds

### SearchQueryUtil

- `parseQueryString(queryString: string): Record<string, string | string[]>` - Parses URL query string into an object with support for multiple values
- `buildQueryString(params: Record<string, any>): string` - Builds a query string from an object with proper URL encoding
- `removeEmptyParams(params: Record<string, any>): Record<string, any>` - Recursively removes empty values (null, undefined, "", empty arrays) from parameters
- `normalizeQuery(params: Record<string, any>, options?: { toLowerCase?: boolean; trimValues?: boolean; removeEmpty?: boolean; sortKeys?: boolean }): Record<string, any>` - Normalizes query parameters with configurable options

### CookieUtil

- `setCookie(name: string, value: string, options?: object): void` - Sets a cookie
- `getCookie(name: string): string | null` - Gets a cookie value

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.
