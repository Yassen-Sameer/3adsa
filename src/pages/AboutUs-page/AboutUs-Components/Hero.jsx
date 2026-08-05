import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faUsers,
  faFolderOpen,
  faPenNib,
  faNewspaper,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <section className="  bg-[#0a0a0a] relative text-center min-h-screen flex flex-col items-center justify-center">
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
            <p className="text-orange-400">من نحن</p>
          </div>

          <div>
            <h2 className="section-title">
              مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
            </h2>
            <p className="section-subtitle lg:max-w-[80%] m-auto">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-orange-500 w-full mt-10">
            <div
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "0ms" }}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +2مليون
              </p>
              <p className="text-neutral-500 text-sm">قارئ شهرياً</p>
            </div>

            <div
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "100ms" }}
            >
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +500
              </p>
              <p className="text-neutral-500 text-sm">مقالة منشورة</p>
            </div>

            <div
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "200ms" }}
            >
              <FontAwesomeIcon
                icon={faPenNib}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +50
              </p>
              <p className="text-neutral-500 text-sm">كاتب خبير</p>
            </div>

            <div
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "300ms" }}
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-2xl text-orange-500 mb-1"
              />
              <p className="text-2xl md:text-3xl font-bold gradient-text">+15</p>
              <p className="text-neutral-500 text-sm">تصنيف</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
