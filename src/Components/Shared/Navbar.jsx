import React from 'react';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    { id: 1, name: 'Men', path: '/men' },
    { id: 2, name: 'Women', path: '/women' },
    { id: 3, name: 'Kids', path: '/kids' },
  ];
  return (
    <div class="bg-base-100 shadow-lg">
      <div className="navbar container mx-auto px-2 md:px-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            <span className="text-orange-500">E-</span> Shop
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="navbar-end">
          <AiOutlineSearch size={23} className="mr-3 cursor-pointer" />
          <AiOutlineShoppingCart size={23} className="mr-3 cursor-pointer" />
          <AiOutlineUser size={23} className="mr-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
