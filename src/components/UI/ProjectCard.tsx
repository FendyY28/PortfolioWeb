import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border border-gray-200 dark:border-gray-700 cursor-pointer"
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
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-300 dark:border-purple-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Details Link */}
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-200">
              <span className="text-sm font-medium">Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;