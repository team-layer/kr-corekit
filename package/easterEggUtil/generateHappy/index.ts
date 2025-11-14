/**
 * 개발자에게 격려 메시지를 콘솔에 출력하는 함수입니다.
 * @param message 출력할 사용자 정의 메시지 (선택 사항)
 * @returns {string} 출력된 메시지 텍스트
 */
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
