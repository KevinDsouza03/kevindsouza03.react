import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react'
export default function Navbar() {
    return (
        <Menu as="div" className="fixed top-10 left-10 data-[open]:overscroll-contain">
            <MenuButton>Kevin Dsouza, Software Engineer</MenuButton>
            <MenuItems className="p-1 inline-block">
                <MenuItem>
                    <a href="https://www.linkedin.com/in/kevindsouza03/">
                        <img className="size-7" src="../../assets/linkedin.png"/>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="https://github.com/KevinDsouza03">
                        <img className="size-7" src="../../assets/github.png"/>
                    </a>
                </MenuItem>
                
            </MenuItems>
        </Menu>
    )

}