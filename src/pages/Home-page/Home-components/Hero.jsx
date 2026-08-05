import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faNewspaper,
  faUsers,
  faFolderOpen,
  faPenNib,
  faArrowLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Data from "../../../Data/Data";


console.log(Data);


export default function Hero() {
  return (
    <>
      <section className="bg-[#0a0a0a] relative text-center min-h-screen flex flex-col items-center justify-center">
        <div className="absolute h-full inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl blob" />
        
        <div className="container mt-34 md:mt-40 mb-20 flex z-40 flex-col items-center justify-center">
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
              <span className="size-2 rounded-full bg-orange-500" />
            </span>
            <p className="text-orange-400">مرحباً بك في عدسة</p>
          </div>

          <div>
            <h2 className="section-title">
              اكتشف <span className="gradient-text">فن</span>
              <br /> التصوير الفوتوغرافي
            </h2>
            <p className="section-subtitle">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في{" "}
              <br className="hidden md:block" />
              التصوير.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 items-center gap-4 w-full sm:w-fit">
            <Link
              className="btn-primary inline-flex items-center justify-center gap-2 group w-full sm:w-fit"
              to="blog"
              data-discover="true"
            >
              <span>استكشف المقالات</span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              />
            </Link>
            
            <Link
              className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-fit"
              to="about"
              data-discover="true"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4" />
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-orange-500 w-full mt-10">
            <div
              className="glass-card p-4 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "0ms" }}
            >
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +50
              </p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>

            <div
              className="glass-card p-4 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "100ms" }}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +10ألف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>

            <div
              className="glass-card p-4 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "200ms" }}
            >
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>

            <div
              className="glass-card p-4 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "300ms" }}
            >
              <FontAwesomeIcon
                icon={faPenNib}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
              <p className="text-neutral-500 text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}