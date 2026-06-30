import { useState } from "react";
import Button from "../../../components/button";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/loginAuth";
import { useAuthStore } from "../stores/authStore";
import { useNavigate, Link } from "react-router-dom";
import { type AuthState } from "../stores/authStore";
import PasswordInput from "../../../components/passwordInput/passwordInput";

export default function LoginForm() {
  const [emailOrPhoneNumber, setEmailOrPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthStore((s: AuthState) => s.setUser);

  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ user }) => {
      setUser(user);
      navigate("/");
    },
  });

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    login({ emailOrPhoneNumber, password });
    setEmailOrPhoneNo("");
    setPassword("");
  }

  return (
    <form
      id="loginForm"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full h-full max-w-sm"
      autoComplete="off"
    >
      <div>
        <h1 className="text-3xl mb-1">Log in to Exclusive</h1>
        <p className="text-gray-500 text-sm">Enter your details below</p>
      </div>

      {isError && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {(error as Error).message ?? "Login failed"}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhoneNumber}
          onChange={(e) => setEmailOrPhoneNo(e.target.value)}
          disabled={isPending}
          className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#DB4444] transition-colors disabled:opacity-50"
          autoComplete="off"
        />
        <PasswordInput 
          password={password}
          onChange={setPassword}
          disabled={isPending}
        />
      </div>

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Logging in…
            </span>
          ) : (
            "Log In"
          )}
        </Button>
        <a href="" className="text-sm text-[#DB4444] hover:underline">
          Forgot Password?
        </a>
      </div>

      <p className="text-sm text-gray-500 text-center">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-[#DB4444] hover:underline font-medium"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
