import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { education, experience, skillCategories } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <div className="py-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I’m a Computer Science student at Binus University passionate about software engineering and full-stack web development. 
            I’m also active in organizations to gain new experiences and continuously improve myself in various aspects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-purple-500 pl-6 flex items-start space-x-4"
                >
                  {edu.imageUrl && (
                    <img
                      src={edu.imageUrl}
                      alt={edu.school}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-purple-500 pl-6 flex items-start space-x-4"
                >
                  {exp.imageUrl && (
                    <img
                      src={exp.imageUrl}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 space-y-8"
        >
          <div className="flex items-center mb-6">
            <Code2 className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
          </div>
          
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-500/20 hover:border-purple-400/40 transition-colors"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;