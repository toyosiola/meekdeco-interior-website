import Image from "next/image";
import { useState } from "react";
import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../assets/icons";
import { navLinks } from "../data/data";
import NavLink from "./NavLink";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mb-9">
      {/* nav global container */}
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between xl:px-15">
        {/* item 1 - colored logo */}
        <div className="my-1">
          <Image
            src="/images/logo-colored.png"
            alt="MeekDeco"
            width={173}
            height={57}
          />
        </div>

        {/* item 2 - nav links */}
        <ul className="hidden gap-4 lg:flex ">
          {navLinks.map((link, index) => {
            return <NavLink key={index} {...link} index={index} />;
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

        {/* hamburger buttton */}
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
      </div>
    </nav>
  );
}

export default Nav;
