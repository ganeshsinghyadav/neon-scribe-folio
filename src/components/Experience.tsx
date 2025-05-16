
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Mock experience data
const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2022 - Present',
    description: 'Led development of a React-based dashboard used by over 500,000 users. Implemented performance optimizations resulting in 40% faster page loads.',
    highlights: [
      'Architected and implemented a component library used across multiple products',
      'Reduced bundle size by 35% through code splitting and lazy loading',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Digital Solutions LLC',
    duration: 'Mar 2019 - Dec 2021',
    description: 'Developed responsive web applications using React, TypeScript, and GraphQL. Collaborated with UX designers to implement pixel-perfect interfaces.',
    highlights: [
      'Built a real-time dashboard using WebSockets for live updates',
      'Implemented client-side state management using Redux',
      'Integrated third-party APIs for payment processing and data visualization'
    ]
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Creative Agency',
    duration: 'Jun 2017 - Feb 2019',
    description: 'Created responsive websites and interactive web applications for clients across various industries. Worked with a team of designers and backend developers.',
    highlights: [
      'Developed mobile-first websites for 15+ clients',
      'Implemented animations and interactive elements using GSAP',
      'Optimized site performance and SEO'
    ]
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    duration: 'Sep 2015 - May 2017',
    description: 'Assisted in developing front-end components for web applications. Collaborated with senior developers to implement new features.',
    highlights: [
      'Built reusable UI components using HTML, CSS, and JavaScript',
      'Participated in daily stand-ups and sprint planning',
      'Assisted in code refactoring to improve maintainability'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading">
            <span className="text-neon font-mono mr-2">04.</span> Experience
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 ml-6 md:ml-0 h-full w-0.5 bg-neon/20 transform md:-translate-x-1/2"/>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 flex items-center justify-center transform translate-x-0 md:-translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-neon shadow-glow"/>
                </div>
                
                {/* Timeline content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                  <Card className="glass-card p-6 border border-white/10">
                    <div className="flex flex-col gap-2">
                      <span className="text-neon font-mono text-sm">{exp.duration}</span>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <h4 className="text-slate-light">{exp.company}</h4>
                      <p className="text-slate mt-2">{exp.description}</p>
                      
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-neon mr-2">▹</span>
                            <span className="text-sm text-slate-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
