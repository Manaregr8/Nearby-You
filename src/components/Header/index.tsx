"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "@/components/Header/navbar.css";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "shadow-nav fixed z-[999] border-b border-none bg-white/30 backdrop-blur-md dark:border-dark-3/20 dark:bg-dark/10 h-[100px]"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4  flex items-center justify-between">
            <div className="w-80 max-w-full px-4">
              <Link
                href="/"
                className={`logo navbar-logo block w-full ${sticky ? "py-2" : "py-9"
                  } `}
              >
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logos/logo-lightbg.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={`/images/logos/logo-darkbg.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={`${sticky
                        ? "/images/logos/logo-lightbg.svg"
                        : "/images/logos/logo-darkbg.svg"
                        }`}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={"/images/logos/logo-darkbg.svg"}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          {pathUrl !== "/" ? (
                            <Link
                              onClick={navbarToggleHandler}
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${pathUrl === menuItem?.path && "text-primary"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "text-body-color dark:text-white lg:text-white"
                                } ${pathUrl === menuItem?.path &&
                                sticky &&
                                "!text-primary"
                                }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          <button
                            aria-label="theme toggler"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex pl-10 h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white md:hidden"
                          > Theme
                            <span>
                              <svg
                                viewBox="0 0 16 16"
                                className="hidden ml-2 h-[22px] w-[22px] fill-current text-white dark:block"
                              >
                                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                              </svg>

                              <svg
                                viewBox="0 0 23 23"
                                className={`h-[30px] w-[30px] fill-current text-dark dark:hidden ${!sticky && pathUrl === "/" && "text-dark"}`}
                              >
                                <g clipPath="url(#clip0_40_125)">
                                  <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                                </g>
                              </svg>
                            </span>
                          </button>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "md:text-white text-body-color dark:text-white"
                                }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                              }`}
                          >
                            {menuItem?.submenu?.map((submenuItem: any, i) => (
                              <Link
                                href={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                                  ? "text-primary"
                                  : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                  }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/* theme toggler */}
                <button
                  aria-label="theme toggler"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
                >
                  <span>

                    
                    <svg
                      viewBox="0 0 16 16"
                      className="hidden h-[22px] w-[22px] fill-current dark:block"
                    >
                      <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                    </svg>

                    <svg
                      viewBox="0 0 23 23"
                      className={`h-[30px] w-[30px] fill-current text-dark dark:hidden ${!sticky && pathUrl === "/" && "text-white"
                        }`}
                    >
                      <g clipPath="url(#clip0_40_125)">
                        <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                      </g>
                    </svg>
                  </span>
                </button>
                <Link
                  href="tel:+918506040783" // Replace with your GitHub link
                  className={`buttonbg flex items-center gap-4 rounded-lg px-6 py-3 text-base font-medium duration-300 ease-in-out ${pathUrl !== "/" // Check if it's not the home page
                    ? "bg-green-500 text-white hover:bg-blue-600" // Blue base on other pages
                    : sticky
                      ? "bg-green-500 hover:bg-primary/90 text-white"
                      : "bg-green-500 text-white hover:bg-white/20"
                    }`} style={{ marginLeft: '15px' }}
                >
                 Call Now <svg className="iconCall" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.45"><path fill="#fff" fill-rule="nonzero" d="M141 209.38c17.22 31.02 37.04 60.82 62.81 88.02 25.83 27.33 57.94 52.21 99.56 73.45 3.08 1.51 6.01 1.51 8.61.47 3.97-1.51 7.99-4.78 11.97-8.75 3.07-3.07 6.9-7.99 10.92-13.38 15.99-21.05 35.81-47.16 63.76-34.1.61.28 1.09.61 1.7.89l93.27 53.64c.28.14.61.47.9.61 12.3 8.47 17.36 21.52 17.5 36.28 0 15.04-5.53 31.97-13.67 46.26-10.74 18.87-26.58 31.35-44.84 39.63-17.35 7.99-36.7 12.3-55.29 15.04-29.18 4.3-56.51 1.56-84.47-7.05-27.34-8.46-54.86-22.42-84.94-41l-2.23-1.42c-13.81-8.61-28.71-17.83-43.32-28.71-53.59-40.44-108.12-98.8-143.64-163.03C9.81 212.31-6.47 154.09 2.43 98.61 7.34 68.2 20.4 40.53 43.15 22.27 62.97 6.28 89.69-2.46 124.26.61c3.98.28 7.52 2.6 9.37 6.01l59.78 101.07c8.75 11.35 9.84 22.56 5.06 33.82-3.97 9.22-11.96 17.68-22.89 25.63-3.22 2.74-7.05 5.53-11.07 8.47-13.38 9.69-28.57 20.9-23.36 34.1l-.15-.33z"/></svg>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
