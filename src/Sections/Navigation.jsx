import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Navigation = () => {
    const menuList = [
        {
            id: 1,
            name: 'Home',
            href: '#hero',
        },
        {
            id: 2,
            name: 'About Me',
            href: '#about',
        },
        {
            id: 3,
            name: 'Skills',
            href: '#skills',
        },
        {
            id: 4,
            name: 'Projects',
            href: '#project',
        },
        {
            id: 5,
            name: 'Contact',
            href: '#contact',
        }
    ]

    const Navigation = ({ menuList }) => (
        <>
            {menuList.map((menu) => (
                <li key={menu.id} className='mx-3 cursor-pointer text-neutral-400 hover:text-white list-none py-2'>
                    <a href={menu.href}>{menu.name}</a>
                </li>
            ))}
        </>
    )

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 '>
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0 ">
                    <a href="/" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Akshat Raval</a>
                    <button onClick={toggleMenu} className='cursor-pointer hover:text-white text-neutral-400 sm:hidden'>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    <nav className='hidden sm:flex'>
                        <Navigation menuList={menuList} />
                    </nav>

                </div>
            </div>
            {isOpen && <motion.div className='block overflow-hidden text-center sm:hidden' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ maxHeight: '100vh' }} transition={{ duration: 0.7 }}>
                <nav>
                    <Navigation menuList={menuList} />
                </nav>
            </motion.div>}
        </div>
    )
}

export default Navigation