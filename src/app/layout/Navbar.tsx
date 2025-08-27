"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import {
  FaServer,
  FaCloud,
  FaWordpress,
  FaBriefcase,
  FaNetworkWired,
  FaBolt,
  FaBuilding,
  FaDatabase,
  FaPhone,
  FaHdd,
} from "react-icons/fa";

type DropdownItem = {
  title: string;
  description?: string;
  icon: React.ReactNode;
  link: string;
  bgColor?: string;
};

type MenuItem = {
  title: string;
  hasDropdown: boolean;
  megaMenu?: boolean;
  link?: string;
  dropdownItems?: DropdownItem[];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: "Hosting",
      hasDropdown: true,
      megaMenu: true,
      dropdownItems: [
        {
          title: "Web Hosting",
          description: "NVMe SSD server",
          icon: <FaServer />,
          link: "/web-hosting",
        },
        {
          title: "Cloud Hosting",
          description: "Fast autoscaling server",
          icon: <FaCloud />,
          link: "/cloud-hosting",
        },
        {
          title: "WordPress Hosting",
          description: "Fully Managed WordPress",
          icon: <FaWordpress />,
          link: "/wordpress-hosting",
        },
        {
          title: "Reseller Hosting",
          description: "Start your Business",
          icon: <FaBriefcase />,
          link: "/reseller-hosting",
        },
        {
          title: "BDIX Hosting",
          description: "Lowest Network Latency",
          icon: <FaNetworkWired />,
          link: "/bdix-hosting",
        },
        {
          title: "Turbo Hosting",
          description: "Fast Speed Guaranteed",
          icon: <FaBolt />,
          link: "/turbo-hosting",
        },
      ],
    },
    { title: "Domain", hasDropdown: false, link: "/domain" },
    {
      title: "Server",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "VPS",
          icon: <FaCloud />,
          link: "/server/vps",
        },
        {
          title: "Dedicated",
          icon: <FaHdd />,
          link: "/server/dedicated",
        },
      ],
    },
    {
      title: "About",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Privacy Policy",
          icon: <FaBuilding />,
          link: "/about/privacy",
        },
        {
          title: "Terms & Condition",
          icon: <FaDatabase />,
          link: "/about/condition",
        },
        {
          title: "Contact",
          icon: <FaPhone />,
          link: "/about/contact",
        },
      ],
    },
  ];

  const handleMouseEnter = (itemTitle: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);
    setHoverTimeout(timeout);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="md:max-w-7xl mx-auto flex items-center justify-between py-5 md:py-3.5 px-2 md:px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/02/rsz_1rsz_hostnin_logo_blue-01_1.png"
              alt="Hostnin Logo"
              width={129}
              height={30}
              className="object-contain md:hidden"
            />
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/02/rsz_1rsz_hostnin_logo_blue-01_1.png"
              alt="Hostnin Logo"
              width={172}
              height={40}
              className="object-contain hidden md:block"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4 text-base font-medium text-gray-700">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer text-base font-semibold">
                        {item.title} <IoMdArrowDropdown size={18} />
                      </button>

                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 mt-6 bg-white rounded-xl shadow-2xl z-50 ${
                          item.megaMenu ? "w-[540px]" : "w-64"
                        } transition-all duration-200 p-4 ${
                          activeDropdown === item.title
                            ? "opacity-100 visible pointer-events-auto"
                            : "opacity-0 invisible pointer-events-none"
                        }`}
                      >
                        <div
                          className={
                            item.megaMenu
                              ? "grid grid-cols-2 gap-2"
                              : "flex flex-col gap-2"
                          }
                        >
                          {item.dropdownItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                              onMouseEnter={() => handleMouseEnter(item.title)}
                            >
                              <span
                                className={`flex items-center justify-center w-10 h-10 rounded-lg text-2xl text-black group-hover:text-blue-500 transition-colors`}
                              >
                                {subItem.icon}
                              </span>

                              <div className="flex flex-col justify-center">
                                <p className="font-bold text-gray-800 text-sm leading-tight">
                                  {subItem.title}
                                </p>
                                {subItem.description && (
                                  <p className="text-gray-700 text-sm">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className="hover:text-blue-600 transition-colors text-base font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="https://my.hostnin.com/?_gl=1*..."
              className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-[15px] hover:from-blue-600 hover:to-blue-500 transition cursor-pointer"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 cursor-pointer"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/02/rsz_1rsz_hostnin_logo_blue-01_1.png"
              alt="Hostnin Logo"
              width={110}
              height={28}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 p-2 transition-colors duration-200 cursor-pointer"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <ul className="flex flex-col gap-0 text-base font-medium text-gray-700">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-4 text-left hover:text-blue-600 transition-colors duration-200 cursor-pointer text-base font-medium"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                    >
                      <span>{item.title}</span>
                      <IoMdArrowDropdown
                        className={`transition-transform duration-300 ease-in-out ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeDropdown === item.title
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 pb-4 flex flex-col gap-2">
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="group flex items-center gap-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span
                              className={`flex items-center justify-center w-10 h-10 rounded-lg text-xl text-black group-hover:text-blue-500 transition-colors`}
                            >
                              {subItem.icon}
                            </span>

                            <div className="flex flex-col">
                              <span className="text-sm font-medium">
                                {subItem.title}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500">
                                  {subItem.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="block py-4 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Button - Full Width on Mobile */}
        <div className="p-4 border-t border-gray-200 w-full">
          <Link
            href="https://my.hostnin.com/?_gl=..."
            className="block w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-4 rounded font-semibold text-[15px] hover:from-blue-600 hover:to-blue-500 transition text-center"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
