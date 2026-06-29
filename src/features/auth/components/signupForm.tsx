import { useState } from "react";
import Button from "../../../components/button";
import Signup from "../api/signup";
import { useAuthStore } from "../stores/authStore";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [emailOrPhoneNo, setEmailOrPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const clearUser = useAuthStore((u) => u.clearUser);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    try {
      await Signup({
        username: name,
        emailOrPhoneNumber: emailOrPhoneNo,
        password,
      });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 w-full max-w-sm text-center">
        <div className="text-4xl">🎉</div>
        <h1 className="text-2xl font-medium">Account created!</h1>
        <p className="text-gray-500 text-sm">
          Welcome aboard. You can now log in to your account.
        </p>
        <a
          href="/login"
          className="mt-2 text-sm text-[#DB4444] hover:underline"
          onClick={clearUser}
        >
          Go to login
        </a>
      </div>
    );
  }

  return (
    <form
      id="signupForm"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-sm"
      autoComplete="off"
    >
      <div>
        <h1 className="text-3xl mb-1">Create an account</h1>
        <p className="text-gray-500 text-sm">Enter your details below</p>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#DB4444] transition-colors"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhoneNo}
          onChange={(e) => setEmailOrPhoneNo(e.target.value)}
          className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#DB4444] transition-colors"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#DB4444] transition-colors"
          autoComplete="new-password"
        />
      </div>

      {status === "error" && (
        <p className="text-[#DB4444] text-sm -mt-2">{error}</p>
      )}

      <div className="flex flex-col gap-3">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Creating account..." : "Create Account"}
        </Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#DB4444] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </form>
  );
}
