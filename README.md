# kr-corekit

A comprehensive collection of TypeScript utility functions for modern web development.

## Features

- 🛠️ **Comprehensive**: String, object, cookie, number, validation, format, search query, device, and common utilities
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
  formatUtil,
  searchQueryUtil,
  typeUtil,
  deviceUtil,
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
const copied = await commonUtil.copyToClipboard("Hello, World!"); // true if successful

// Search Query utilities
const queryParams = searchQueryUtil.getAllQuery(); // { key: ["value1", "value2"], id: "123" }

// Type utilities
const isPlain = typeUtil.isPlainObject({}); // true
const isNotPlain = typeUtil.isPlainObject(new Date()); // false

// Device utilities
const device = deviceUtil.getDevice(); // { isMobile: false, isTablet: false, isDesktop: true, isIOS: false, isAndroid: false }

// Cookie utilities
cookieUtil.setCookie("theme", "dark");
const theme = cookieUtil.getCookie("theme");
// Format utilities
const formattedPhone = formatUtil.formatPhoneNumber("01012345678"); // "010-1234-5678"
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

### FormatUtil

- `formatPhoneNumber(phone: string): string` - Formats a phone number string to a standard format (e.g., "010-1234-5678")

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
- `copyToClipboard(text: string): Promise<boolean>` - Copies text to the user's clipboard. Uses modern Clipboard API with fallback to legacy execCommand method. Returns true if successful, false if failed.

### SearchQueryUtil

- `getAllQuery(): Record<string, string | string[]>` - Parses the current URL's query string and returns an object with key-value pairs. Values appear as arrays when the same key is used multiple times.

### TypeUtil

- `isPlainObject(value: unknown): boolean` - Checks if a value is a plain object (created by Object literal or Object.create(null)), excluding arrays, dates, and other built-in objects.

### DeviceUtil

- `getDevice(): DeviceInfo` - Detects the user's device environment. Returns information about device type (mobile/tablet/desktop) and operating system (iOS/Android). Uses navigator.userAgent for detection and provides safe fallback for SSR environments.

### CookieUtil

- `setCookie(name: string, value: string, options?: object): void` - Sets a cookie
- `getCookie(name: string): string | null` - Gets a cookie value

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.
