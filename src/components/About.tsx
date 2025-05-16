
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading">
            <span className="text-neon font-mono mr-2">01.</span> About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try creating 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these days 
              is building accessible, inclusive products and digital experiences at Upstatement for a 
              variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app 
              with the React JS Framework.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                className="bg-neon hover:bg-neon/90 text-navy-light font-semibold"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="border-neon text-neon hover:bg-neon/10"
              >
                Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center items-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full border-2 border-neon/30 transform translate-x-4 translate-y-4"></div>
              <Card className="w-full h-full rounded-full overflow-hidden border-2 border-neon glass-card">
                <div className="w-full h-full bg-slate-light/20 flex items-center justify-center">
                  <span className="text-neon text-5xl">JD</span>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
