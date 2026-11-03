import React, { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Sparkles,
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  BookOpen,
  RefreshCw,
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { blogApi, DEFAULT_WEBSITE } from "../api/apiClient";

const BlogListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [searchInput, setSearchInput] = useState(initialSearch);
  const [activeSearch, setActiveSearch] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    total: 0,
    perPage: 9,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  const fetchBlogs = useCallback(async (page, search) => {
    setLoading(true);
    setError(null);
    try {
      const response = await blogApi.getBlogs({
        website: DEFAULT_WEBSITE,
        page,
        perPage: 9,
        search,
      });

      if (response && response.success && response.data) {
        const dataObj = response.data;
        const blogItems = Array.isArray(dataObj.data) ? dataObj.data : [];
        setBlogs(blogItems);
        setPagination({
          currentPage: dataObj.current_page || page,
          lastPage: dataObj.last_page || 1,
          total: dataObj.total || blogItems.length,
          perPage: dataObj.per_page || 9,
        });
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setError("Unable to load blog articles at this time. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Sync with state changes and update URL
  useEffect(() => {
    fetchBlogs(currentPage, activeSearch);

    // Update query params in URL
    const params = {};
    if (activeSearch) params.search = activeSearch;
    if (currentPage > 1) params.page = currentPage.toString();
    setSearchParams(params, { replace: true });
  }, [currentPage, activeSearch, fetchBlogs, setSearchParams]);

  // Handle Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setActiveSearch(searchInput.trim());
  };

  // Clear Search
  const handleClearSearch = () => {
    setSearchInput("");
    setActiveSearch("");
    setCurrentPage(1);
  };

  // Format published date
  const formatDate = (dateString) => {
    if (!dateString) return "Recent";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Strip HTML tags for preview text
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").trim();
  };

  // Get safe image URL
  const getImageUrl = (item) => {
    if (!item) return null;
    const url = item.image_url || item.image;
    if (!url) return null;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `https://cdn.affyclouditsolutions.com/${url.replace(/^\/+/, "")}`;
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0a1428] to-[#061943] pt-24 pb-20">
      {/* Background Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[10%] w-[3px] h-[3px] bg-[#00B4FF] rounded-full animate-ping"></div>
        <div className="absolute top-[35%] right-[12%] w-[2px] h-[2px] bg-[#0D47A1] rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-[25%] left-[20%] w-[2px] h-[2px] bg-[#00B4FF] rounded-full animate-ping delay-1400"></div>
        <div className="absolute top-[65%] right-[25%] w-[3px] h-[3px] bg-[#00B4FF] rounded-full animate-pulse"></div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-[#00B4FF]/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[5%] w-[550px] h-[550px] bg-[#0D47A1]/20 blur-[220px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[45%] left-[45%] w-[400px] h-[400px] bg-[#00B4FF]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header / Hero Section */}
        <div className="text-center max-w-4xl mx-auto mt-8 mb-12">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#00B4FF] via-[#4BA3FF] to-[#0D47A1] bg-clip-text text-transparent">
              Latest Articles &amp; Insights
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Stay updated with enterprise technology trends, SAP transformation, custom cloud solutions,
            and software engineering practices from the TechTrade team.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl p-1.5 focus-within:border-[#00B4FF] focus-within:ring-2 focus-within:ring-[#00B4FF]/30 transition-all"
            >
              <div className="pl-4 text-gray-400">
                <Search className="w-5 h-5 text-[#00B4FF]" />
              </div>
              <input
                type="text"
                placeholder="Search articles by keyword (e.g. cloud, SAP, AI)..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-transparent px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none text-sm md:text-base"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1.5 text-gray-400 hover:text-white transition mr-1 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] hover:brightness-110 text-white font-medium px-6 py-2.5 rounded-full text-sm transition shadow-md cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                Search
              </button>
            </form>

            {activeSearch && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300">
                <span>Showing search results for: </span>
                <span className="font-semibold text-[#00B4FF]">"{activeSearch}"</span>
                <button
                  onClick={handleClearSearch}
                  className="text-xs text-gray-400 hover:text-white underline cursor-pointer ml-1"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Blog Content Section */}
        {loading ? (
          /* SKELETON LOADING GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse flex flex-col"
              >
                <div className="h-52 bg-white/10 w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    <div className="h-5 bg-white/10 rounded-full w-20"></div>
                    <div className="h-5 bg-white/10 rounded-full w-24"></div>
                  </div>
                  <div className="h-6 bg-white/15 rounded w-5/6 mb-3"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-4/5 mb-6"></div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="h-4 bg-white/10 rounded w-24"></div>
                    <div className="h-4 bg-white/10 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* ERROR STATE */
          <div className="max-w-md mx-auto text-center py-16 px-6 bg-white/5 backdrop-blur-md rounded-2xl border border-red-500/20">
            <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Failed to Load Blogs</h3>
            <p className="text-gray-300 text-sm mb-6">{error}</p>
            <button
              onClick={() => fetchBlogs(currentPage, activeSearch)}
              className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:brightness-110 transition cursor-pointer inline-flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          /* EMPTY STATE */
          <div className="max-w-2xl mx-auto text-center py-16 px-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 mt-8">
            <div className="w-20 h-20 bg-[#00B4FF]/10 text-[#00B4FF] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#00B4FF]/20">
              <BookOpen className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              {activeSearch ? "No Articles Found" : "Insights Coming Soon"}
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed">
              {activeSearch
                ? `We couldn't find any articles matching "${activeSearch}". Try searching with different keywords.`
                : "We are currently curating in-depth technology articles, case studies, and enterprise insights for TechTrade. Please check back shortly!"}
            </p>
            {activeSearch ? (
              <button
                onClick={handleClearSearch}
                className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:brightness-110 transition cursor-pointer"
              >
                Clear Search &amp; View All
              </button>
            ) : (
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/sap-services"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-medium text-sm transition"
                >
                  Explore SAP Services
                </Link>
                <Link
                  to="/it-solutions"
                  className="bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:brightness-110 transition"
                >
                  Explore IT Solutions
                </Link>
              </div>
            )}
          </div>
        ) : (
          /* BLOG CARDS GRID */
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogs.map((blog) => {
                const coverImage = getImageUrl(blog);
                const publishedDate = formatDate(blog.published_at || blog.created_at);
                const excerpt =
                  blog.short_description ||
                  stripHtml(blog.description).slice(0, 140) + "...";

                return (
                  <article
                    key={blog.id || blog.slug}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#00B4FF]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_12px_30px_rgba(0,180,255,0.15)]"
                  >
                    {/* Blog Image */}
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="block relative h-52 overflow-hidden bg-[#0a1428]"
                    >
                      {coverImage ? (
                        <img
                          src={coverImage}
                          alt={blog.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : null}

                      {/* Fallback Graphic */}
                      <div
                        className={`w-full h-full bg-gradient-to-br from-[#0D47A1]/40 via-[#0a1428] to-[#00B4FF]/20 flex flex-col items-center justify-center p-6 text-center ${
                          coverImage ? "hidden" : ""
                        }`}
                      >
                        <Sparkles className="w-8 h-8 text-[#00B4FF] mb-2" />
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                          TechTrade Insights
                        </span>
                      </div>
                    </Link>

                    {/* Blog Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta: Date */}
                      <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5 text-gray-300">
                          <Calendar className="w-3.5 h-3.5 text-[#00B4FF]" />
                          {publishedDate}
                        </span>
                      </div>

                      {/* Blog Title */}
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#00B4FF] transition-colors leading-snug">
                        <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                        {excerpt}
                      </p>

                      {/* Card Footer: Read More Link */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                        <Link
                          to={`/blogs/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B4FF] group-hover:text-white transition-colors"
                        >
                          Read Full Story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {pagination.lastPage > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-1.5 mx-2">
                  {Array.from({ length: pagination.lastPage }, (_, idx) => idx + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-xl text-sm font-semibold transition ${
                        pageNum === currentPage
                          ? "bg-gradient-to-r from-[#00B4FF] to-[#0D47A1] text-white shadow-lg shadow-[#00B4FF]/20"
                          : "bg-white/5 border border-white/10 hover:bg-white/15 text-gray-300"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(pagination.lastPage, p + 1))}
                  disabled={currentPage >= pagination.lastPage}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;

