import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronLeft,
  faCamera,
  faTags,
  faShareNodes,
  faLink,
  faList,
  faEnvelope,
  faImages,
  faArrowLeft,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Data from "../../Data/Data";
import formatArabicDate from "../../utils/formatArabicDate";

export default function Details() {
  const { id } = useParams();

  const currentPost =
    Data.posts.find((post) => String(post.id) === String(id)) || Data.posts[0];

  const relatedPosts = Data.posts
    .filter(
      (post) =>
        post.category === currentPost.category &&
        String(post.id) !== String(currentPost.id),
    )
    .slice(0, 3);

  if (relatedPosts.length < 3) {
    const additionalPosts = Data.posts
      .filter(
        (post) =>
          String(post.id) !== String(currentPost.id) &&
          !relatedPosts.includes(post),
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <main className="flex-grow pt-20">
      <article className="bg-[#0a0a0a] min-h-screen">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            alt={currentPost.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={currentPost.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />

          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white/30 text-xs"
              />
              <Link
                className="text-white/70 hover:text-white transition-colors"
                to="/blog"
              >
                المدونة
              </Link>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white/30 text-xs"
              />
              <span className="text-orange-400 font-medium truncate max-w-[200px]">
                {currentPost.category}
              </span>
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                  {currentPost.category}
                </span>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {formatArabicDate(currentPost.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} />
                    {currentPost.readTime}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {currentPost.title}
              </h1>
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  alt={currentPost.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  src={currentPost.author.avatar}
                />
                <div>
                  <p className="font-bold text-white">
                    {currentPost.author.name}
                  </p>
                  <p className="text-sm text-white/60">
                    {currentPost.author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  "{currentPost.excerpt}"
                </p>
              </div>

              <div className="prose-custom">
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {currentPost.excerpt}
                </p>
                <h2
                  id="section-0"
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-orange-500"
                    />
                  </span>
                  نظرة عامة
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  هذا النص هو مثال لمحتوى المقالة، يوضح أفضل الأساليب والتقنيات
                  الاحترافية المتبعة في قسم {currentPost.category}.
                </p>
              </div>

              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <FontAwesomeIcon
                      icon={faTags}
                      className="text-orange-500"
                    />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #{currentPost.category}
                  </span>
                  <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                    #تصوير
                  </span>
                </div>
              </div>

              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        className="text-orange-500"
                      />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white transition-all duration-300">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white transition-all duration-300">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                      <FontAwesomeIcon icon={faLink} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    alt={currentPost.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src={currentPost.author.avatar}
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {currentPost.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {currentPost.author.role}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FontAwesomeIcon
                        icon={faList}
                        className="text-orange-500"
                      />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>
                  <nav className="space-y-2">
                    <a
                      href="#section-0"
                      className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                        1
                      </span>
                      <span className="text-sm">نظرة عامة</span>
                    </a>
                  </nav>
                </div>

                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-orange-500 text-xl mb-2"
                      />
                      <p className="text-white font-bold">
                        {currentPost.readTime}
                      </p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-orange-500 text-xl mb-2"
                      />
                      <p className="text-white font-bold text-sm">
                        {formatArabicDate(currentPost.date)}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-orange-500 text-xl"
                      />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                      to="/blog"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <FontAwesomeIcon
                    icon={faImages}
                    className="text-orange-500 text-xl"
                  />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز في {currentPost.category}
                  </p>
                </div>
              </div>
              <Link
                className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                to="/blog"
              >
                عرض الكل
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  to={`/details/${post.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                          src={post.author.avatar}
                        />
                        {post.author.name}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
