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
                Hello! I’m <strong>Feleke Eshetu</strong>, a passionate <strong>Full Stack Web Developer</strong> and <strong>Java Programmer</strong> currently pursuing my <strong>Software Engineering degree at Arba Minch University</strong>.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                I enjoy creating efficient, user-friendly, and visually appealing web applications while continuously learning new technologies and staying up-to-date with the latest in software development.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                With experience in frontend and backend development, I specialize in <strong>Java, JavaScript, React, Node.js</strong>, and modern web frameworks. I’m driven by problem-solving, building scalable solutions, and contributing to projects that make a real impact.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
                When I’m not coding, I love exploring new tech trends, experimenting with innovative software ideas, and enhancing my skills to stay at the forefront of the software development world.
              </motion.p>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '10+', label: 'Projects' },
                  { number: '2+', label: 'Years' },
                  { number: '100%', label: 'Passion' }
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
