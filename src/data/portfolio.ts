export const skillCategories = [
  {
    title: 'Technical Skills',
    skills: [
      'React',
      'PHP', 
      'Python',
      'Typescript',
      'MySQL',
      'Java',
      'HTML',
      'CSS',
      'Javascript'
    ]
  },
  {
    title: 'Tools',
    skills: [
      'Github',
      'Miro',
      'Jira',
      'Trello',
      'Figma',
      'Canva',
      'Microsoft Office'
    ]
  },
  {
    title: 'Languages',
    skills: [
      'Indonesian',
      'English',
    ]
  }
];

export const projects = [
  {
    id: '1',
    title: 'EduFun',
    description: 'A Learning Management System with quiz features.',
    imageUrl: '/assets/images/Edufun.jpg',
    images: [
      '/assets/images/Edufun.jpg',
      '/assets/images/Edufun-2.jpg',
      '/assets/images/Edufun-3.jpg'
    ],
    technologies: ['PHP', 'MySQL'],
    githubUrl: 'https://github.com/FendyY28/EduFun',
    featured: true,
    longDescription: `EduFun is a universal Learning Management System built to make online learning more accessible, interactive, and collaborative across institutions. Unlike the usual LMS platforms that are limited to a single organization, EduFun enables educators and students from various institutions to connect, share resources, and engage in meaningful learning experiences. The platform includes features such as classroom management, discussion forums, assignment reminders, and an AI-powered chatbot using Gemini API that guides users through the system.

Developed using PHP, MySQL, and designed with Figma, EduFun provides a scalable and user-friendly interface suitable for diverse academic environments. EduFun supports digital transformation in education, offering an open, inclusive, and adaptive learning space without institutional restrictions.`,
    stats: {
      duration: '4 months',
      role: 'Back-end Developer',
      status: 'Completed'
    }
  },
  {
    id: '2',
    title: 'Garbage Detector AI',
    description: 'An AI that detects types of garbages using pre-trained AI model (YoloV5).',
    imageUrl: '/assets/images/GarbageDetectionAI.png',
    images: [
      '/assets/images/GarbageDetectionAI.png',
      '/assets/images/GarbageDetectionAI-2.jpg',
    ],
    docUrl: 'https://docs.google.com/document/d/1jnPS3iEV5wrKy98Vsyr6ihstQz3qDoLAx1w2ItZFYhY/edit?usp=sharing',
    technologies: ['Python', 'YoloV5'],
    featured: true,
    longDescription: `The Garbage Detector AI is an intelligent waste classification system that leverages the power of YOLOv5 (You Only Look Once version 5) to automatically identify and categorize different types of garbage in real-time.
This project addresses the growing need for automated waste management solutions in smart cities and environmental conservation efforts. The AI model can accurately distinguish between various waste categories including plastic bottles, paper, organic waste, metal cans, and other recyclable materials.

The system uses a pre-trained YOLOv5 model that has been fine-tuned on a comprehensive dataset of garbage images. The model achieves high accuracy in object detection and classification, making it suitable for deployment in real-world waste sorting facilities.`,
    stats: {
      duration: '3 months',
      role: 'AI Developer',
      status: 'Completed',
    }
  },
];

export const personalInfo = {
  name: 'Fendy Yurista',
  title: 'Software Engineer',
  email: 'yuristafendy28@gmail.com',
  phone: '+62 877-7737-1818',
  location: 'Kota Tangerang, Indonesia',
  bio: '5th Semester Computer Science Student Focusing on Software Engineering.',
  github: 'https://github.com/FendyY28',
  linkedin: 'https://linkedin.com/in/fendy-yurista',
};

export const education = [
  {
    degree: 'Undergraduate Computer Science Student',
    school: 'Binus University @Alam Sutera',
    year: '2023 - Present',
    description: 'Focused on software engineering, full-stack web development, agile framework, and algorithms.',
    imageUrl: '/assets/images/BinusUni.jpg'
  },
  {
    degree: 'Science Student',
    school: 'Petra 1 Senior High School',
    year: '2020-2023',
    description: 'Focused on science subjects.',
    imageUrl: '/assets/images/Petra1.jpg'
  }
];

export const experience = [
  {
    title: 'HIMTI Binus',
    company: 'Web Developer Division',
    period: 'Mar 2025 - Present',
    description: 'Worked as a team to add more features in OFOG Website.',
    imageUrl: '/assets/images/HimtiLogo.jpeg'
  },
  {
    title: 'Persekutuan Oikoumene',
    company: 'Media and Communication Division',
    period: 'Apr 2025 - Present',
    description: 'Created promotional digital contents (Posters, Videos) for events.',
    imageUrl: '/assets/images/POLogo.png'
  }
];