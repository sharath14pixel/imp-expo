"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { NEWS_DATA } from "@/data/news";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const LatestNews = () => {
  const recentPosts = NEWS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="GLOBAL TRADE INTELLIGENCE"
            title="Latest Regulatory & Maritime Insights"
            highlightWord="Regulatory"
            description="Expert analysis on customs tariffs, ocean carrier capacity trends, and global trade compliance standards."
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#E86A3C] hover:gap-3 transition-all mt-4 md:mt-0 shrink-0"
          >
            <span>VIEW ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#F4F5FB] border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:shadow-md hover:border-[#E86A3C]/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="tint">{post.category}</Badge>
                  <span className="text-[11px] text-[#5B6272] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E86A3C]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#E86A3C] transition-colors leading-snug mb-3">
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#5B6272] leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#5B6272]">
                <span className="flex items-center gap-1 font-medium">
                  <User className="w-3.5 h-3.5 text-[#E86A3C]" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#5B6272]" />
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
