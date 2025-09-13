export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    name: "Mind Power",
    slug: "mind-power",
    description: "Articles about developing and harnessing the power of your mind"
  },
  {
    name: "Personal Development",
    slug: "personal-development",
    description: "Tips and strategies for personal growth and development"
  },
  {
    name: "NLP",
    slug: "nlp",
    description: "Learn about Neuro-Linguistic Programming techniques and applications"
  },
  {
    name: "Leadership",
    slug: "leadership",
    description: "Insights on becoming a better leader and developing leadership skills"
  },
  {
    name: "Success Stories",
    slug: "success-stories",
    description: "Inspiring stories of transformation and achievement"
  }
];
