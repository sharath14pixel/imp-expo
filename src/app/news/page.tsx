"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { NEWS_DATA, PostItem } from "@/data/news";
import Badge from "@/components/ui/Badge";
import { Search, Clock, Calendar, User, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Customs & Trade", "Freight Market", "Supply Chain", "Sustainability"];

  const filteredPosts = NEWS_DATA.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-2">
            GLOBAL TRADE BULLETIN & ANALYSIS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-tight tracking-tight mb-4">
            International Freight & Tariff <span className="bg-gradient-to-r from-[#F5804B] to-[#B4A7F0] bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-base md:text-lg text-[#5B6272] max-w-3xl leading-relaxed">
            Market intelligence, HTS customs regulation updates, EU CBAM carbon compliance, and ocean carrier capacity forecasts authored by Vanguard trade specialists.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#101828] text-white shadow-sm"
                    : "bg-white text-[#5B6272] border border-[#E5E7EB] hover:bg-[#FDEDE8]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search trade topics, Incoterms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#101828] placeholder-gray-400 focus:outline-none focus:border-[#E86A3C]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Article Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:shadow-md hover:border-[#E86A3C]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="tint">{post.category}</Badge>
                    <span className="text-[11px] text-[#5B6272] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#E86A3C]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#101828] group-hover:text-[#E86A3C] transition-colors leading-snug mb-3">
                    <Link href={`/news/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#5B6272] leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#5B6272] mb-4">
                    <span className="flex items-center gap-1 font-medium">
                      <User className="w-3.5 h-3.5 text-[#E86A3C]" />
                      {post.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#5B6272]" />
                      {post.date}
                    </span>
                  </div>

                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E86A3C] uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    <span>READ FULL INSIGHT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-12 text-center my-8">
            <p className="text-base font-bold text-[#101828]">No articles found matching "{searchQuery}"</p>
            <p className="text-xs text-[#5B6272] mt-1">Try clearing your search query or choosing another topic category.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 bg-[#E86A3C] text-white text-xs font-bold uppercase rounded-lg"
            >
              RESET FILTERS
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
