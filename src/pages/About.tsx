
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
                hi, i'm the person behind ekagrit
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                an mba student who believes the best way to learn about creating is to connect with the people building things.
              </p>
            </div>

            {/* My Story Section */}
            <ScrollReveal>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  my story
                </h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    i'm currently pursuing my mba from bits pilani, but my real education happens in conversations 
                    with creators. i've always been drawn to people who take risks, who see possibilities where others see problems, 
                    and who have the courage to make something from nothing.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    i don't have a creative background yet—i'm the student, not the teacher. but i do have genuine curiosity, 
                    fresh perspectives from my business studies, and a fascination with understanding what makes great projects work.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    this platform is my way of building relationships with creators while i'm still learning. 
                    no hidden agendas, no business pitches—just authentic connections with people doing interesting things.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* What I Bring Section */}
            <ScrollReveal delay={0.1}>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  what i bring
                </h2>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      fresh perspective
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      i'm studying business strategy, operations, and finance at one of india's top institutions. 
                      sometimes an outside lens can spot things you're too close to see.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      genuine curiosity
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      i ask questions because i genuinely want to understand, not because i'm trying to sell you something. 
                      every conversation teaches me something new about creating and building.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      long-term thinking
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      i'm building relationships for the long haul. today's conversations become tomorrow's collaborations, 
                      whether as a supporter, collaborator, or fellow creator.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Future Vision Section */}
            <ScrollReveal delay={0.2}>
              <section className="space-y-8 bg-muted/20 p-8 rounded-lg">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  where this is headed
                </h2>
                <div className="space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    my long-term vision is to build something meaningful in the creative ecosystem—whether that's 
                    starting my own project, joining an interesting team, or eventually supporting creators who are building amazing things.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    but that's tomorrow's story. today's story is about learning, connecting, and maybe adding value 
                    to your journey in whatever small way i can. the relationships i build now will shape everything i do next.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic font-inter text-foreground">
                    "the best way to predict the future is to build relationships with the people creating it."
                  </blockquote>
                </div>
              </section>
            </ScrollReveal>

            {/* BITS Pilani Credibility */}
            <ScrollReveal delay={0.3}>
              <section className="text-center space-y-6">
                <h3 className="font-space text-xl font-medium text-foreground">
                  currently studying at
                </h3>
                <p className="font-inter text-2xl font-semibold text-primary">
                  bits pilani - mba
                </p>
                <p className="font-inter text-muted-foreground">
                  one of india's premier institutes for technology and management education
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
