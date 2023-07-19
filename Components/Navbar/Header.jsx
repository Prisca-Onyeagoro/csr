'use client';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiScissors } from 'react-icons/hi';

const Header = () => {
  const [Show, setShow] = useState(false);
  const harm = () => {};

  return (
    <header className="">
      <nav className="p-10 mx-auto flex justify-between items-center">
        <div className="container flex justify-center font-extrabold text-2xl lg:hidden">
          SUC<span className="text-yellow-500">CEX</span>-A
          <span className="text-yellow-500">PP</span>
        </div>
        <div className="hidden lg:flex  font-extrabold text-2xl">
          SUC<span className="text-yellow-500">CEX</span>-A
          <span className="text-yellow-500">PP</span>
        </div>
        {/* navigation list */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-8">
            <Link href="/">
              <li className="hover:text-yellow-500 ease-in duration-200 text-lg font-semibold cursor-pointer">
                Home
              </li>
            </Link>
            <li
              href="#about"
              className="hover:text-yellow-500 ease-in duration-200 text-lg font-semibold cursor-pointer"
            >
              About
            </li>
            <li className="hover:text-yellow-500 ease-in duration-200 text-lg font-semibold cursor-pointer">
              Authors
            </li>
            <Link href="#Guide">
              <li className="hover:text-yellow-500 ease-in duration-200 text-lg font-semibold cursor-pointer">
                Guide
              </li>
            </Link>

            <Link href="#install">
              <li className="hover:text-yellow-500 ease-in duration-200 text-lg font-semibold cursor-pointer">
                Installation Guide.
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
