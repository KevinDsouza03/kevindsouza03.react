import React from "react";
import Link from "next/link";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";


export default function Navbar() {
  //make menu size of root div
  return (
    <Menu
      as="div"
      className="fixed top-5 left-5 data-[open]:overscroll-contain data-[open]:h-full data-[open]:w-full data-[open]:bg-gray-500
      
      "
    >
      <MenuButton className=" border-white border rounded py-1 px-5 text-2xl font-semibold text-whitefocus:outline-none data-[hover]:bg-gray-700 ">
        Menu
      </MenuButton>
      <MenuItems className="pl-10">
        <div className="flex p-1">
          <MenuItem className="p-2">
            <a
              href="https://www.linkedin.com/in/kevindsouza03/"
              target="_blank"
            >
              <img className="size-7" src="/linkedin.png" />
            </a>
          </MenuItem>
          <MenuItem className="p-2">
            <a href="https://github.com/KevinDsouza03" target="_blank">
              <img className="size-7" src="/github.png" />
            </a>
          </MenuItem>
        </div>
        <MenuItem className="p-2">
          <Link href="/">
            <div className="flex flex-row ">
              <h2 className="text-3xl">Home</h2>
              <p className="text-2x1 p-4">Back to the home screen</p>
            </div>
          </Link>
        </MenuItem>
        <MenuItem className="p-2">
          <Link href="/CV">
            <h2>About Me</h2>
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
