
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Tech skills with mocked logos (in real implementation, these would be proper icons)
const skills = [
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe XD', category: 'Design' },
];

// Group skills by category
const groupedSkills = skills.reduce((acc: Record<string, typeof skills>, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

const SkillCard = ({ name }: { name: string }) => (
  <Card className="flex items-center gap-2 p-4 bg-navy-light border border-white/10 min-w-[120px]">
    <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center text-neon font-mono">
      {name[0]}
    </div>
    <span className="text-sm font-medium">{name}</span>
  </Card>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading">
            <span className="text-neon font-mono mr-2">02.</span> Skills
          </h2>
        </motion.div>

        <div className="mt-12 space-y-10">
          {Object.entries(groupedSkills).map(([category, skillList], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-slate-light mb-4 flex items-center">
                <span className="w-3 h-3 bg-neon rounded-full mr-3"></span>
                {category}
              </h3>
              
              <div className="relative">
                <div className="flex overflow-hidden">
                  {/* First copy for infinite scroll effect */}
                  <div className={`flex gap-4 animate-marquee ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {skillList.map((skill) => (
                      <SkillCard key={skill.name} name={skill.name} />
                    ))}
                    {skillList.map((skill) => (
                      <SkillCard key={`${skill.name}-dup-1`} name={skill.name} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
