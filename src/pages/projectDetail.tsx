import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  BookOpen,
  Calendar,
  User,
  CheckCircle,
  // Target,
} from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const project = projects.find((p) => p.id === id);
  const currentProjectIndex = projects.findIndex((p) => p.id === id);

  useEffect(() => {
    if (!project) navigate('/projects');
  }, [project, navigate]);

  if (!project) return null;

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToProject = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? currentProjectIndex === 0
          ? projects.length - 1
          : currentProjectIndex - 1
        : currentProjectIndex === projects.length - 1
        ? 0
        : currentProjectIndex + 1;

    navigate(`/projects/${projects[newIndex].id}`);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            to="/projects"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => goToProject('prev')}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => goToProject('next')}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel (clean slide) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative aspect-video overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    custom={direction}
                    initial={{ x: direction > 0 ? '100%' : '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: direction > 0 ? '-100%' : '100%' }}
                    transition={{ duration: 0.4, ease: 'linear' }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {project.title}
            </motion.h1>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {project.longDescription ? (
                <div className="space-y-4">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-24 space-y-6"
            >
              {/* Technologies */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full border border-purple-300 dark:border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              {project.stats && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-3">
                    {project.stats.duration && (
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {project.stats.duration}
                          </p>
                        </div>
                      </div>
                    )}
                    {project.stats.role && (
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {project.stats.role}
                          </p>
                        </div>
                      </div>
                    )}
                    {project.stats.status && (
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {project.stats.status}
                          </p>
                        </div>
                      </div>
                    )}
                    {/* {project.stats.accuracy && (
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {project.stats.accuracy}
                          </p>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Links
                </h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        View Code
                      </span>
                    </a>
                  )}

                  {project.docUrl && (
                    <a
                      href={project.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    >
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        Documentation
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
