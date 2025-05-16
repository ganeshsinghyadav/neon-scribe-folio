
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDescription: 'A modern e-commerce platform with React and Node.js',
    fullDescription: 'A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=E-Commerce+Project',
    github: '#',
    liveLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    shortDescription: 'A drag-and-drop task management application',
    fullDescription: 'A robust task management application with drag-and-drop functionality. Users can organize tasks in different columns, set deadlines, and track progress. Built with React and Firebase.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=Task+Management+App',
    github: '#',
    liveLink: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    shortDescription: 'Real-time weather forecasting application',
    fullDescription: 'A weather dashboard that provides real-time forecasts. Users can search for locations and view detailed weather information including temperature, humidity, wind speed, and a 7-day forecast.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Axios'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=Weather+Dashboard',
    github: '#',
    liveLink: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    shortDescription: 'Analytics dashboard for social media performance',
    fullDescription: 'A comprehensive analytics dashboard for tracking social media performance across multiple platforms. Features include engagement metrics, audience growth, and content performance.',
    tech: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=Social+Media+Dashboard',
    github: '#',
    liveLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    shortDescription: 'Mobile-first fitness tracking application',
    fullDescription: 'A mobile-first fitness tracking application that allows users to log workouts, track progress, and set goals. Features include a workout library, progress charts, and social sharing.',
    tech: ['React Native', 'Firebase', 'Expo', 'Redux'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=Fitness+Tracker',
    github: '#',
    liveLink: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'Movie Recommendation Engine',
    shortDescription: 'AI-powered movie recommendation system',
    fullDescription: 'An AI-powered movie recommendation system that suggests films based on user preferences and viewing history. Built with React, Node.js, and the TMDB API.',
    tech: ['React', 'Node.js', 'Express', 'TMDB API', 'Machine Learning'],
    image: 'https://placehold.co/600x400/112240/64ffda?text=Movie+Recommendations',
    github: '#',
    liveLink: '#',
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading">
            <span className="text-neon font-mono mr-2">03.</span> Projects
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className={`h-full glass-card overflow-hidden hover:shadow-lg hover:shadow-neon/20 transition-all duration-300 flex flex-col ${
                  project.featured ? 'border-neon/30' : 'border-white/10'
                }`}
              >
                <div className="w-full h-48 bg-navy-light relative overflow-hidden">
                  <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="border-neon text-neon">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate text-sm mb-4 flex-grow">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs font-mono text-neon bg-navy-light"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-mono text-neon bg-navy-light"
                      >
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-neon hover:bg-neon/10 border-neon"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 bg-neon hover:bg-neon/90 text-navy-light"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="bg-navy-light border border-neon/20 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-neon">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="w-full h-64 mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <p className="text-slate-light mb-6">{selectedProject.fullDescription}</p>
                <div className="mb-6">
                  <h4 className="text-neon font-mono text-sm mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="font-mono text-neon bg-navy"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button 
                    className="flex-1 bg-neon hover:bg-neon/90 text-navy-light"
                    asChild
                  >
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-neon text-neon hover:bg-neon/10"
                    asChild
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
