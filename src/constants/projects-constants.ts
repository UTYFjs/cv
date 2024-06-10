import { nanoid } from 'nanoid';

type SprintType = {
  name: string;
  features: string[];
  linkTask: string;
  linkPR: string;
};

export type ProjectDataType = {
  id: string;
  title: string;
  src: string;
  shortDescription: string;
  description: string;
  linkDeploy: string;
  linkCode: string;
  stack: string[];
  sprints?: SprintType[];
  features?: string[];
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
    sprints: [
      {
        name: 'Главная страница',
        features: ['Главная страница'],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Регистрация, авторизация, восстановление пароля',
        features: [
          'Регистрация JWT token',
          'OAuth через Google аккаунт',
          'Авторизация',
          'Восстановление пароля',
          'Результирующие страницы отображающие ошибку запроса, либо успех, начинаются с относительного url: /result переход на эти страницы по прямой ссылке невозможен, при попытке перехода по прямой ссылке происходит редирект на страницу авторизации, на эти страницы можно попасть только по результатам запросов на сервер',
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Просмотр и добавление отзывов на приложение',
        features: [
          'Страница отзывов',
          'Просмотр и добавление отзывов на приложение',
          'В случае успешности/неуспешности запроса о создании отзыва отображается модальное окно.',
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Календарь тренировок',
        features: [
          'Календарь тренировок, для отображения и редактирования информации о тренировках пользователя',
          'Создание новой тренировки возможно только в будущем!! Пользователь жмет на ячейку в календаре - появляется модальное окно инициирующее начало создания новой тренировки. в день может быть только тодна отренировка каждого типа.',
          'В тренировку можно добавить сколько угодно упражнений, выбрать количество подходов, вес и количество упражнений для сохранениии тренировки после добавления нужных упражнений нужно нажать кнопку "сохранить изменения".',
          'Редактирование тренировки в прошлом возможно только один раз, в будущем - сколько угодно раз',
          'Различия при работе с мобильным и полноформатным календарем',
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Профиль',
        features: [
          'Редактирование данных пользователя и смена тарифа',
          'Загрузка аватарки в профиле ( доступна загрузка только одной картинки, поменять картинку на другую сервер не дает), загрузка возможна только файлов меньше 5 МБ',
          'Если пользователь авторизован через OAuth - отображается аватарка google аккаунта',
          'В профиле можно поменять имя и фамилию, дату рождения, а так же сменить пароль',
          'После успешного изменения данных появляется Alert',
          'Страница настроек можно активировать PRO тариф, если он еще не активирован. активация тарифа происходит через письмо пришедщее на e-mail. после отправления запроса на смену тарифа происходит разлогин из приложения',
          'Eсли PRO тариф активирован в карточке отображается до какой даты он активирован',
          'Cо страницы настроек можно опубликовать отзыв о приложении(открывается модальное окно), а так же перейти на страницу с отзывами',
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Страница тренировок',
        features: [],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Страница достижений',
        features: [
          'Cтраница содержит различные статистические данные о тренировках, упражнениях, нагрузках за период Неделя и Месяц',
        ],
        linkTask: '',
        linkPR: '',
      },
    ],
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
      'Индивидуальный проект. Backend часть приложения Домашней музыкальной библиотеки, выполненный в 3 спринта:',
    stack: ['Nest.JS', 'Prisma', 'Docker'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs2023Q2-service',
    sprints: [
      {
        name: '',
        features: ['REST API endpoints (Пользователи, Артисты, Альбомы, Треки, Добавление в избранное)'],
        linkTask: 'https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/rest-service/assignment.md',
        linkPR: 'https://github.com/UTYFjs/nodejs2023Q2-service/pull/1',
      },
      {
        name: '',
        features: ['Контенеризация', 'Обращение к PostgreSQL через ORM Prisma'],
        linkTask:
          'https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/containerization-database-orm/assignment.md',
        linkPR: 'https://github.com/UTYFjs/nodejs2023Q2-service/pull/2',
      },
      {
        name: '',
        features: ['Аутентификация и авторизация', 'Логирование', 'Обработка ошибок'],
        linkTask:
          'https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/logging-error-authentication-authorization/assignment.md',
        linkPR: 'https://github.com/UTYFjs/nodejs2023Q2-service/pull/3',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'File Manager CLI',
    src: '',
    shortDescription: 'Файловый менеджер в терминале',
    description: 'Файловый менеджер работающий через командную строку.',
    stack: ['Node.JS'],
    features: [
      ' Операции по копированию, перемещению, удалению, переименованию файлов,',
      'Получает информацию об операционной системе host-компьютера',
      'Cжимает и распаковывает файлы',
      'Вычисляет хэш',
    ],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs-file-manager/tree/master',
  },
  {
    id: nanoid(),
    title: 'BattleShip',
    src: '',
    shortDescription: 'Игра моской бой (backend часть)',
    description: 'Серверная часть игры "Морской бой" реализованная через Websocket.',
    stack: ['Node.JS', 'Websocket'],
    features: [
      'Обрабатывает запросы игроков( на помещение в игровую комнату, размещение кораблей, игровые запросы)',
      'Реализован функционал одиночной игры с ботом',
    ],
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
    description: 'Реализован GraphQL API на основе существующего REST API. Решена проблема n+1 запросов',
    stack: ['Node.JS', 'GraphQL'],
    linkDeploy: '',
    linkCode: 'https://github.com/UTYFjs/nodejs-task-graphql',
  },
];
