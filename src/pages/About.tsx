
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="font-space text-4xl md:text-5xl font-bold text-foreground">
                About Ekagrit Ventures
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                A pseudonymous founder building bridges between ideas and execution.
              </p>
            </div>

            {/* Who's Behind Section */}
            <ScrollReveal>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  Who's Behind Ekagrit Ventures?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    A pseudonymous founder with a decade of experience building, scaling, and 
                    advising early-stage companies. The focus isn't on credentials—it's on 
                    clear thinking, honest feedback, and helping founders avoid the common 
                    pitfalls that derail promising ideas.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    Philosophy: The best ideas emerge from conversation, not isolation. 
                    Most founders need a thinking partner, not another investor.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* What We Do Section */}
            <ScrollReveal delay={0.1}>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  What We Do
                </h2>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Offer Early Product Feedback
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Get unbiased perspectives on your product direction, feature prioritization, 
                      and user experience before you commit significant resources.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Co-Brainstorming on Direction
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Navigate strategic decisions, market positioning, and growth strategies 
                      through structured thinking sessions designed to clarify your path forward.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Build-First, Founder-Friendly Thinking
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      Practical advice from someone who's been in the builder's seat. 
                      No theoretical frameworks—just real-world insights that help you ship faster.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Future Vision Section */}
            <ScrollReveal delay={0.2}>
              <section className="space-y-8 bg-muted/20 p-8 rounded-lg">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  What We're Building Toward
                </h2>
                <div className="space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    This is step one of a long-term ambition to create a world-class investment 
                    platform and founder ally. Today's conversations become tomorrow's partnerships.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    The goal is to build a holding company that supports exceptional founders 
                    with both capital and operational expertise—but only after establishing 
                    genuine relationships built on trust and shared vision.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic font-inter text-foreground">
                    "The best investments start as conversations between builders."
                  </blockquote>
                </div>
              </section>
            </ScrollReveal>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
