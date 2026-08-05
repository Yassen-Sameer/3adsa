import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStar,
  faClock,
  faChevronLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SelectedArticle from "./SelectedArticle";

import Data from "../../../Data/Data";
import { Link } from "react-router";

export default function Articles() {
  const allPosts = Data.posts;

  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
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
                <p className="text-orange-500">مميز</p>
              </div>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="blog"
              data-discover="true"
            >
              عرض الكل
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="space-y-8">
            {allPosts.slice(0, 3).map((post) => {
              return (
                <SelectedArticle
                  img={post.image}
                  id={post.id}
                  title={post.title}
                  featured={post.featured}
                  category={post.category}
                  readTime={post.readTime}
                  excerpt={post.excerpt}
                  authorName={post.author.name}
                  authorAvatar={post.author.avatar}
                  date={post.date}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// img,
// title,
// featured,
// category,
// readTime,
// excerpt,
// authorName,
// authorAvatar,
// date
