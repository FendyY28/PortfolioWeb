import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Star } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/UI/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // // Extract all unique technologies from projects
  // const allTechnologies = Array.from(
  //   new Set(projects.flatMap(project => project.technologies))
  // ).sort();

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;


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
            My Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of projects I've worked on so far, a few are still on progress.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
              }`}
            >
              <Star className="w-4 h-4 inline mr-2" />
              Featured ({projects.filter(p => p.featured).length})
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-12 border-2 border-purple-300 dark:border-purple-500/50 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/20 hover:shadow-purple-500/30 dark:hover:shadow-purple-500/30 transition-all duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
              I'm open to discussing new opportunities and interesting projects.
              Let's create something amazing together!
            </p>
            <a
              href="mailto:yuristafendy28@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-600 dark:to-purple-500 text-white rounded-lg font-medium hover:from-purple-700 hover:to-fuchsia-700 dark:hover:from-purple-700 dark:hover:to-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;