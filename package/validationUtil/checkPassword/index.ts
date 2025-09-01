export default function checkPassword(
  password: string,
  options?: {
    minLength?: number | null;
    maxLength?: number | null;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecialChar?: boolean;
  }
): boolean {
  const {
    minLength = null,
    maxLength = null,
    requireUppercase = false,
    requireLowercase = false,
    requireNumber = false,
    requireSpecialChar = false,
  } = options || {};

  if (minLength !== null && password.length < minLength) return false;
  if (maxLength !== null && password.length > maxLength) return false;
  const hasUpperCase = requireUppercase ? /[A-Z]/.test(password) : true;
  const hasLowerCase = requireLowercase ? /[a-z]/.test(password) : true;
  const hasNumber = requireNumber ? /\d/.test(password) : true;
  const hasSpecialChar = requireSpecialChar
    ? /[!@#$%^&*(),.?":{}|<>]/.test(password)
    : true;

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}
