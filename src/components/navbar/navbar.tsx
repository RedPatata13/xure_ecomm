import { useState } from "react";
import Exclusive from "../exclusive/exclusive";
import NavBarItem from "./navBarItem";
import SearchBar from "./searchBar";
import { useAuthStore } from "../../features/auth/stores/authStore";
import LogoutButton from "../logout/logoutButton";

export default function NavBar() {
  const authState = useAuthStore((u) => u.user);
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToFooter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full px-8 py-4 md:px-12 lg:px-24">
        {/* sm: hamburger, md+: logo */}
        <div
          className="md:hidden cursor-pointer flex flex-col gap-1"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <div className="w-6 h-0.5 bg-current" />
          <div className="w-6 h-0.5 bg-current" />
          <div className="w-6 h-0.5 bg-current" />
        </div>
        <div className="hidden md:block">
          <Exclusive />
        </div>

        <div className="hidden md:flex flex-row gap-3">
          <NavBarItem target="/">Home</NavBarItem>
          <NavBarItem target="#footer" onClick={scrollToFooter}>
            Contact
          </NavBarItem>
          <NavBarItem target="/about">About</NavBarItem>
          <NavBarItem target="/signup">Sign Up</NavBarItem>
        </div>

        <div className="flex gap-2">
          <SearchBar />
          {authState && <LogoutButton />}
        </div>
      </div>

      <hr className="border-t border-b-0 border-x-0 border-gray-200" />
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid`}
      >
        <div
          className="min-h-0 flex flex-col px-8 gap-4 border-b border-gray-200 transition-all duration-300 ease-in-out"
          style={{
            paddingTop: menuOpen ? "1rem" : 0,
            paddingBottom: menuOpen ? "1rem" : 0,
          }}
        >
          <NavBarItem target="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavBarItem>
          <NavBarItem target="#footer" onClick={scrollToFooter}>
            Contact
          </NavBarItem>
          <NavBarItem target="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavBarItem>
          {!authState ? (
            <NavBarItem target="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </NavBarItem>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
