"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogArticleProps {
  post: BlogPost
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="mt-10 aspect-[16/9] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="mt-10 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`
                  if (line.startsWith("## ")) return `<h2 class="text-2xl font-bold mt-8 mb-3">${line.slice(3)}</h2>`
                  if (line.startsWith("### "))
                    return `<h3 class="text-xl font-semibold mt-6 mb-2">${line.slice(4)}</h3>`
                  if (line.startsWith("- ")) return `<li class="ml-4">${line.slice(2)}</li>`
                  if (line.trim() === "") return ""
                  return `<p class="mb-4 leading-relaxed">${line}</p>`
                })
                .join(""),
            }}
          />
        </motion.div>

        {/* Share */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm font-medium text-foreground mb-4">Share this article</p>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild className="bg-transparent">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://nexova.tech/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-transparent">
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://nexova.tech/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
