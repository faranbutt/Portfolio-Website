import {
    mobile,
    backend,
    creator,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Engineer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: backend,
    },
    {
      title: "Devops Engineer",
      icon: web,
    },
    {
      title: "Web3 Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "TypeScript",
      icon: '/typescript.png',
    },
    {
      name: "Next JS",
      icon: '/nextjs.svg',
    },
    {
      name: "React JS",
      icon: '/reactjs.png',
    },
    {
      name: "Redux Toolkit",
      icon: '/redux.png',
    },
    {
      name: "Node JS",
      icon: '/nodejs.png',
    },
    {
      name: "Python",
      icon: '/python.svg',
    },
    {
      name: "Express",
      icon: '/express.png',
    },
    {
      name: "Spring Boot",
      icon: '/spring.svg',
    },
    {
      name: "GraphQL",
      icon: '/graphql.svg',
    },
    {
      name: "Tailwind CSS",
      icon: '/tailwind.png',
    },
    {
      name: "git",
      icon: '/git.png',
    },
    {
      name: "terraform",
      icon: '/terraform.svg',
    },
    {
      name: "docker",
      icon: '/docker.png',
    },
    {
      name: "Kubernetes",
      icon: '/kube.svg',
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Faran is an intelligent and deeply creative person. He’s thorough and has great eye for details. I worked with him on several projects while we were teammates at Influx Zone and I was always inspired by his critical thinking and tenacity for seeing things through. ",
      name: "Jannat",
      designation: "VP",
      company: "IET",
      image: "/jannat.jpeg",
    },
    {
      testimonial:
        "Faran combines a very solid foundation of strong business acumen with a great understanding of how technology can drive business outcomes ...",
      name: "Mahnoor Maleeka",
      designation: "Sales Lead",
      company: "Zimco Corp",
      image: "/mahnoor.jpeg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "/lis.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects }