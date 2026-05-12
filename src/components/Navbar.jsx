import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClickOutside } from "../hooks/useClickOutside.js";
import {
  faBars,
  faXmark,
  faBookOpen,
  faMagnifyingGlass as searchIcon,
} from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import Backdrop from "./Backdrop";
import { useTheme } from "../hooks/useTheme.js";

const navLinks = [
  { to: "/courses", title: "Courses" },
  { to: "/categories", title: "Categories" },
  { to: "/instructors", title: "Instructors" },
  { to: "/pricing", title: "Pricing" },
  { to: "/about", title: "About" },
];

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const toggleNavOpen = () => {
    setIsSideNavOpen((p) => !p);
  };
  const toggleSearchOpen = () => {
    setIsSearchOpen((p) => !p);
  };

  useClickOutside(searchRef, () => {
    setIsSearchOpen(null);
  });

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 bg-gray-100/95 lg:h-20 dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container flex items-center justify-between">
        <div className="flex gap-3 lg:gap-4">
          {/* Mobile Menu toggle */}
          <button
            className="header-btn lg:hidden"
            aria-label="Toggle menu"
            aria-expanded="false"
            onClick={toggleNavOpen}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          {/* Logo */}
          <Link className="group flex items-center gap-2" to="/">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 transition-colors group-hover:bg-primary-700">
              <FontAwesomeIcon
                icon={faBookOpen}
                size="lg"
                className="text-white"
              />
            </div>
            <span className="font-display text-lg font-bold text-gray-900 md:text-xl dark:text-white">
              Learnify
            </span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300"
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="header-btn"
            aria-label="Search"
            onClick={toggleSearchOpen}
          >
            <FontAwesomeIcon icon={searchIcon} />
          </button>
          <button
            className="header-btn"
            aria-label="Theme Toggle"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          <Link
            to="/"
            className="hidden text-sm font-medium text-gray-700 hover:text-primary-600 md:block dark:text-gray-300"
          >
            Sign In
          </Link>
          <Link
            to="/"
            className="rounded-full bg-primary-600 p-[12px] text-xs font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-700 hover:shadow-primary-500/40 md:px-5 md:py-2.5 md:text-sm"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Nav */}
        <nav
          className={`absolute top-0 ${isSideNavOpen ? "translate-y-0" : "-translate-y-full"} right-0 left-0 z-10 transform bg-gray-100 p-4 transition-transform duration-200 lg:hidden dark:bg-gray-950/95`}
        >
          <button
            className="header-btn lg:hidden"
            aria-label="Toggle menu"
            aria-expanded="false"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              className="block rounded-lg p-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-900"
            >
              {link.title}
            </NavLink>
          ))}
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
            <Link
              to="/"
              className="block rounded-lg p-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-900"
            >
              Sign In
            </Link>
            <Link
              to="/"
              className="mt-4 block rounded-lg bg-primary-600 p-3 text-center font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Get Started Free
            </Link>
          </div>
        </nav>
        {isSideNavOpen && (
          <Backdrop clickHandler={() => setIsSideNavOpen(false)} />
        )}
        {/* Search Popup */}
        <div
          className={`fixed top-0 left-0 h-20 w-full ${!isSearchOpen && "hidden"} flex items-start justify-center bg-black/20 pt-20 backdrop-blur-sm transition-[display]`}
        >
          <div
            ref={searchRef}
            className={`mx-4 w-full max-w-2xl rounded-2xl bg-gray-200 p-4 dark:bg-gray-900`}
          >
            <div className="relative">
              <FontAwesomeIcon
                icon={searchIcon}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pr-4 pl-10 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                placeholder="Search courses, topics or instructors..."
                autoFocus
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popular :</span>
              <Link
                to="/courses?q=python"
                className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900"
              >
                Python
              </Link>
              <Link
                to="/courses?q=react"
                className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900"
              >
                React
              </Link>
              <Link
                to="/courses?q=machine-learning"
                className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900"
              >
                Machine Learning
              </Link>
              <Link
                to="/courses?q=machine-learning"
                className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-900"
              >
                Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
