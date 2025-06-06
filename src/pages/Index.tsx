
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import { services } from "@/data/services";

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
              ideas.{" "}
              <span className="text-primary">connections.</span>{" "}
              growth.
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              i'm an mba student at bits pilani passionate about business, creators, and people who build. 
              this is where visionaries, artists, entrepreneurs, and dreamers connect to grow bigger together.
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
                let's connect
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
              why this exists
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              creators fascinate me. the courage to make something from nothing, the persistence when things don't work, 
              the vision to see possibilities others miss—that's what i want to be around. whether you're building a business, 
              creating art, launching content, or pursuing any ambitious project, i'm here to connect and explore together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Connect Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
              how we connect
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
              who i connect with
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-space text-xl font-semibold text-foreground">
                  creators & builders
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  startup founders, artists, content creators, business builders, tech innovators, social entrepreneurs—
                  anyone building something meaningful and ambitious.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-space text-xl font-semibold text-foreground">
                  visionaries & dreamers
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  people who see opportunities others miss, who aren't afraid to take risks, 
                  and who want to make their mark on the world through their work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BITS Network Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-foreground mb-8">
              the bits advantage
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              being at bits pilani gives me access to one of india's most vibrant startup and innovation ecosystems. 
              this network becomes your network—connecting you to the right people at the right time.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-2">
                <h4 className="font-space font-medium text-foreground">startup founders</h4>
                <p className="font-inter text-sm text-muted-foreground">access to ambitious builders across industries</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-space font-medium text-foreground">industry leaders</h4>
                <p className="font-inter text-sm text-muted-foreground">connections to executives and decision makers</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-space font-medium text-foreground">investors & mentors</h4>
                <p className="font-inter text-sm text-muted-foreground">access to capital and guidance networks</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-section" className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-space text-2xl md:text-3xl font-bold">
                building connections today, creating the future tomorrow.
              </h2>
              <p className="font-inter text-xl text-white/90">
                let's start with a conversation.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3"
              >
                get in touch
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
