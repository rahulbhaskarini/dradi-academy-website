import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
import { blogCategories } from "@/types/blog";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '@/styles/blog-new.css';
import { BlogSidebar } from "@/components/BlogSidebar";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const category = blogCategories.find(cat => cat.slug === post.category);

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Dr.ADi Academy Blog`}
        description={post.excerpt}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Main Content */}
          <article className="flex-1">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                {category && (
                  <>
                    <span>•</span>
                    <Link 
                      to={`/blog?category=${category.slug}`}
                      className="text-primary hover:text-primary/80"
                    >
                      {category.name}
                    </Link>
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Sidebar */}
          <BlogSidebar posts={blogPosts} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
