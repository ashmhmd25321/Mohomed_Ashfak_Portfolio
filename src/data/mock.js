// Mock data for Mohomed Ashfak's Portfolio

export const personalInfo = {
  name: "Mohomed Ashfak",
  title: "Software Developer",
  location: "Kurunegala, Sri Lanka",
  email: "ashfak25321@gmail.com",
  phone: "+94773098074",
  linkedin: "https://www.linkedin.com/in/mohomedashfak09823a/",
  github: "https://github.com/ashmhmd25321",
  summary: "Results-driven and adaptable Software Developer with strong expertise in full-stack web development, mobile applications, and machine learning solutions. Experienced in designing and deploying scalable systems, including React, Flutter, Java, and Python-based applications, with a focus on UI/UX excellence, security, and performance.",
  profileImage: "./images/mohomed-ashfak.jpeg"
};

export const skills = [
  {
    category: "Frontend",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Flutter"]
  },
  {
    category: "Backend", 
    technologies: ["Java", "Spring Boot", "Node.js", "Python", "Spring Security", "JWT Authentication"]
  },
  {
    category: "Database",
    technologies: ["MySQL", "MongoDB", "Spring Data JPA"]
  },
  {
    category: "Tools & DevOps",
    technologies: ["Docker", "Maven", "Git", "Linux", "AWS", "Stripe Integration"]
  },
  {
    category: "Other",
    technologies: ["Machine Learning", "AI", "Real-time Chat", "Payment Integration", "UI/UX Design"]
  }
];

export const projects = [
  {
    id: 1,
    name: "Skill Exchange Platform",
    description: "A comprehensive platform where users trade knowledge through scheduled sessions, featuring real-time chat, smart search, and secure payments.",
    technologies: ["React", "Spring Boot", "MySQL", "Docker", "Stripe Integration", "Real-time Chat"],
    demoUrl: "https://skill-exchange.dreamware.lk/",
    githubUrl: "#",
    image: "./images/skill-exchange-platform/feed page.png",
    featured: true
  },
  {
    id: 2,
    name: "LearnHub - Your Learning Companion",
    description: "Educational platform for schools with homework management, student submissions, grading system, and role-based access control.",
    technologies: ["Java 17", "Spring Boot 3.2.0", "Spring Security", "React 18", "MySQL", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://homework.dreamware.lk/",
    githubUrl: "#",
    image: "./images/LearnHub/landing-page.png",
    featured: true
  },
  {
    id: 3,
    name: "PCMart E-commerce Platform", 
    description: "E-commerce platform for PC hardware with advanced filtering, product comparison, inventory management, and secure payments.",
    technologies: ["React", "Node.js", "E-commerce", "Payment Integration"],
    demoUrl: "https://pcmart.templates.dreamware.lk/",
    githubUrl: "#",
    image: "./images/PCMart/Screenshot 2025-10-15 at 20.01.20.png",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    company: "SkyMax Solutions",
    position: "Full-Stack Developer",
    duration: "12/2024 - Present",
    location: "Negombo, Sri Lanka",
    description: "Developing and maintaining full-stack web and mobile applications using modern technologies including Angular, Spring Boot, Flutter, and Firebase.",
    achievements: [
      "Developed and maintained full-stack web and mobile applications using Angular, Spring Boot, Flutter, and Firebase, enhancing performance and cross-platform compatibility",
      "Implemented RESTful APIs and real-time data exchange features for e-commerce and service-based platforms, improving system responsiveness and user experience",
      "Integrated machine learning models for personalized recommendations and prediction systems, increasing product engagement and data-driven insights"
    ]
  },
  {
    id: 2,
    company: "Megabliss Worldwide",
    position: "Back-End Developer",
    duration: "10/2023 - 05/2024",
    location: "Auckland, New Zealand",
    description: "Focused on backend development and payment system integrations for mobile applications in an international remote environment.",
    achievements: [
      "Integrated the Stripe payment gateway into a mobile application, reducing abandoned carts by 20% through a smoother checkout experience",
      "Designed and delivered a bill-splitting feature that supports transactions among up to 10 users, improving user satisfaction and increasing app engagement",
      "Collaborated with cross-functional teams in an Agile environment to deliver features on time, ensuring high scalability and performance"
    ]
  },
  {
    id: 3,
    company: "ICT OPTION",
    position: "Full-Stack Software Developer",
    duration: "04/2021 - 06/2023",
    location: "Sri Lanka",
    description: "Engineered robust full-stack solutions with focus on API development and mobile applications with AI integration.",
    achievements: [
      "Engineered robust RESTful APIs that facilitated real-time data exchange with the Angular front-end, achieved a 40% increase in response speed through optimized query handling",
      "Developed and deployed mobile applications with integrated deep learning algorithms for enhanced user experiences and intelligent features"
    ]
  },
  {
    id: 4,
    company: "Freelancing",
    position: "Full-Stack Developer & ML Engineer",
    duration: "October 2021 - Present",
    location: "Remote",
    description: "Providing end-to-end software development solutions including web applications, mobile apps, and machine learning implementations.",
    achievements: [
      "Developed and maintained full-stack web and mobile applications, delivering end-to-end solutions from front-end interfaces to back-end services",
      "Designed and implemented machine learning models for data analysis, pattern recognition, and intelligent automation",
      "Maintained long-term client relationships by consistently delivering high-quality, scalable solutions within tight deadlines"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "BSc in Software Engineering",
    institution: "Cardiff Metropolitan University",
    duration: "2023",
    grade: "Second Upper Class",
    description: "Successfully completed bachelor's degree with focus on modern software development practices, system design, and advanced programming concepts."
  },
  {
    id: 2,
    degree: "Higher Diploma (HD) in Software Engineering", 
    institution: "ICBT Campus",
    duration: "2019",
    grade: "Second Upper Class",
    description: "Successfully completed comprehensive software engineering program covering full-stack development, database management, and software architecture."
  },
  {
    id: 3,
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    duration: "2015", 
    grade: "Successfully Completed",
    description: "Enhanced communication skills and professional English proficiency for international software development environments."
  },
  {
    id: 4,
    degree: "Diploma in IT with E-Commerce",
    institution: "ESOFT Metro Campus", 
    duration: "2015",
    grade: "Successfully Completed",
    description: "Foundation in information technology and e-commerce systems, providing strong technical fundamentals for software development career."
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable E-learning Platforms with React and Spring Boot",
    excerpt: "Learn how to architect and build comprehensive educational platforms that can handle thousands of users with modern web technologies.",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Implementing Real-time Features in Web Applications",
    excerpt: "A deep dive into building real-time chat systems, notifications, and live updates using modern web technologies.",
    date: "2024-02-28",
    readTime: "6 min read", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Security Best Practices for Full Stack Applications",
    excerpt: "Essential security measures every developer should implement when building modern web applications with authentication systems.",
    date: "2024-02-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop"
  }
];