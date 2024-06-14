import React from 'react';
import Link from 'next/link'

import { Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'

export default function Navbar() {

    return (
        <Menu as="div" className="fixed top-10 left-10 data-[open]:overscroll-contain">
            <MenuButton>Kevin Dsouza, Software Engineer</MenuButton>
            <MenuItems className="">
                <div className='flex p-1'>
                <MenuItem className='p-2'>
                    <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank">
                        <img className="size-7" src="linkedin.png"/>
                    </a>
                </MenuItem>
                <MenuItem className='p-2'>
                    <a href="https://github.com/KevinDsouza03" target="_blank">
                        <img className="size-7" src="github.png"/>
                    </a>
                </MenuItem>
                </div>
                <MenuItem className='p-2'>
                    <Link href="/">
                        <h2>Home</h2>
                    </Link>
                </MenuItem>
                
                
            </MenuItems>
        </Menu>
    )

}