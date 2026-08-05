import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowLeft,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import formatArabicDate from "../../../utils/formatArabicDate";

export default function RecentArticle({
  id,
  img,
  title,
  category,
  readTime,
  excerpt,
  authorName,
  authorAvatar,
  authorRole,
  date,
  viewMode = "grid",
}) {
  if (viewMode === "list") {
    return (
      <article className="group bg-[#161616] rounded-3xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-300">
        <Link
          className="flex flex-col md:flex-row-reverse h-full"
          to={`/details/${id}`}
        >
          <div className="relative w-full md:w-2/5 min-h-[240px] overflow-hidden">
            <img
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-neutral-400 mb-4">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20 font-medium">
                  {category}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                  {readTime}
                </span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCalendar} className="w-3.5 h-3.5" />
                  {formatArabicDate(date)}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                {title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 mb-6">
                {excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#262626]/60">
              <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                اقرأ المقال
              </span>

              <div className="flex items-center gap-3">
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {authorName}
                  </p>
                  <p className="text-xs text-neutral-500">{authorRole}</p>
                </div>
                <img
                  alt={authorName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                  src={authorAvatar}
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-[#161616] rounded-3xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-300">
      <Link className="block" to={`/details/${id}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={img}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
              {readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>{formatArabicDate(date)}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                alt={authorName}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={authorAvatar}
              />
              <div>
                <p className="text-sm font-medium text-white">{authorName}</p>
                <p className="text-xs text-neutral-500">{authorRole}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
