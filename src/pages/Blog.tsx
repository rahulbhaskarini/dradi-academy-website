import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/types/blog";
import SEO from "@/components/SEO";

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <Layout>
      <SEO 
        title="Blog | Dr.ADi Academy"
        description="Read our latest articles on personal development, NLP, mind power, and success strategies. Transform your life with expert insights from Dr. ANR."
      />
      
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore insights, strategies, and success stories to help you transform your life
              and achieve your fullest potential.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "secondary" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Posts
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category.slug}
                variant={selectedCategory === category.slug ? "secondary" : "outline"}
                onClick={() => setSelectedCategory(category.slug)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300">
                <Link to={`/blog/${post.slug}`}>
                  <CardContent className="p-4">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {blogCategories.find(cat => cat.slug === post.category)?.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                      </div>
                      <h2 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-sm font-medium">{post.author}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndex;
