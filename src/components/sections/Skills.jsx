import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import { skillCategories } from '../../data/skills.js';

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-wrapper">
      {(isInView) => (
        <div className="container mx-auto px-4">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-pink mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring digital experiences to life
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card-cyber text-center"
              >
                <h3 className="text-2xl font-cyber text-gradient-cyber mb-6">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="flex flex-col items-center p-4 rounded-lg hover:glass-cyber transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg glass group-hover:glass-cyber transition-all">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: '15+', label: 'Frameworks' },
              { value: '50k+', label: 'Lines of Code' },
              { value: '24/7', label: 'Learning' },
              { value: '∞', label: 'Creativity' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 card-cyber hover:glass-cyber transition-all"
              >
                <div className="text-3xl font-cyber text-cyber-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
}
