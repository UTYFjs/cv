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
    description: `Индивидуальный проект. 
      Выполнен в 7 спринтов c контролем через тестирование Cypress на каждом спринте. 
      Авторизация (JWT и OAuth через Google аккаунт).`,
    stack: ['TS', 'React', 'Redux Toolkit', 'Ant Design'],
    linkDeploy: 'https://cleverfit-app.netlify.app/',
    linkCode: 'https://github.com/UTYFjs/fit-app',
  },
  {
    id: nanoid(),
    title: 'SuperBoards',
    src: './public/image/superboards-vertical-1.jpg',
    shortDescription: 'Аналог доски Trello',
    description: `Командный проект. 
    Приложение для управления проектами, позволяющеее централизованно управлять задачами и контролировать ход их выполнения в команде.`,
    stack: ['TS', 'React', 'Redux Toolkit', 'I18Next', 'React DnD'],
    linkDeploy: 'https://super-boards-rs-task.netlify.app/',
    linkCode: 'https://github.com/UTYFjs/project-management-app',
  },
  {
    id: nanoid(),
    title: 'Genuli',
    src: './public/image/genuli-vertical.jpg',
    shortDescription: 'Интернет магазин изделий из кожи ручной работы',
    description:
      'Индивидуальный проект. Интернет - магазин с реализованной фильтрацией, сортировкой, поиском. имеется возможность добавить в избранное, корзину, возможность выбора дополнительных опций для товаров.',
    stack: ['TS', 'React', 'Zustand'],
    linkDeploy: 'https://leather-store-v-1.netlify.app/',
    linkCode: 'https://github.com/UTYFjs/onlineStore',
  },
];

export const PROJECT_JS_DATA: ProjectDataType[] = [
  {
    id: nanoid(),
    title: 'Virtual Keyboard',
    src: './public/image/virtual-keyboard-2.jpg',
    shortDescription: 'Виртуальная клавиатура c функцией распознавания речи',
    description:
      'Поддерживает функциональность стандартной Windows клавиатуры.  Имеется функция распознавания речи в текст(в браузере требуется предоставить доступ к микрофону). Реализована  через работу c DOM с помошью JS и простого CSS, без HTML.',
    stack: ['JS', 'CSS(SCSS)', 'DOM', 'Events'],
    linkDeploy: 'https://virtual-keyboard-utyfjs.netlify.app/',
    linkCode: 'https://github.com/UTYFjs/virtual_keyboard',
  },
  {
    id: nanoid(),
    title: 'Shelter',
    src: './public/image/shelter-2.jpg',
    shortDescription: 'Pixel perfect верстка',
    description: 'Пиксель-перфект верстка из макета Figma',
    stack: ['JS', 'HTML', 'CSS'],
    linkDeploy: 'https://utyfjs.github.io/She/pages/main/index.html',
    linkCode: 'https://github.com/UTYFjs/She/tree/main',
  },
];

export const PROJECT_NODEJS_DATA: ProjectDataType[] = [
  {
    id: nanoid(),
    title: 'Home Library Service',
    src: '',
    shortDescription: 'Домашняя библиотека',
    description:
      'Индивидуальный проект. Backend часть приложения Домашней музыкальной библиотеки. Реализованы REST API endpoints (Пользователи, Артисты, Альбомы, Треки, Добавление в избранное). Работает из Docker контейнера. Работа с PostgreSQL через ORM Prisma. Аутентификация и авторизация. Логирование. Обработка ошибок.',
    stack: ['Nest.JS', 'Prisma', 'Docker'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs2023Q2-service',
  },
  {
    id: nanoid(),
    title: 'File Manager CLI',
    src: '',
    shortDescription: 'Файловый менеджер в терминале',
    description:
      'Файловый менеджер работающий через командную строку. Выполняет основные операции: копирование, перемещение, удаление, переименование файлов, получает информацию об операционной системе host-компьютера, вычисляет хэш, сжимает и распаковывает файлы',
    stack: ['Node.JS'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs-file-manager/tree/master',
  },
  {
    id: nanoid(),
    title: 'BattleShip',
    src: '',
    shortDescription: 'Игра моской бой (backend часть)',
    description:
      'Серверная часть игры "Морской бой" реализованная через Websocket. Обрабатывается подключение Websocket, запросы игроков( на помещение в игровую комнату, размещение кораблей, игровые запросы. Реализован функционал одиночной игры с ботом',
    stack: ['Node.JS', 'Websocket'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/websockets-ui/tree/main',
  },
  {
    id: nanoid(),
    title: 'CRUD API',
    src: '',
    shortDescription: 'Простой API на Node.JS',
    description: 'Простой CRUD API, использующий in-memory database',
    stack: ['Node.JS', 'REST API'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/crud-api/tree/develop',
  },
  {
    id: nanoid(),
    title: 'GraphQL API',
    src: '',
    shortDescription: 'REST API переписан на GraphQL',
    description: 'Реализован GraphQL API на основе из существующего REST API. Решена проблема n+1 запросов',
    stack: ['Node.JS', 'GraphQL'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs-task-graphql',
  },
];
