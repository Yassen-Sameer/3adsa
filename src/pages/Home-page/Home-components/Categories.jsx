import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faUser,
  faMountainSun,
  faSliders,
  faChevronLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Data from "../../../Data/Data";

export default function Categories() {
  const allCategories = Data.categories;

  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="m-auto w-fit flex gap-2 mb-5 items-center border-orange-900 border py-3 px-6 rounded-3xl text-[12px] md:text-[14px] font-semibold text-neutral-300 bg-orange-500/10">
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
            <p className="text-orange-500">التصنيفات</p>
          </div>
          <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Link
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            to={`/blog?category=${encodeURIComponent(allCategories[0]?.name || "إضاءة")}`}
            style={{ animationDelay: "0ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                {allCategories[0]?.name}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                {allCategories[0]?.count} مقالة  
              </p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>
          </Link>

          <Link
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            to={`/blog?category=${encodeURIComponent(allCategories[1]?.name || "بورتريه")}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                {allCategories[1]?.name}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                {allCategories[1]?.count} مقالة
              </p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>
          </Link>

          <Link
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            to={`/blog?category=${encodeURIComponent(allCategories[2]?.name || "مناظر طبيعية")}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FontAwesomeIcon
                  icon={faMountainSun}
                  className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                {allCategories[2]?.name}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                {allCategories[2]?.count} مقالة
              </p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>
          </Link>

          <Link
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            to={`/blog?category=${encodeURIComponent(allCategories[3]?.name || "تقنيات")}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FontAwesomeIcon
                  icon={faSliders}
                  className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                {allCategories[3]?.name}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                {allCategories[3]?.count} مقالة
              </p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>
          </Link>

          <Link
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            to={`/blog?category=${encodeURIComponent(allCategories[4]?.name || "معدات")}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                {allCategories[4]?.name}
              </h3>
              <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                {allCategories[4]?.count} مقالة
              </p>
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-4 h-4 text-white"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}