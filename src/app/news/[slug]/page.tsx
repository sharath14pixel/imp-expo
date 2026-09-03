"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_DATA } from "@/data/news";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowLeft, Clock, Calendar, User, CheckCircle2, Share2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SinglePostPage({ params }: PageProps) {
  const { slug } = use(params);
  const post = NEWS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = NEWS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[#F4F5FB] min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#E86A3C] uppercase tracking-wider mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO TRADE INSIGHTS</span>
        </Link>

        {/* Article Container */}
        <article className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 shadow-sm mb-12">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Badge variant="tint">{post.category}</Badge>
              <span className="text-xs text-[#5B6272] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E86A3C]" />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#5B6272]">
              <span className="flex items-center gap-1 font-semibold text-[#101828]">
                <User className="w-3.5 h-3.5 text-[#E86A3C]" />
                {post.author.name} ({post.author.role})
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#5B6272]" />
                {post.date}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101828] leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Executive Summary Box */}
          <div className="bg-[#F4F5FB] border-l-4 border-[#E86A3C] p-4 rounded-r-lg mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-1">
              EXECUTIVE BRIEFING SUMMARY
            </span>
            <p className="text-sm font-semibold text-[#101828] leading-relaxed">
              {post.summary}
            </p>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-sm text-[#5B6272] leading-relaxed mb-10">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-base text-[#5B6272]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature Inset Box: Key Strategic Takeaways */}
          <div className="bg-[#FDEDE8] border border-[#F5804B]/30 rounded-xl p-6 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E86A3C] block mb-3">
              KEY STRATEGIC TAKEAWAYS FOR IMPORTERS & EXPORTERS
            </span>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#101828] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A3C] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#101828]">TAGS:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="text-[11px] bg-[#F4F5FB] text-[#5B6272] px-2.5 py-1 rounded-full border border-[#E5E7EB]">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => alert("Article link copied to clipboard!")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86A3C] uppercase tracking-wider hover:underline cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              SHARE ARTICLE
            </button>
          </div>

        </article>

        {/* Related Posts Section */}
        <div>
          <h3 className="text-xl font-bold text-[#101828] mb-6 uppercase tracking-wider">
            RELATED TRADE INSIGHTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <div key={rPost.id} className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-md transition-shadow">
                <Badge variant="tint" className="mb-2">{rPost.category}</Badge>
                <h4 className="text-base font-bold text-[#101828] mb-2 hover:text-[#E86A3C] transition-colors">
                  <Link href={`/news/${rPost.slug}`}>{rPost.title}</Link>
                </h4>
                <p className="text-xs text-[#5B6272] line-clamp-2 mb-4">{rPost.summary}</p>
                <Link
                  href={`/news/${rPost.slug}`}
                  className="text-xs font-bold text-[#E86A3C] uppercase tracking-wider hover:underline"
                >
                  READ ARTICLE →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
