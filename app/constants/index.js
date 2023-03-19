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
        "After Faran optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "/lis.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Vision X",
      description:
        "This website is designed to provide facial recognition capabilities using state-of-the-art technologies like React, Postgre SQL, and Express. With this website, users can easily upload images and identify people using facial recognition algorithms.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Postgre SQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "yellow-text-gradient",
        },
      ],
      image: '/web1.png',
      source_code_link: "https://github.com/faranbutt/Portfolio-Website",
    },
    {
      name: "Job IT",
      description:
        "This template was made for an open source project Panaverse DAO.The template was made using Next and Chakra UI.",
      tags: [
        {
          name: "NEXT.js",
          color: "blue-text-gradient",
        },
        {
          name: "ChakraUI",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: '/pana.png',
      source_code_link: "https://github.com/faranbutt/Panaverse-DAO",
    },
    {
      name: "Kings Klothing",
      description:
        "A comprehensive Full Stack Ecommerce platform that allows users to book choose products gender wise ,Add to Cart and remove products from the cart.The user can also register and sign in the ecomm app to save there specified purchases",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "GraphQl",
          color: "pink-text-gradient",
        },
      ],
      image: '/ecom.png',
      source_code_link: "https://github.com/faranbutt/Kings-Klothing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects }