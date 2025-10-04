import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, BookOpen } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border border-gray-700"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-medium rounded-full border border-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
          {project.docUrl && (
            <a
              href={project.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Docs</span>
            </a>
        )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
    </motion.div>
  );
};

export default ProjectCard;