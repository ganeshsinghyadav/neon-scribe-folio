
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              }
            }
          }}
        >
          <motion.p 
            className="text-neon font-mono"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lighter"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            John Doe.
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            I build amazing digital experiences.
          </motion.h2>
          
          <motion.p 
            className="max-w-lg text-slate py-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products that deliver 
            real business value.
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Button 
              className="bg-transparent hover:bg-neon/10 text-neon border border-neon rounded px-6 py-4 font-mono"
              size="lg"
            >
              Check out my work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
