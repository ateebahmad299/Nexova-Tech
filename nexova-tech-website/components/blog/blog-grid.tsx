"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"
import { Calendar, Clock } from "lucide-react"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  const featuredPost = posts.find((p) => p.featured)
  const otherPosts = posts.filter((p) => !p.featured)

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Featured
                  </span>
                  <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-balance">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
