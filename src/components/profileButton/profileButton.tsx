import { useState } from "react";
import { User, ShoppingCart, Heart, Eye, LogOut, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore, type AuthState } from "../../features/auth/stores/authStore";
import { useMutation } from "@tanstack/react-query";

async function logoutUser() {
    const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
    });
    if (!res.ok) throw new Error("Logout failed");
}

export default function ProfileButton() {
  const [open, setOpen] = useState(false);
  const clearUser = useAuthStore((s: AuthState) => s.clearUser);
  const navigate = useNavigate();

  const { mutate: logout, isPending} = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
        clearUser();
        navigate("/login");
    }
  });

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 h-10 px-2 rounded-full transition-colors ${
          open ? "bg-black/10" : "hover:bg-black/5"
        }`}
      >
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${open ? "bg-[#DB4444] text-white" : "bg-gray-300 text-gray-700"}`}>
          <User size={18} />
        </div>
        <ChevronDown
          size={14}
          className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-52 rounded-xl border border-gray-100 bg-white shadow-lg py-1.5">
            <MenuItem icon={<ShoppingCart size={16} />} label="Cart"      to="/cart"      onClose={() => setOpen(false)} />
            <MenuItem icon={<Heart size={16} />}        label="Liked"     to="/liked"     onClose={() => setOpen(false)} />
            <MenuItem icon={<Eye size={16} />}          label="Watchlist" to="/watchlist" onClose={() => setOpen(false)} />
            <MenuItem icon={<User size={16} />}         label="Profile"   to="/profile"   onClose={() => setOpen(false)} />
            <div className="my-1 border-t border-gray-100" />
            <MenuItem
            icon={isPending
                ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-300 border-t-red-500" />
                : <LogOut size={16} />
            }
            label={isPending ? "Logging out..." : "Log out"}
            danger
            onClick={() => {
                setOpen(false);
                logout();
            }}
            disabled={isPending}
            />
          </div>
        </>
      )}
    </div>
  );
}

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  to?: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

function MenuItem({ icon, label, to, danger, onClick, onClose, disabled }: MenuItemProps) {
  const base = `flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg mx-auto w-[calc(100%-8px)]`;
  const color = danger
    ? "text-red-500 hover:bg-red-100"
    : "text-gray-700 hover:bg-gray-100";

  if (to) {
    return (
      <Link to={to} onClick={onClose} className={`${base} ${color}`}>
        <span className={danger ? "text-red-400" : "text-gray-400"}>{icon}</span>
        {label}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${color}`} disabled={disabled}>
      <span className={danger ? "text-red-400" : "text-gray-400"}>{icon}</span>
      {label}
    </button>
  );
}