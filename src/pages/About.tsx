
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
                Hi, I'm the person behind Ekagrit Ventures
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                An MBA student who believes the best way to learn about startups is to connect with the people building them.
              </p>
            </div>

            {/* My Story Section */}
            <ScrollReveal>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  My Story
                </h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    I'm currently pursuing my MBA from BITS Pilani, but my real education happens in conversations 
                    with founders. I've always been drawn to people who take risks, who see opportunities where others see problems, 
                    and who have the audacity to build something from nothing.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    I don't have a startup background yet—I'm the student, not the teacher. But I do have genuine curiosity, 
                    fresh perspectives from my business studies, and an obsession with understanding what makes great companies tick.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    This platform is my way of building relationships with founders while I'm still learning. 
                    No hidden agendas, no equity conversations—just authentic connections with people I admire.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* What I Bring Section */}
            <ScrollReveal delay={0.1}>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  What I Bring to the Table
                </h2>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Fresh Academic Perspective
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      I'm studying business strategy, operations, and finance at one of India's top institutions. 
                      Sometimes an outside academic lens can spot things you're too close to see.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Genuine Curiosity
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      I ask questions because I genuinely want to understand, not because I'm trying to sell you something. 
                      Every conversation teaches me something new about building businesses.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      Long-term Thinking
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      I'm building relationships for the long haul. Today's conversations become tomorrow's partnerships, 
                      whether as an investor, operator, or fellow founder.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Future Vision Section */}
            <ScrollReveal delay={0.2}>
              <section className="space-y-8 bg-muted/20 p-8 rounded-lg">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  Where This Is Headed
                </h2>
                <div className="space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    My long-term vision is to build something meaningful in the startup ecosystem—whether that's 
                    starting my own company, joining an early-stage team, or eventually becoming an investor who actually understands what founders go through.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    But that's tomorrow's story. Today's story is about learning, connecting, and maybe adding value 
                    to your journey in whatever small way I can. The relationships I build now will shape everything I do next.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic font-inter text-foreground">
                    "The best way to predict the future is to build relationships with the people creating it."
                  </blockquote>
                </div>
              </section>
            </ScrollReveal>

            {/* BITS Pilani Credibility */}
            <ScrollReveal delay={0.3}>
              <section className="text-center space-y-6">
                <h3 className="font-space text-xl font-medium text-foreground">
                  Currently Studying At
                </h3>
                <p className="font-inter text-2xl font-semibold text-primary">
                  BITS Pilani - MBA
                </p>
                <p className="font-inter text-muted-foreground">
                  One of India's premier institutes for technology and management education
                </p>
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
