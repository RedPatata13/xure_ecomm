import { useEffect, useState } from "react";
import Exclusive from "../exclusive/exclusive";
import NavBarItem from "./navBarItem";
import SearchBar from "./searchBar";
import { useAuthStore } from "../../features/auth/stores/authStore";
import { motion } from "motion/react";
import ProfileButton from "../profileButton/profileButton";

export default function NavBar() {
  const authState = useAuthStore((u) => u.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const HAMBURGER_SIZE = "w-6 h-0.5";

  useEffect(() => {
    function handleScroll(){
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToFooter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`sticky top-0 z-50 flex flex-col bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
      
      <div className="relative flex items-center justify-between w-full pr-4 pl-6 py-2 md:px-12 lg:px-24">
        {/* sm: hamburger, md+: logo */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden cursor-pointer flex flex-col gap-1.5 w-6"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <motion.div
            className={`${HAMBURGER_SIZE} bg-current origin-center`}
            animate={
              menuOpen
                ? { rotate: 405, y: 10}
                : { rotate: 0, y: 0}
            }
            transition={{ type: "spring", stiffness: 200, damping: 30}}
          >
          </motion.div>

          <motion.div
            className={`${HAMBURGER_SIZE} bg-current origin-center`}
            animate={{ 
              opacity: menuOpen ? 0 : 1,
              scale: menuOpen? 0 : 1,
            }}
            transition={{ duration: 0.55 }}
          >
          </motion.div>

          <motion.div
            className={`${HAMBURGER_SIZE} bg-current origin-center`}
            animate={
              menuOpen
                ? { rotate: -405, y: -6}
                : { rotate: 0, y: 0}
            }
            transition={{ type: "spring", stiffness: 200, damping: 30}}
          > 
          </motion.div>
        </button>

        {/* logo that only shows in mobile*/}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Exclusive />
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
          {!authState ? (
            <NavBarItem target="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </NavBarItem>
          ) : (
            <></>
          )}
        </div>

        <div className="flex gap-2">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          {authState &&
            <div className="flex ml-2 gap-1">
              <ProfileButton />
            </div>
          }
        </div>
      </div>

      <hr className="border-t border-b-0 border-x-0 border-gray-200" />
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid`}
      >
        <div
          className="min-h-0 flex flex-col px-6 gap-4 border-b border-gray-200 transition-all duration-300 ease-in-out"
          style={{
            paddingTop: menuOpen ? "1rem" : 0,
            paddingBottom: menuOpen ? "1rem" : 0,
          }}
        >
          <SearchBar  className="w-full"/>
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