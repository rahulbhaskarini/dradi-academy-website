import Layout from "@/components/Layout/Layout";
import SEO from "@/components/SEO";

const ContactDebug = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us - DR.ADI Academy"
        description="Get in touch with DR.ADI Academy for life coaching and personal development training. Contact us for program inquiries, consultations, and enrollment information."
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us - Debug Mode</h1>
          <p className="text-center text-lg">This is a simplified contact page to test routing.</p>
          <div className="text-center mt-8">
            <p>If you can see this, the routing is working correctly.</p>
            <p>The issue might be with a specific component or hook in the full Contact page.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactDebug;
