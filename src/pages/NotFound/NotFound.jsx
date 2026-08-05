import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFrown,
  faHouse,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        {/* شبكة الخلفية */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* التأثيرات المضيئة المتحركة */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>

        <div className="relative text-center px-4 max-w-lg mx-auto">
          {/* نص 404 الكبير */}
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl leading-none select-none pointer-events-none">
              404
            </div>
          </div>

          {/* أيقونة الوجه الحزين */}
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFaceFrown}
                className="w-14 h-14 text-orange-500"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce" />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
          </div>

          {/* النصوص التوضيحية */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          {/* أزرار العودة */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:opacity-90 transition-all"
              to="/"
            >
              <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
              الذهاب للرئيسية
            </Link>
            <Link
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#161616] text-white border border-[#262626] hover:border-orange-500/30 transition-all"
              to="/blog"
            >
              <FontAwesomeIcon icon={faNewspaper} className="w-5 h-5" />
              تصفح المقالات
            </Link>
          </div>

          {/* روابط سريعة */}
          <div className="pt-8 border-t border-[#262626]">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/blog"
              >
                المدونة
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/about"
              >
                من نحن
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/privacy"
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}