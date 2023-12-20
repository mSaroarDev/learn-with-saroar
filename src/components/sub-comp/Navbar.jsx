"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const path = usePathname();

  return (
    <>
      <div className="bg-white w-full fixed top-0 z-50">
        <div className="w-full max-w-7xl mx-auto">
          <div className="navbar py-2">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                  <Link
                    href={"/"}
                    className="font-LiAdorNoirrit_Regular text-base"
                  >
                    হোমপেজ
                  </Link>
                </li>
                  <li>
                  <Link
                    href={"/"}
                    className="font-LiAdorNoirrit_Regular text-base"
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-LiAdorNoirrit_Regular text-base"
                  >
                    কোর্সসমুহ
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-LiAdorNoirrit_Regular text-base bg-brandColor text-white px-2 py-2 rounded-full hover:bg-brandColor/20 hover:text-brandColor"
                  >
                    লগিন
                  </Link>
                </li>
                </ul>
              </div>
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  height={180}
                  width={150}
                  alt="Learn With Saroar"
                />
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ms-auto">
                <li>
                  <Link
                    href={"/"}
                    className={`font-LiAdorNoirrit_Regular text-base ${path === "/" ? "active_link" : ""}`}
                  >
                    হোমপেজ
                  </Link>
                </li>
                {/* <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li> */}
                <li>
                  <Link
                    href={"/"}
                    className={`font-LiAdorNoirrit_Regular text-base ${path === "/about-us" ? "active_link" : ""}`}
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={`font-LiAdorNoirrit_Regular text-base ${path === "/courses" ? "active_link" : ""}`}
                  >
                    কোর্সসমুহ
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-LiAdorNoirrit_Regular text-base bg-brandColor text-white px-7 py-2 rounded-full hover:bg-brandColor/20 hover:text-brandColor"
                  >
                    লগ ইন
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="navbar-end">
              <a className="btn">Button</a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
