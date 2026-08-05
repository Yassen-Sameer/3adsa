import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faList,
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Data from "../../../Data/Data";
import RecentArticle from "../../Home-page/Home-components/RecentArticle";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") || "جميع المقالات";

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const ITEMS_PER_PAGE = 6;
  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  useEffect(() => {
    setSelectedCategory(urlCategory);
    setCurrentPage(1);
  }, [urlCategory]);

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: () => {
      setCurrentPage(1);
    },
  });

  const filteredPosts = Data.posts.filter((post) => {
    const matchesSearch =
      post.title
        .toLowerCase()
        .includes(formik.values.searchQuery.toLowerCase()) ||
      post.excerpt
        .toLowerCase()
        .includes(formik.values.searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const isFilteringActive =
    selectedCategory !== "جميع المقالات" ||
    formik.values.searchQuery.trim() !== "";

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentPosts = isFilteringActive
    ? filteredPosts
    : filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === "جميع المقالات") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleSearchChange = (e) => {
    formik.handleChange(e);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory("جميع المقالات");
    formik.setFieldValue("searchQuery", "");
    setCurrentPage(1);
    setSearchParams({});
  };

  return (
    <section className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-b-[#262626]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <form
            onSubmit={formik.handleSubmit}
            className="relative w-full md:w-80"
          >
            <input
              id="searchQuery"
              name="searchQuery"
              type="text"
              value={formik.values.searchQuery}
              onChange={handleSearchChange}
              placeholder="ابحث في المقالات..."
              className="placeholder:text-neutral-500 bg-[#161616] border border-[#262626] transition-all duration-200 focus:shadow focus:shadow-orange-500/30 focus:border-orange-500 outline-0 rounded-2xl w-full px-5 py-3 pr-12 caret-neutral-400 text-neutral-400"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
            />
          </form>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض{" "}
            <span className="font-bold text-white">{filteredPosts.length}</span>{" "}
            مقالات
          </p>

          <div className="flex items-center gap-3">
            {isFilteringActive && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>مسح الفلاتر</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-4 h-4 text-neutral-400"
                />
              </button>
            )}

            <div className="hidden lg:flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="عرض شبكي"
              >
                <FontAwesomeIcon icon={faTableCells} className="w-5 h-5" />
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                title="عرض قائمة"
              >
                <FontAwesomeIcon icon={faList} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {currentPosts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {currentPosts.map((post) => (
              <RecentArticle
                key={post.id}
                id={post.id}
                viewMode={viewMode}
                img={post.image}
                title={post.title}
                category={post.category}
                readTime={post.readTime}
                excerpt={post.excerpt}
                authorName={post.author.name}
                authorAvatar={post.author.avatar}
                authorRole={post.author.role}
                date={post.date}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-400 text-lg">
              لا توجد مقالات تطابق بحثك أو التصنيف المحدد.
            </p>
          </div>
        )}

        {!isFilteringActive && filteredPosts.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white cursor-pointer hover:border-orange-500/50"
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`cursor-pointer min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentPage === pageNum
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white cursor-pointer hover:border-orange-500/50"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}