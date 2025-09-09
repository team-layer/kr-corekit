// 전화번호 형식 규칙을 데이터로 정의합니다.
const formatRules = [
  // 서울 지역번호 (02) - 9자리
  {
    prefix: "02",
    length: 9,
    format: /(\d{2})(\d{3})(\d{4})/,
    replacement: "$1-$2-$3",
  },
  // 서울 지역번호 (02) - 10자리
  {
    prefix: "02",
    length: 10,
    format: /(\d{2})(\d{4})(\d{4})/,
    replacement: "$1-$2-$3",
  },
  // 8자리 대표번호 (1588, 1670 등)
  {
    length: 8,
    format: /(\d{4})(\d{4})/,
    replacement: "$1-$2",
  },
  // 일반 지역번호 (031, 054 등)
  {
    length: 10,
    format: /(\d{3})(\d{3})(\d{4})/,
    replacement: "$1-$2-$3",
  },
  // 휴대폰 번호
  {
    length: 11,
    format: /(\d{3})(\d{4})(\d{4})/,
    replacement: "$1-$2-$3",
  },
];

export const formatPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) {
    return "";
  }

  const digitsOnly = phoneNumber.replace(/\D/g, "");

  for (const rule of formatRules) {
    if (rule.prefix && !digitsOnly.startsWith(rule.prefix)) {
      continue;
    }

    if (digitsOnly.length === rule.length) {
      return digitsOnly.replace(rule.format, rule.replacement);
    }
  }

  return digitsOnly;
};
