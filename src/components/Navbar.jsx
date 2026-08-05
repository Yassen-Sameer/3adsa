import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626] fixed top-0 w-full z-50">
        <div className="container py-3 px-3 flex items-center justify-between flex-wrap">
          <Link to="/">
            <div className="flex gap-3">
              <img
                src={logo}
                alt=""
                className="w-[50px] transition-all duration-300 hover:scale-105 cursor-pointer"
              />

              <div>
                <h1 className="text-white font-semibold text-xl">عدسة</h1>

                <p className="text-[10px] text-orange-400 font-semibold">
                  عدسة عالم التصوير الفوتوغرافي
                </p>
              </div>
            </div>
          </Link>
          <div className="hidden lg:block border border-[#262626]  py-2 px-5 rounded-4xl bg-[#161616]">
            <ul className="flex gap-6 text-[#737373] font-semibold text-[14px] items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-4xl bg-gradient-to-br from-orange-500 to-orange-600 py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-center transition-all duration-300"
                      : "hover:text-[#d4d4d4] rounded-4xl py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-center"
                  }
                >
                  الرئيسية
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="blog"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-4xl bg-gradient-to-br from-orange-500 to-orange-600 py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-center transition-all duration-300"
                      : "hover:text-[#d4d4d4] rounded-4xl py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-center"
                  }
                >
                  المدونة
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-4xl bg-gradient-to-br from-orange-500 to-orange-600 py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-centertransition-all duration-300"
                      : "hover:text-[#d4d4d4] rounded-4xl py-3 px-5 font-semibold text-white cursor-pointer inline-flex items-center justify-center"
                  }
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <Link
              to="blog"
              className="me-4 group border border-transparent hover:bg-[#161616] hover:border-[#262626] cursor-pointer text-center p-3 rounded-2xl transition-all duration-300"
            >
              <FontAwesomeIcon
                className="text-[#737373] group-hover:text-orange-500 transition-all duration-300 cursor-pointer"
                icon={faMagnifyingGlass}
              />
            </Link>

            <Link to="blog" className="btn-primary">
              ابدأ القراءة
            </Link>
          </div>

          <button
            className="lg:hidden group border border-transparent bg-[#161616] hover:border-[#262626] cursor-pointer text-center p-4 rounded-2xl transition-all duration-300"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="w-[20px] group-hover:text-white transition-all duration-300 text-2xl text-[#737373]"
            />
          </button>

          <div
            className={`lg:hidden w-full overflow-hidden transition-all duration-200 ease-in-out ${
              isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border border-[#262626] bg-[#161616] rounded-2xl p-3">
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-900 font-semibold text-orange-500 cursor-pointer transition-all duration-300 bg-orange-500/10 block py-3 px-5"
                        : "block rounded-xl py-3 px-5 text-[#737373] font-semibold hover:bg-[#262626] hover:text-white transition-all duration-300"
                    }
                  >
                    الرئيسية
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="blog"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-900 font-semibold text-orange-500 cursor-pointer transition-all duration-300 bg-orange-500/10 block py-3 px-5"
                        : "block rounded-xl py-3 px-5 text-[#737373] font-semibold hover:bg-[#262626] hover:text-white transition-all duration-300"
                    }
                  >
                    المدونة
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="about"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-900 font-semibold text-orange-500 cursor-pointer transition-all duration-300 bg-orange-500/10 block py-3 px-5"
                        : "block rounded-xl py-3 px-5 text-[#737373] font-semibold hover:bg-[#262626] hover:text-white transition-all duration-300"
                    }
                  >
                    من نحن
                  </NavLink>
                </li>
              </ul>

              <Link
                to="blog"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="btn-primary w-full mt-4 block text-center"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
