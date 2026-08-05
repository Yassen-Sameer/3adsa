import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import RecentArticle from "./RecentArticle";
import Data from "../../../Data/Data";
import { Link } from "react-router";

export default function Recently() {
  const allPosts = Data.posts;

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div
              className="w-fit flex gap-2 mb-5 items-center border-orange-900 border py-3 px-6 rounded-3xl text-[12px]
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
              <p className="text-orange-500">الأحدث</p>
            </div>
            <h2 className="section-title text-white">أحدث المقالات</h2>
            <p className="section-subtitle max-w-lg">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <Link
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            to="blog"
            data-discover="true"
          >
            عرض جميع المقالات
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.slice(4, 7).map((post) => {
            return (
              <RecentArticle
                id={post.id}
                img={post.image}
                title={post.title}
                featured={post.featured}
                category={post.category}
                readTime={post.readTime}
                excerpt={post.excerpt}
                authorName={post.author.name}
                authorAvatar={post.author.avatar}
                authorRole={post.author.role}
                date={post.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
