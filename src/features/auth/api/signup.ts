import { parseEmailOrContactNo } from "./helpers/parseEmailOrContactNo";

export interface SignupInput {
  username: string;
  emailOrPhoneNumber: string;
  password: string;
}

export default async function signup(input: SignupInput) {
  const parsed = parseEmailOrContactNo(input.emailOrPhoneNumber);
  if (!parsed.isValidStr) throw new Error("Invalid email or phone number");

  const data = {
    username: input.username,
    password: input.password,
    ...(parsed.email     && { email:    parsed.email }),
    ...(parsed.phoneNum && { phoneNum: parsed.phoneNum }),
  };

  const res = await fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? "Signup failed");
  }

  return res.json();
}