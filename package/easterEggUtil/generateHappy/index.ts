export default function generateHappy(message?: string) {
  const defaultMessages = [
    "Keep going — you're doing great! 💪",
    "Small steps lead to big changes. 🌱",
    "Today is a good day to smile. 😊",
    "You're closer than you think. 🌈",
    "Stay curious, stay kind. ✨",
    "Progress, not perfection. 🚀",
    "You make the code better. 💻❤️",
    "Breathe. You're doing your best. 🌤️",
    "Trust the process, enjoy the journey. 🛤️",
    "Every bug fixed is a victory. 🐞🏆",
  ];

  const text =
    message ??
    defaultMessages[Math.floor(Math.random() * defaultMessages.length)];
  const timestamp = new Date().toLocaleTimeString();

  console.log(
    `%c[${timestamp}] %c${text}`,
    'color: #ff69b4; font-weight: bold;',
    'color: #333; font-size: 14px;'
  );

  return text;
}
