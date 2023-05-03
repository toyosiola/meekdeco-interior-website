import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../assets/icons";
import { navLinks } from "../data/data";
import NavLink from "./NavLink";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function SideBarLink({ href, title }) {
    return (
      <li className="text-xl font-medium text-primary border-b border-b-tertiary tracking-widest">
        <Link
          href={href}
          className="block py-4 px-6 hover:px-8 duration-200 hover:bg-white hover:border-l-4 hover:border-l-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          {title}
        </Link>
      </li>
    );
  }

  return (
    <nav className="mb-9">
      {/* nav global container */}
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between xl:px-15">
        {/* item 1 - colored logo */}
        <div className="my-1">
          <Link href="/">
            <Image
              src="/images/logo-colored.png"
              alt="MeekDeco logo"
              width={173}
              height={57}
            />
          </Link>
        </div>

        {/* item 2 - nav links */}
        <ul className="hidden gap-4 lg:flex ">
          {navLinks.map((link, index) => {
            return <NavLink key={index} {...link} />;
          })}
        </ul>

        {/* item 3 - icons */}
        <ul className="hidden my-auto gap-4 lg:flex">
          {/* search icon */}
          <li className="flex items-center hover:text-primary ">
            <SearchIcon />
          </li>

          {/* search input */}
          <input
            type="search"
            name="search"
            className="text-lg p-2 focus:outline-none w-32 placeholder:text-tertiary"
            placeholder="Search..."
          />

          {/* user icon */}
          <li className="flex items-center hover:text-primary ">
            <UserIcon />
          </li>
          {/* heart icon */}
          <li className="flex items-center hover:text-primary ">
            <HeartIcon />
          </li>
          {/* cart icon */}
          <li className="flex items-center hover:text-primary ">
            <CartIcon />
          </li>
        </ul>

        {/* hamburger button */}
        <button
          id="menu-btn"
          className={`hamburger block mt-auto focus:outline-none lg:hidden ${
            isMenuOpen ? "open" : ""
          }`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* SIDEBAR */}
        <div
          className={`inset-0 bg-gray-50 mx-auto z-10 overflow-hidden duration-300 ${
            isMenuOpen ? "fixed translate-y-0" : "absolute -translate-y-full"
          } lg:hidden`}
        >
          <ul class="mt-20">
            {navLinks.map((link, index) => {
              return <SideBarLink key={index} {...link} index={index} />;
            })}
          </ul>

          <ul className="mt-20 w-max mx-auto flex gap-4">
            {/* search input */}
            <input
              type="search"
              name="search"
              className="text-lg p-2 w-28 rounded-md focus:outline-none placeholder:text-secondary xs:grow xs:w-auto"
              placeholder="Search..."
            />
            {/* search icon */}
            <li className="flex items-center hover:text-primary ">
              <SearchIcon />
            </li>
            {/* user icon */}
            <li className="flex items-center hover:text-primary ">
              <UserIcon />
            </li>
            {/* heart icon */}
            <li className="flex items-center hover:text-primary ">
              <HeartIcon />
            </li>
            {/* cart icon */}
            <li className="flex items-center hover:text-primary ">
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
