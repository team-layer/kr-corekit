# generateHappy()

Display encouraging messages to developers in the console with colorful styling and timestamps.

## Features

- 🎨 **Styled Console Output**: Colorful messages with pink timestamps
- 🎲 **Random Messages**: 10 motivational default messages
- 💬 **Custom Messages**: Support for user-defined messages
- ⏰ **Timestamps**: Automatic timestamp on each message
- 🎉 **Developer Friendly**: Spread positivity while coding!

## Usage

### Basic Usage (Random Message)

```typescript
import { generateHappy } from "kr-corekit";

// Displays a random encouraging message
generateHappy();
// Console output: [5:28:35 AM] Progress, not perfection. 🚀
```

### Custom Message

```typescript
import { generateHappy } from "kr-corekit";

// Display your own encouraging message
const message = generateHappy("Great job on completing the feature! 🎉");
console.log(message); // Returns: "Great job on completing the feature! 🎉"
```

### Tree-Shaking Import

```typescript
// Import from specific module for better tree-shaking
import { generateHappy } from "kr-corekit/easterEggUtil";

generateHappy("Keep coding! 💻");
```

## Default Messages

The function randomly selects from these 10 encouraging messages:

- "Keep going — you're doing great! 💪"
- "Small steps lead to big changes. 🌱"
- "Today is a good day to smile. 😊"
- "You're closer than you think. 🌈"
- "Stay curious, stay kind. ✨"
- "Progress, not perfection. 🚀"
- "You make the code better. 💻❤️"
- "Breathe. You're doing your best. 🌤️"
- "Trust the process, enjoy the journey. 🛤️"
- "Every bug fixed is a victory. 🐞🏆"

## API

### Parameters

- `message?: string` - Optional custom message to display. If not provided, a random default message is used.

### Returns

- `string` - The message that was displayed in the console

## Examples

### In Development Scripts

Add encouraging messages to your build or development scripts:

```typescript
import { generateHappy } from "kr-corekit";

console.log("Starting development server...");
generateHappy();

// Your server startup code...
```

### After Test Success

Celebrate successful tests:

```typescript
import { generateHappy } from "kr-corekit";

describe("My Tests", () => {
  afterAll(() => {
    generateHappy("All tests passed! 🎊");
  });
});
```

### During Debugging

Add morale boosters during long debugging sessions:

```typescript
import { generateHappy } from "kr-corekit";

function complexDebugFunction() {
  // ... debugging code ...
  
  if (bugFixed) {
    generateHappy("Bug squashed! 🐛✨");
  }
}
```

## Console Output

The function outputs styled messages to the console with:
- **Pink timestamp** (`#ff69b4`) with bold font
- **Dark gray message** (`#333`) with 14px font size

Example output:
```
[5:28:35 AM] Progress, not perfection. 🚀
```

## Notes

- This is a fun utility to add positivity to your development workflow
- The function uses `console.log` with CSS styling (works in modern browsers)
- Safe to use in development and can be easily removed for production if needed
- The timestamp format depends on the user's locale settings

## License

MIT
