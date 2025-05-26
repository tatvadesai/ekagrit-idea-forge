
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
                    my passion lies in business, business models, founders, promoters, and everything that connects to people 
                    who build. whether you're launching a startup, creating art, building content, or pursuing any ambitious project—
                    i want to understand what makes you tick and how i can help you grow.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    this platform is my way of building relationships while i'm still learning. think of it as my version 
                    of what michael ovitz built in hollywood—a network that creates opportunities and catalyzes growth for talented people.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* What I Bring Section */}
            <ScrollReveal delay={0.1}>
              <section className="space-y-8">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  what i bring to the table
                </h2>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      connector's mindset
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      i see patterns and connections others miss. my goal is to become the person who introduces 
                      the right people at the right time, creating value for everyone involved.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      bits pilani network
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      access to one of india's most vibrant startup and innovation ecosystems. founders, investors, 
                      industry leaders, and brilliant minds across every sector you can imagine.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-space text-xl font-medium text-foreground">
                      business strategy insights
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      i'm studying business strategy, operations, and finance at one of india's top institutions. 
                      sometimes an outside perspective can spot opportunities you're too close to see.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Vision Section */}
            <ScrollReveal delay={0.2}>
              <section className="space-y-8 bg-muted/20 p-8 rounded-lg">
                <h2 className="font-space text-2xl md:text-3xl font-semibold text-foreground">
                  the bigger picture
                </h2>
                <div className="space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    my long-term vision is to build india's most connected creative and business network. 
                    i want to be the person who helps talented people find the right opportunities, partnerships, and resources to scale their vision.
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                    think michael ovitz meets indian innovation ecosystem. today i'm learning and connecting. 
                    tomorrow i might be running a platform, a holding company, or something we haven't even imagined yet. 
                    but it all starts with relationships.
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
