import { nanoid } from 'nanoid';

export type ProjectDataType = {
  id: string;
  title: string;
  src: string;
  shortDescription: string;
  description: string;
  linkDeploy: string;
  linkCode: string;
  stack: string[];
};
export const PROJECT_REACT_DATA: ProjectDataType[] = [
  {
    id: nanoid(),
    title: 'CleverFit',
    src: './public/image/cleverfit-vertical.jpg',
    shortDescription: 'Фитнес приложение',
    description: 'description',
    stack: ['Typescript', 'React', 'Redux Toolkit', 'Ant Design'],
    linkCode: 'https://github.com/UTYFjs/fit-app',
    linkDeploy: 'https://cleverfit-app.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'SuperBoards',
    src: './public/image/superboards-vertical-1.jpg',
    shortDescription: 'Аналог доски Trello',
    description: 'description',
    stack: ['Typescript', 'React', 'Redux Toolkit'],
    linkCode: 'https://github.com/UTYFjs/project-management-app',
    linkDeploy: 'https://super-boards-rs-task.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Genuli',
    src: './public/image/genuli-vertical.jpg',
    shortDescription: 'Интернет магазин изделий из кожи ручной работы',
    description: 'description',
    stack: ['Typescript', 'React', 'Zustand'],
    linkCode: 'https://github.com/UTYFjs/onlineStore',
    linkDeploy: 'https://leather-store-v-1.netlify.app/',
  },
];

export const PROJECT_JS_DATA = [
  {
    id: nanoid(),
    title: 'Virtual Keyboard',
    src: './public/image/cleverfit-vertical.jpg',
    shortDescription: 'Виртуальная клавиатура c функцией распознавания речи',
    description: 'description',
    stack: ['Javascript', 'HTML', 'CSS(SCSS)'],
    linkCode: 'https://github.com/UTYFjs/fit-app',
    linkDeploy: 'https://github.com/UTYFjs/virtual_keyboard',
  },
  {
    id: nanoid(),
    title: 'Shelter',
    src: './public/image/cleverfit-vertical.jpg',
    shortDescription: 'Виртуальная клавиатура',
    description: 'description',
    stack: ['Javascript', 'CSS(SCSS)'],
    linkCode: 'https://github.com/UTYFjs/She/tree/main',
    linkDeploy: 'https://utyfjs.github.io/She/pages/main/index.html',
  },
];

export const PROJECT_NODEJS_DATA = [
  {
    id: nanoid(),
    title: 'Home Library Service',
    src: '',
    shortDescription: 'Игра моской бой (backend часть)',
    description: 'description',
    stack: ['Nest.JS'],
    linkCode: 'https://github.com/UTYFjs/nodejs2023Q2-service',
    linkDeploy: '',
  },
  {
    id: nanoid(),
    title: 'File Manager',
    src: '',
    shortDescription: 'Файловый менеджер из терминала',
    description: 'description',
    stack: ['Node.JS'],
    linkCode: 'https://github.com/UTYFjs/nodejs-file-manager/tree/master',
    linkDeploy: '',
  },
  {
    id: nanoid(),
    title: 'BattleShip',
    src: '',
    shortDescription: 'Игра моской бой (backend часть)',
    description: 'description',
    stack: ['Node.JS', 'Websocket'],
    linkCode: 'https://github.com/UTYFjs/websockets-ui/tree/main',
    linkDeploy: '',
  },
  {
    id: nanoid(),
    title: 'CRUD API',
    src: '',
    shortDescription: 'Простой API на Node.JS',
    description: 'description',
    stack: ['Node.JS'],
    linkCode: 'https://github.com/UTYFjs/crud-api/tree/develop',
    linkDeploy: '',
  },
  {
    id: nanoid(),
    title: 'GraphQL API',
    src: '',
    shortDescription: 'REST API переписан на GraphQL',
    description: 'description',
    stack: ['Node.JS'],
    linkCode: 'https://github.com/UTYFjs/nodejs-task-graphql',
    linkDeploy: '',
  },
];
