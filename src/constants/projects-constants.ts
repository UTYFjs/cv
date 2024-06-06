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
