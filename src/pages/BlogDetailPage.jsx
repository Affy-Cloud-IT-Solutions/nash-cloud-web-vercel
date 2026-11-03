import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Copy,
  Check,
  Tag,
  Sparkles,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { blogApi, DEFAULT_WEBSITE } from "../api/apiClient";
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const updateMetaTag = (selector, attribute, value) => {
  if (!value) return;
  let element = document.querySelector(selector);
  if (!element) {
    if (selector.startsWith('meta[')) {
      element = document.createElement("meta");
      const nameMatch = selector.match(/name="([^"]+)"/);
      const propertyMatch = selector.match(/property="([^"]+)"/);
      if (nameMatch) element.setAttribute("name", nameMatch[1]);
      if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
      document.head.appendChild(element);
    } else if (selector.startsWith('link[')) {
      element = document.createElement("link");
      const relMatch = selector.match(/rel="([^"]+)"/);
      if (relMatch) element.setAttribute("rel", relMatch[1]);
      document.head.appendChild(element);
    }
  }
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [seo, setSeo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Fetch blog data and SEO
  useEffect(() => {
    let isMounted = true;

    const fetchBlogDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await blogApi.getBlogBySlug(slug, DEFAULT_WEBSITE);
        if (!isMounted) return;

        if (response && response.success && response.data) {
          setBlog(response.data);
          setSeo(response.seo || null);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        console.error("Failed to load blog detail:", err);
        if (isMounted) {
          setError(
            err.response?.status === 404
              ? "Blog article not found or has been removed."
              : "Unable to load article. Please check your connection."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Dynamic SEO Tags & Schema markup injection
  useEffect(() => {
    if (!blog) return;

    const pageTitle = seo?.meta_title || blog.meta_title || `${blog.title} | Tech Trade Consulting`;
    const metaDesc = seo?.meta_description || blog.meta_description || blog.short_description || "";
    const keywords = seo?.keywords || blog.keywords || "";
    const ogImage = seo?.og_image || blog.og_image_url || blog.image_url || "";
    const canonical = seo?.canonical_url || window.location.href;
    const robots = seo?.meta_robots || "index, follow";

    // 1. Page Title
    document.title = pageTitle;

    // 2. Meta description and robots
    updateMetaTag('meta[name="description"]', "content", metaDesc);
    if (keywords) updateMetaTag('meta[name="keywords"]', "content", keywords);
    updateMetaTag('meta[name="robots"]', "content", robots);

    // 3. OpenGraph Tags
    updateMetaTag('meta[property="og:title"]', "content", seo?.og_title || pageTitle);
    updateMetaTag('meta[property="og:description"]', "content", seo?.og_description || metaDesc);
    updateMetaTag('meta[property="og:type"]', "content", seo?.og_type || "article");
    updateMetaTag('meta[property="og:url"]', "content", canonical);
    if (ogImage) updateMetaTag('meta[property="og:image"]', "content", ogImage);

    // 4. Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "content", seo?.og_title || pageTitle);
    updateMetaTag('meta[name="twitter:description"]', "content", seo?.og_description || metaDesc);
    if (ogImage) updateMetaTag('meta[name="twitter:image"]', "content", ogImage);

    // 5. Canonical Link
    updateMetaTag('link[rel="canonical"]', "href", canonical);

    // 6. JSON-LD Schema Markup
    let schemaScript = document.getElementById("seo-blog-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "seo-blog-schema";
      document.head.appendChild(schemaScript);
    }

    const schemaContent =
      seo?.schema_markup || {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: metaDesc,
        image: ogImage ? [ogImage] : [],
        datePublished: blog.published_at || blog.created_at,
        dateModified: blog.updated_at || blog.created_at,
        author: {
          "@type": "Person",
          name: blog.author?.name || "TechTrade Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Tech Trade Consulting",
          url: "https://techtradeitsolutions.com/",
        },
      };

    schemaScript.textContent =
      typeof schemaContent === "string"
        ? schemaContent
        : JSON.stringify(schemaContent);

    // Cleanup on component unmount
    return () => {
      const existingScript = document.getElementById("seo-blog-schema");
      if (existingScript) existingScript.remove();
    };
  }, [blog, seo]);

  // Ensure any images embedded inside rich text description also use no-referrer
  useEffect(() => {
    if (!blog?.description) return;
    const contentContainer = document.querySelector(".blog-content");
    if (contentContainer) {
      const images = contentContainer.querySelectorAll("img");
      images.forEach((img) => {
        img.setAttribute("referrerpolicy", "no-referrer");
      });
    }
  }, [blog]);

  // Safe image URL resolver
  const getImageUrl = (item) => {
    if (!item) return null;
    const url = item.image_url || item.image;
    if (!url) return null;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `https://cdn.affyclouditsolutions.com/${url.replace(/^\/+/, "")}`;
  };

  const coverImage = getImageUrl(blog);

  // Author and tag clean display
  const displayAuthor =
    blog?.author?.name && blog.author.name.toLowerCase() !== "admin"
      ? blog.author.name
      : "TechTrade Team";

  const displayTags = Array.isArray(blog?.tags)
    ? blog.tags.filter((t) => t.toLowerCase() !== "techtrade")
    : [];

  // Date formatting
  const formatDate = (dateString) => {
    if (!dateString) return "Recently published";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Copy article link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Share handlers
  const currentUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(blog?.title || "TechTrade Article");

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${currentUrl}`,
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943] pt-32 md:pt-36 pb-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-[#00B4FF]/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] left-[5%] w-[600px] h-[600px] bg-[#0D47A1]/20 blur-[220px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#00B4FF] transition group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
        </div>

        {/* LOADING SKELETON */}
        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-6 bg-white/10 rounded-full w-28"></div>
            <div className="h-12 bg-white/15 rounded-xl w-4/5"></div>
            <div className="h-6 bg-white/10 rounded w-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              <div className="lg:col-span-5 h-80 bg-white/10 rounded-3xl"></div>
              <div className="lg:col-span-7 h-80 bg-white/10 rounded-3xl"></div>
            </div>
          </div>
        ) : error || !blog ? (
          /* ERROR STATE */
          <div className="max-w-lg mx-auto text-center py-20 px-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 mt-8">
            <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Article Not Found</h2>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {error || "The requested blog article does not exist or has not been published yet."}
            </p>
            <button
              onClick={() => navigate("/blogs")}
              className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:brightness-110 transition cursor-pointer"
            >
              Browse All Blogs
            </button>
          </div>
        ) : (
          /* BLOG POST CONTENT */
          <article>
            {/* TOP HEADING SECTION */}
            <div className="mb-8">
              {/* Optional Category Tags */}
              {displayTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {displayTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-[#00B4FF]/10 text-[#00B4FF] text-xs font-semibold px-3 py-1 rounded-full border border-[#00B4FF]/30"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Meta bar: Date & Top Share icons */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-white/10 text-sm text-gray-300">
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  <Calendar className="w-4 h-4 text-[#00B4FF]" />
                  {formatDate(blog.published_at || blog.created_at)}
                </div>

                {/* Top Share actions with all platform icons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 mr-1 hidden sm:inline">Share:</span>

                  {/* LinkedIn */}
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 text-gray-300 hover:text-[#00B4FF] hover:border-[#00B4FF]/40 transition"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition"
                    title="Share on X (Twitter)"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 transition"
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="p-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                    title="Copy article link"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* TOP HERO 2-COLUMN SECTION: LEFT IMAGE, RIGHT SHORT DESCRIPTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
              {/* LEFT: FEATURED IMAGE */}
              <div className="lg:col-span-5">
                {coverImage ? (
                  <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a1428] h-full min-h-[300px] max-h-[440px] flex items-center justify-center group">
                    <img
                      src={coverImage}
                      alt={blog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    {/* Fallback Graphic */}
                    <div className="hidden w-full h-full min-h-[300px] bg-gradient-to-br from-[#0D47A1]/40 via-[#0a1428] to-[#00B4FF]/20 flex-col items-center justify-center p-6 text-center">
                      <Sparkles className="w-10 h-10 text-[#00B4FF] mb-2" />
                      <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                        TechTrade Insights
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full min-h-[300px] rounded-3xl border border-white/15 bg-gradient-to-br from-[#0D47A1]/40 via-[#0a1428] to-[#00B4FF]/20 flex flex-col items-center justify-center p-6 text-center shadow-xl">
                    <Sparkles className="w-10 h-10 text-[#00B4FF] mb-2" />
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      TechTrade Insights
                    </span>
                  </div>
                )}
              </div>

              {/* RIGHT: SHORT DESCRIPTION LEAD CARD */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {blog.short_description ? (
                  <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 border-l-4 border-l-[#00B4FF] shadow-xl backdrop-blur-sm flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[#00B4FF] uppercase tracking-wider mb-3">
                      Executive Summary
                    </span>
                    <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
                      {blog.short_description}
                    </p>
                  </div>
                ) : (
                  <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm flex flex-col justify-center">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {blog.meta_description || "Explore key insights and strategies from Tech Trade IT Solutions."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* MAIN ARTICLE BODY (Full Width / Comfortable Reading View Below Top Section) */}
            <div className="max-w-4xl mx-auto mt-10">
              <div
                className="blog-content text-gray-200 text-base md:text-lg leading-relaxed space-y-6 [&>p]:leading-relaxed [&>p]:mb-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-4 [&>h1]:text-white [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-[#00B4FF] [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-white [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2.5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2.5 [&>blockquote]:border-l-4 [&>blockquote]:border-[#00B4FF] [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-gray-300 [&>img]:rounded-2xl [&>img]:my-8 [&>a]:text-[#00B4FF] [&>a]:underline hover:[&>a]:text-white [&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm"
                dangerouslySetInnerHTML={{ __html: blog.description || "<p>No content available.</p>" }}
              />

              {/* Author / Organization Card */}
              <div className="mt-14 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00B4FF] to-[#0D47A1] flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                  TT
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Published by {displayAuthor === "TechTrade Team" ? "TechTrade IT Solutions" : displayAuthor}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Tech Trade IT Solutions is an enterprise SAP, IT consulting, and bespoke software development partner delivering mission-critical digital transformation and cloud infrastructure services.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B4FF] hover:underline"
                  >
                    Learn more about our team
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
