import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Data from "../../../Data/Data";

export default function Writers() {
  const extractedAuthors = Array.from(
    new Map(
      (Data.posts || [])
        .filter((post) => post.author)
        .map((post) => [post.author.name, post.author])
    ).values()
  );

  const writersData =
    Data.writers ||
    Data.authors ||
    Data.team ||
    (extractedAuthors.length > 0 ? extractedAuthors : []);

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-fit m-auto flex gap-2 mb-5 items-center border-orange-900 border py-3 px-6 rounded-3xl text-[12px] md:text-[14px] font-semibold text-neutral-300 bg-orange-500/10">
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
            <p className="text-orange-400">فريقنا</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تعرف على كتابنا
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {writersData.map((writer, index) => (
            <div
              key={writer.id || index}
              className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="relative inline-block mb-4">
                <img
                  alt={writer.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  src={writer.avatar || writer.img || writer.image}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-3 h-3 text-white"
                  />
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">{writer.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-4">
                {writer.role}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={writer.socials?.twitter || writer.twitter || "#"}
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                </a>
                <a
                  href={writer.socials?.github || writer.github || "#"}
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                </a>
                <a
                  href={writer.socials?.linkedin || writer.linkedin || "#"}
                  className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}