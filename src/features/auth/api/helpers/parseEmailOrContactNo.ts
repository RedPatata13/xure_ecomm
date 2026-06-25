type EmailOrContactResult = {
  isValidStr: boolean;
  email?: string;
  phoneNum?: string;
};

export function parseEmailOrContactNo(input: string): EmailOrContactResult {
  if (!input || typeof input !== "string") {
    return { isValidStr: false };
  }

  const trimmed = input.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const contactNoRegex = /^\+?[\d\s\-().]{7,20}$/;
  const digitsOnly = trimmed.replace(/\D/g, "");

  if (emailRegex.test(trimmed)) {
    return { isValidStr: true, email: trimmed };
  }

  if (contactNoRegex.test(trimmed) && digitsOnly.length >= 7 && digitsOnly.length <= 15) {
    return { isValidStr: true, phoneNum: trimmed };
  }

  return { isValidStr: false };
}