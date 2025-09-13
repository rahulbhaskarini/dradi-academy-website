import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag, Timer } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/types/blog";
import SEO from "@/components/SEO";
import { BlogSidebar } from "@/components/BlogSidebar";

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <Layout>
      <SEO
        title="Blog | DR.ADI Academy"
        description="Read our latest articles on personal development, NLP, law of attraction, and success stories. Learn transformative techniques and get inspired."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Blog</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Insights, tips, and success stories to help you transform your life
          </p>
        </div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                All Posts
              </Button>
              {blogCategories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="relative aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Timer className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar posts={blogPosts} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;
