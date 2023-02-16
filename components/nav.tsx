'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useRef } from "react";
import { GetCategories } from './get-categories';
import { useRouter } from "next/navigation";

export default function MyNavbar({children}) {
  const router = useRouter()
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)
  return (
    <>
      <nav className="bg-stone-800 w-full fixed z-50">
        <div className="justify-between max-w-6xl mx-auto items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href={"/"} legacyBehavior>
              <a>
              <div className="flex justify-center gap-10 grid-cols-2">
              <div className="a2imbuttonbox ml-2 w-10">
                <Image
                  src="/logos/A2IM-logos/A2IM-button-white.png"
                  alt="a2im logo button"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
                </div>
                <h2 className="text-2xl text-white font-bold tracking-normal whitespace-nowrap">KNOWLEDGE-BASE</h2>
              </div>
              </a>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-center md:block ${navbar ? 'block overflow-auto' : 'hidden'}`}>
              <ul ref={Navref} id="iwnavbar" className="md:lvl1 list-none text-xl relative mx-auto
                  uppercase text-center
              md:flex">
                <li className="my-auto ">
                <Link href={`/Operations`} onClick={() => router.push(`/Operations`)}><h3 className="-mt-3 text-xl px-2 whitespace-nowrap text-white">Operations</h3></Link>
                <GetCategories MainCategory='Operations'/>
                </li>
                <li>
                <Link href={`/Sales`} onClick={() => router.push(`/Sales`)}><h3 className="-mt-3 text-xl px-2 whitespace-nowrap text-white">Sales</h3></Link>
                <GetCategories MainCategory='Sales'/>
                </li>
                <li> 
                <Link href={`/Marketing`} onClick={() => router.push(`/Marketing`)}><h3 className="-mt-3 text-xl px-2 whitespace-nowrap text-white">Marketing</h3></Link>
                <GetCategories MainCategory='Marketing'/>
                </li>
                <li>
                <Link href={`/Human Resources`} onClick={() => router.push(`/Human Resources`)}><h3 className="-mt-3 text-xl px-2 whitespace-nowrap text-white">Human Resources</h3></Link>
                <GetCategories MainCategory='Human Resources'/>
                </li>
                <li className="text-center font-serif text-zinc-500 whitespace-nowrap hover:scale-105 my-auto">
                  {children}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}
