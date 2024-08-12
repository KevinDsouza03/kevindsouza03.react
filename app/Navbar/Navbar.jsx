import React from "react";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function Navbar() {
  //make menu size of root div
  return (
    <Menu
      as="div"
      className=" z-50 fixed top-5 left-5  overscroll-contain data[open]:min-h-screen data-[open]:h-full data-[open]:w-full data-[open]:bg-gray-500 data-[open]:animate-fadeInFast"
    >
      <MenuButton className="border-white border rounded py-1 px-5 text-2xl font-semibold text-whitefocus:outline-none data-[hover]:bg-gray-700">
        Menu
      </MenuButton>
      <MenuItems className="pl-10">
        <div className="flex p-1">
          <MenuItem className="p-2">
            <Button className=" animate-slideInFromRight rounded font-semibold transition duration-400 hover:scale-110  py-2 px-4 text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
            <a href="https://github.com/KevinDsouza03" target="_blank">
            <img className="size-10" src="/github.png" />
            </a>
          </Button>
          </MenuItem>
          <MenuItem className="p-2">
          <Button className="animate-slideInFromRight rounded font-semibold transition duration-400 hover:scale-110 py-2 px-4 text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
            <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank">
              <img className="size-10" src="/linkedin.png" />
            </a>
          </Button>
          </MenuItem>
        </div>
        <MenuItem className="p-2 ">
        <div className="relative flex flex-row items-center mb-10 animate-fadeIn">
          <Link href="/">
            <h2 className="text-6xl border-black border-solid border-r-2 pr-10 hover:text-blue-600 ">
              Home
            </h2>
          </Link>
          <span className="text-2xl pl-20">
            Back to the home page.
          </span>
          </div>
        </MenuItem>
        <MenuItem className="p-2">
        <div className="relative flex flex-row items-center mb-10 animate-fadeIn ">
          <Link href="/CV">
              <h2 className="text-6xl border-black border-solid border-r-2 pr-5  hover:text-blue-600">
                Resume
              </h2>
              </Link>
              <span className="text-2xl pl-20">
                To my resume.
              </span>
            </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
