import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faNewspaper,
  faUsers,
  faFolderOpen,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <section className="  bg-[#0a0a0a] relative text-center  flex flex-col items-center justify-center">
        <div className="absolute h-full  inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute  top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />{" "}
        <div className="absolute  bottom-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl blob" />
        <div className=" container mt-34 md:mt-40 mb-20 flex z-40 flex-col items-center justify-center">
          <div
            className="flex gap-2 mb-5 items-center border-orange-900 border py-3 px-6 rounded-3xl text-[12px]
         md:text-[14px] font-semibold text-neutral-300 bg-orange-500/10"
          >
            <FontAwesomeIcon
              icon={faCircle}
              fade
              style={{ "--fa-animation-duration": "4s" }}
              className="text-[10px] text-orange-500"
            />
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className=" size-2 rounded-full bg-orange-500" />
            </span>
            <p className="text-orange-400">مرحباً بك في عدسة</p>
          </div>

          <div>
            <h2 className="section-title">
              اكتشف <span className="gradient-text">مقالاتنا</span>
            </h2>
            <p className="section-subtitle">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
