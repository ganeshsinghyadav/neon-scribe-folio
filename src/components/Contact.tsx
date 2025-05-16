
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (form.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then((result) => {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact directly via email.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="section-heading inline-block">
            <span className="text-neon font-mono mr-2">05.</span> Get In Touch
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-md mx-auto mt-6 text-slate"
        >
          Whether you have a question, want to discuss a project, or just want to say hi,
          my inbox is always open. I'll get back to you as soon as possible!
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-light">Email</p>
                  <a href="mailto:hello@example.com" className="text-neon hover:underline">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-light">Resume</p>
                  <a href="#" className="text-neon hover:underline">View Resume</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-light">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">github.com/username</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-light">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">linkedin.com/in/username</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 glass-card p-6 rounded-lg">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-card border-neon/30 focus:border-neon focus-visible:ring-neon/20"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-card border-neon/30 focus:border-neon focus-visible:ring-neon/20"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-card min-h-[120px] border-neon/30 focus:border-neon focus-visible:ring-neon/20"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-neon hover:bg-neon/90 text-navy-light font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
