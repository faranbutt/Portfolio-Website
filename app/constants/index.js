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
      title: "Researcher",
      company_name: "NCAI",
      icon: '/ncai.jpeg',
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Development of Augmneted Reality Controllerd Autonomus Wheel Chair ",
        "Design is implemented using ROS and Unity 3D",
        "Magic Leap AHM is used to detect potential Affordances and displaying Augmented Objects ",
        "Wheelchair control systems is implemented using  Raspberry PI with bunch of sensor i.e MobileRanger Setereo Camera,SICK LMS",
        "Implementation of Simultaneous Localization and Mapping using ROS is currently under process"
      ],
    },
    {
      title: "Embedded Engineer",
      company_name: "Technosol Private Limited",
      icon:'/technosol.jpeg',
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Oct 2021",
      points: [
        "Design and implementation of Smart Home Automation System using Arduino Uno",
        "Collaborated with hardware engineers to design and debug PCBs for embedded systems",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developed firmware for various microcontrollers such as ARM Cortex M-series, AVR, and PIC.",
        "Worked on different communication protocols such as UART, SPI, I2C, CAN, Ethernet, and wireless communication protocols such as Wi-Fi and Bluetooth",
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