import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Chatbot from "@/components/Chatbot";

interface LayoutProps {
  children: React.ReactNode;
  showScrollToTop?: boolean;
}

const Layout = ({ children, showScrollToTop = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {showScrollToTop && <ScrollToTopButton />}
      <Chatbot />
    </div>
  );
};

export default Layout;