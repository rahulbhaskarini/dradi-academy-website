import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface BlogArchiveEntry {
  year: number;
  months: {
    month: number;
    posts: BlogPost[];
  }[];
}

interface BlogSidebarProps {
  posts: BlogPost[];
}

const organizePosts = (posts: BlogPost[]): BlogArchiveEntry[] => {
  const postsByDate = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth();

    const yearEntry = acc.find(entry => entry.year === year);
    if (yearEntry) {
      const monthEntry = yearEntry.months.find(m => m.month === month);
      if (monthEntry) {
        monthEntry.posts.push(post);
      } else {
        yearEntry.months.push({ month, posts: [post] });
      }
    } else {
      acc.push({
        year,
        months: [{ month, posts: [post] }]
      });
    }

    return acc;
  }, [] as BlogArchiveEntry[]);

  // Sort years descending
  return postsByDate.sort((a, b) => b.year - a.year).map(year => ({
    ...year,
    months: year.months.sort((a, b) => b.month - a.month)
  }));
};

const getMonthName = (month: number): string => {
  return new Date(2000, month, 1).toLocaleString('default', { month: 'long' });
};

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ posts }) => {
  const [expandedYears, setExpandedYears] = useState<number[]>([]);
  const [expandedMonths, setExpandedMonths] = useState<string[]>([]);
  
  const archive = organizePosts(posts);

  const toggleYear = (year: number) => {
    setExpandedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const toggleMonth = (yearMonth: string) => {
    setExpandedMonths(prev =>
      prev.includes(yearMonth)
        ? prev.filter(ym => ym !== yearMonth)
        : [...prev, yearMonth]
    );
  };

  return (
    <aside className="w-72 p-6 bg-card border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-foreground">Blog Archive</h2>
      <div className="space-y-3">
        {archive.map(({ year, months }) => (
          <div key={year} className="space-y-2">
            <button
              onClick={() => toggleYear(year)}
              className="flex items-center w-full hover:bg-accent/50 p-2 rounded-md transition-colors"
            >
              {expandedYears.includes(year) ? (
                <ChevronDown className="w-4 h-4 mr-2 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2 text-muted-foreground" />
              )}
              <span className="text-foreground font-medium">{year}</span>
            </button>
            
            {expandedYears.includes(year) && (
              <div className="ml-6 space-y-2 border-l-2 border-muted pl-4">
                {months.map(({ month, posts }) => {
                  const yearMonth = `${year}-${month}`;
                  return (
                    <div key={yearMonth}>
                      <button
                        onClick={() => toggleMonth(yearMonth)}
                        className="flex items-center w-full hover:bg-accent/50 p-2 rounded-md transition-colors text-sm"
                      >
                        {expandedMonths.includes(yearMonth) ? (
                          <ChevronDown className="w-4 h-4 mr-2 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2 text-muted-foreground" />
                        )}
                        <span className="text-muted-foreground">{getMonthName(month)}</span>
                        <span className="ml-2 text-xs text-muted-foreground/70">({posts.length})</span>
                      </button>
                      
                      {expandedMonths.includes(yearMonth) && (
                        <div className="ml-6 space-y-1 border-l-2 border-muted pl-4">
                          {posts.map(post => (
                            <Link
                              key={post.id}
                              to={`/blog/${post.slug}`}
                              className="block hover:text-primary hover:bg-accent/50 p-2 rounded-md text-sm text-muted-foreground transition-colors truncate"
                            >
                              {post.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};
