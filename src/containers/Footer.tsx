import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { menu_content } from "./Menubar";

const Footer = () => {
  return (
    <footer className="m-4 flex justify-around rounded-md p-4">
      <div className="flex max-w-sm flex-col space-y-6">
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl font-extrabold">ABOUT NEXMAGAZINE</h3>
          <p className="text-base text-gray-400">
            Nexmagazine is a website that allows users to create and manage
            their own magazines.
          </p>
        </div>
        <div className="flex gap-x-3 whitespace-nowrap">
          <button className="flex items-center gap-1 rounded-md border border-gray-500/25 px-2 py-1 text-sm">
            <FaMedium /> Medium
          </button>
          <button className="flex items-center gap-1 rounded-md border border-gray-500/25 px-2 py-1 text-sm">
            <FaYoutube /> Youtube
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="font-bold">NEX MAGAZINE</h4>
        <ul className="text-base">
          {menu_content.map(([label, value], idx) => (
            <li className="text-base lowercase" key={idx}>
              <Link href="/">{value}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="font-semibold uppercase">Connect with us</h4>
        <ul>
          {["Youtube", "Medium", "Twitter", "Linkedin"].map((value, idx) => (
            <li key={idx}>
              <Link href="/">{value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
