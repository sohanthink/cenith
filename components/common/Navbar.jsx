"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname(); // Get the current path

    return (
        <div className="container flex justify-between items-center py-3">
            <div className="hover:cursor-pointer">
                <Link href="/"><Image src={logo} alt="logo" width={150} height={150} /></Link>
            </div>
            <div>
                <ul className="flex space-x-10 font-semibold">
                    {/* Home */}
                    <li>
                        <Link
                            href="/"
                            className={`${pathname === "/" ? "text-blue-500" : "text-black"
                                } hover:text-blue-700`}
                        >
                            Home
                        </Link>
                    </li>
                    {/* Review */}
                    <li>
                        <Link href="/review" className={`${pathname === "/review" ? "text-blue-500" : "text-black"} hover:text-blue-700`}>
                            Review
                        </Link>
                    </li>
                    {/* Become a Partner */}
                    <li>
                        <Link
                            href="/partner"
                            className={`${pathname === "/partner" ? "text-blue-500" : "text-black"
                                } hover:text-blue-700`}
                        >
                            Become a Partner
                        </Link>
                    </li>
                    {/* FAQ */}
                    <li>
                        <Link
                            href="/faq"
                            className={`${pathname === "/faq" ? "text-blue-500" : "text-black"
                                } hover:text-blue-700`}
                        >
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-8 items-center">
                <span className="flex gap-2 items-center">
                    <MdLanguage /> English
                </span>
                <Button varient="normal" link="/login" text="Luggage Storage" />
            </div>
        </div>
    );
};

export default Navbar;
