import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    let { pathname } = useLocation();
  return (
    <>
    <header className="header">
        <ul className='flex cursor-pointer items-center justify-evenly p-[30px]'>
            <Link to="/">
                <li className={pathname == "/" ? "border-b-[2px] border-b-[blue]" : "black"} >Home</li>
            </Link>
            <Link to="/about">
                <li className={pathname == "/about" ? "border-b-[2px] border-b-[blue]" : "black"}>About</li>
            </Link>
            <Link to="/contact">
                <li className={pathname == "/contact" ? "border-b-[2px] border-b-[blue]" : "black"}>Contact</li>
            </Link>
        </ul>
    </header>
    <main className="main my-[50px]">
        <Outlet />
    </main>
    <footer className="footer p-[50px] bg-gray-300 flex items-center justify-between">
        <ul className='flex flex-col gap-[10px]'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>links</li>
        </ul>
        <ul className='flex flex-col gap-[10px]'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>links</li>
        </ul>
        <ul className='flex flex-col gap-[10px]'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>links</li>
        </ul>
        <ul className='flex flex-col gap-[10px]'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>links</li>
        </ul>
    </footer>
    </>
  )
}

export default Layout