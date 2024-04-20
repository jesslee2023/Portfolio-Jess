import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  library,
  recipe,
  halloween,
  pencilpaws,
  spaceInvader,
  hyperIsland,
  todolist,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: prototyping,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Hyper Island',
    icon: hyperIsland,
    iconBg: '#333333',
    date: 'Aug 2023 - Oct 2023',
  },
  {
    title: 'Back-End Developer',
    company_name: 'Hyper Island',
    icon: hyperIsland,
    iconBg: '#333333',
    date: 'Oct 2023 - Dec 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Hyper Island',
    icon: hyperIsland,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Online Library',
    description:
      'Web-based platform that allows users to search, view and buy ebooks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'bootsrap',
        color: 'pink-text-gradient',
      },
    ],
    image: library,
    repo: 'https://github.com/jesslee2023/team-7-react-project',
    demo: 'https://online-library-jess-react.netlify.app',
  },
  {
    id: 'project-2',
    name: 'Recipe Finder',
    description:
      'A platform displays varities of recipes and views the details for different recipes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: recipe,
    repo: 'https://github.com/jesslee2023/Team6-collaborative-work',
    demo: 'https://hungry-chief-team6.netlify.app',
  },
  {
    id: 'project-3',
    name: 'Hallotween Town',
    description: 'This is a landing page of halloween town website.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: halloween,
    repo: 'https://github.com/jesslee2023/Halloween-town',
    demo: 'https://halloween-jess.netlify.app',
  },
  {
    id: 'project-4',
    name: 'Draw and Guess',
    description: `A website is dedicated to show the game of Draw and Guess.`,
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: pencilpaws,
    repo: 'https://github.com/jesslee2023/PencilPawsBeta',
    demo: 'https://jesslee-pencilpaws.netlify.app',
  },
  {
    id: 'project-5',
    name: 'Space Invader',
    description: 'This is a game website named Space Invader.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: spaceInvader,
    repo: 'https://github.com/jesslee2023/S6game',
    demo: 'https://space-invader-jess.netlify.app',
  },
  {
    id: 'project-6',
    name: 'To Do List',
    description: 'This is a todo list web application.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
    ],
    image: todolist,
    repo: 'https://github.com/jesslee2023/mytodolist',
    demo: 'https://mytodolist-olive.vercel.app',
  },
];

export { services, technologies, experiences, projects };
