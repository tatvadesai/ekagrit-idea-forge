
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import { services, testimonial } from "@/data/services";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Connect.{" "}
              <span className="text-primary">Build.</span>{" "}
              Learn.
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              I'm an MBA student at BITS Pilani who's obsessed with startups and the people who build them. 
              This is my space to connect with founders, learn from your journey, and maybe offer a fresh perspective along the way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 text-lg"
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why I'm Building This Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why I'm Building This
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Startups fascinate me. The audacity to build something from nothing, the resilience to keep going when everything breaks, 
              the vision to see what others can't—that's what I want to be around. I'm not here to pitch you or ask for equity. 
              I just want to learn from people who are actually doing it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Connect Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
              How We Connect
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <Card className="border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="font-space text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              What I'm Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-space text-xl font-semibold text-foreground">
                  Early-stage Founders
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  If you're pre-seed, seed, or just getting started—perfect. I love hearing about ideas in their raw form 
                  and the challenges you're facing as you figure things out.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-space text-xl font-semibold text-foreground">
                  Genuine Conversations
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  No pitches required. Just real talk about what you're building, what's working, what's not, 
                  and where you're headed next.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <blockquote className="space-y-6">
              <p className="font-space text-2xl md:text-3xl font-medium text-foreground italic">
                "{testimonial.quote}"
              </p>
              <footer className="text-muted-foreground font-inter">
                — {testimonial.author}
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-section" className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-space text-2xl md:text-3xl font-bold">
                Building connections today, building companies tomorrow.
              </h2>
              <p className="font-inter text-xl text-white/90">
                Let's start with a conversation.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
