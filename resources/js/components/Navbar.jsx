import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "@heroicons/react/24/outline/UserCircleIcon";
import MenuIcon from "@heroicons/react/24/outline/Bars3BottomRightIcon";
import Xicon from "@heroicons/react/24/outline/XMarkIcon";
import Button from "./Button";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <nav
            className={`${
                nav || colorChange ? "bg-black/70" : "bg-transparent"
            } w-full h-fit rounded-b-3xl fixed z-50`}
        >
            <div
                className={`container-small w-full h-auto py-6 lg:py-12
                } flex flex-row justify-center items-center text-white`}
            >
                <div className="w-10/12 h-full flex flex-row justify-between">
                    <div>
                        <Link to="/">
                            <div className="flex flex-col font-extrabold">
                                <h1 className="font-extrabold text-xl">
                                    GUNDAM
                                </h1>
                                <h1 className="link-hover text-xl font-extrabold tracking-wider">
                                    WORLD
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <ul className="hidden lg:flex flex-row justify-between lg:gap-32  font-semibold text-lg align-middle">
                        <li className="flex items-center">
                            <Link className="hover:link-hover" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link className="hover:link-hover" to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link className="hover:link-hover" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link className="hover:link-hover" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full h-full lg:flex flex-row justify-end gap-8">
                    <div className="flex flex-row items-center">
                        <User className="w-[30px] h-[30px]" />
                        <p>MyAccount</p>
                    </div>
                    <Link to="/login">
                        <Button props="Login" />
                    </Link>
                    <Link to="/login">
                        <Button props="Register" />
                    </Link>
                </div>
                <div onClick={handleClick}>
                    {!nav ? (
                        <MenuIcon className="w-[40px] h-[40px] block lg:hidden" />
                    ) : (
                        <Xicon className="w-[40px] h-[40px] block lg:hidden" />
                    )}
                </div>
            </div>
            <ul
                className={`${
                    nav ? "flex" : "hidden"
                } container-small flex-col h-fit mt-4 justify-between pb-4 items-center gap-5  font-semibold text-lg text-white align-middle`}
            >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="flex flex-row justify-evenly gap-4">
                    <Link to="/login">
                        <Button props="Login" />
                    </Link>
                    <Link to="/register">
                        <Button props="Register" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
