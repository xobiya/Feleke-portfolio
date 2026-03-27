import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import { skills } from '../../data/skills';

export default function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <SectionWrapper id="about" className="section-wrapper">
      {(isInView) => (
        <div className="container mx-auto px-4">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-pink mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Bio */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                Hello! I’m <strong>Feleke Eshetu</strong>, a <strong>Full-Stack Developer</strong> focused on building reliable digital products that are fast, accessible, and user-friendly.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                My core stack includes <strong>React, Node.js, Express, MongoDB, and Laravel</strong>, and I implement secure <strong>payment integrations</strong> for end-to-end production solutions.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I enjoy translating ideas into production-ready applications—from planning and UI implementation to deployment and iteration based on real feedback.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I’m currently pursuing a <strong>Software Engineering degree at Arba Minch University</strong> and continuously improving my craft through practical projects and collaboration.
              </motion.p>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '10+', label: 'Projects' },
                  { number: '3+', label: 'Stacks' },
                  { number: '100%', label: 'Commitment' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-cyber text-cyber-cyan mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-cyber text-gradient-cyber mb-6">Technical Skills</h3>

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyber-cyan text-sm font-mono">{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-neon-pink"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
