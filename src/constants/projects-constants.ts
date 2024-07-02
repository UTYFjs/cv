import { nanoid } from 'nanoid';

type FeatureType = {
  text: string;
  srcImg?: string;
};
export type SprintType = {
  name: string;
  features: FeatureType[];
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
    src: './image/cleverfit-vertical.jpg',
    shortDescription: 'Фитнес приложение',
    description: `Индивидуальный проект. 
      Выполнен в 7 спринтов c контролем через тестирование Cypress на каждом спринте. 
      Авторизация (JWT и OAuth через Google аккаунт).`,
    stack: ['TS', 'React', 'Redux Toolkit', 'Ant Design'],
    sprints: [
      {
        name: 'Главная страница',
        features: [
          {
            text: 'Главная страница c которой осуществляется переход на основные страницы приложения',
            srcImg: './image/cleverfit/main_1.jpg',
          },
          { text: 'Схлопывающееся боковое меню', srcImg: './image/cleverfit/main_2.jpg' },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Регистрация, авторизация, восстановление пароля',
        features: [
          { text: 'Регистрация (JWT token)', srcImg: './image/cleverfit/registration_1.jpg' },
          { text: 'OAuth через Google аккаунт', srcImg: './image/cleverfit/authorization_1.jpg' },
          { text: 'Авторизация', srcImg: './image/cleverfit/authorization_1.jpg' },
          { text: 'Восстановление пароля', srcImg: './image/cleverfit/recovery_password_1.jpg' },
          {
            text: 'Результирующие страницы отображающие ошибку запроса, либо успех, начинаются с относительного url: /result переход на эти страницы по прямой ссылке невозможен, при попытке перехода по прямой ссылке происходит редирект на страницу авторизации, на эти страницы можно попасть только по результатам запросов на сервер',
            srcImg: './image/cleverfit/recovery_password_3.jpg',
          },
          {
            text: 'Обработка ошибок запросов',
            srcImg: './image/cleverfit/change-pass-error-6.jpg',
          },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Просмотр и добавление отзывов на приложение',
        features: [
          { text: 'Страница отзывов', srcImg: './image/cleverfit/feedbacks_1.jpg' },
          { text: 'Просмотр и добавление отзывов на приложение', srcImg: './image/cleverfit/feedbacks_2.jpg' },
          {
            text: 'В случае успешности/неуспешности запроса о создании отзыва отображается модальное окно.',
            srcImg: './image/cleverfit/feedbacks_3.jpg',
          },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Календарь тренировок',
        features: [
          {
            text: 'Календарь тренировок, для отображения и редактирования информации о тренировках пользователя',
            srcImg: './image/cleverfit/calendar_1.jpg',
          },
          {
            text: 'Создание новой тренировки возможно только в будущем!! Пользователь жмет на ячейку в календаре - появляется модальное окно инициирующее начало создания новой тренировки. в день может быть только одна тренировка каждого типа.',
            srcImg: './image/cleverfit/calendar_2.jpg',
          },
          {
            text: 'В тренировку можно добавить сколько угодно упражнений, выбрать количество подходов, вес и количество повторений для сохранениии тренировки после добавления нужных упражнений нужно нажать кнопку "сохранить изменения".',
            srcImg: './image/cleverfit/calendar_4.jpg',
          },
          {
            text: 'Редактирование тренировки в прошлом возможно только один раз, в будущем - сколько угодно раз',
            srcImg: './image/cleverfit/calendar_6.jpg',
          },
          {
            text: 'Различия при работе с мобильным и полноформатным календарем',
            srcImg: './image/cleverfit/calendar_mobile.jpg',
          },
          {
            text: 'Обработка ошибок запросов',
            srcImg: './image/cleverfit/create-new-training-2.jpg',
          },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Профиль',
        features: [
          { text: 'Редактирование данных пользователя и смена тарифа', srcImg: './image/cleverfit/profile_1.jpg' },
          {
            text: 'Загрузка аватарки в профиле ( доступна загрузка только одной картинки, поменять картинку на другую сервер не дает), загрузка возможна только файлов меньше 5 МБ',
            srcImg: './image/cleverfit/profile_2.jpg',
          },
          { text: 'Если пользователь авторизован через OAuth - отображается аватарка google аккаунта', srcImg: '' },
          {
            text: 'В профиле можно поменять имя и фамилию, дату рождения, а так же сменить пароль',
            srcImg: './image/cleverfit/profile_3.jpg',
          },
          { text: 'После успешного изменения данных появляется Alert', srcImg: './image/cleverfit/profile_4.jpg' },
          {
            text: 'Страница настроек можно активировать PRO тариф, если он еще не активирован. активация тарифа происходит через письмо пришедщее на e-mail. после отправления запроса на смену тарифа происходит разлогин из приложения',
            srcImg: './image/cleverfit/profile_5.jpg',
          },
          {
            text: 'После перехода на новый тариф отправляется письмо на почту указанную при регистрации и происходит разлогин из приложения',
            srcImg: './image/cleverfit/profile_8.jpg',
          },
          { text: 'Eсли PRO тариф активирован в карточке отображается до какой даты он активирован', srcImg: '' },
          {
            text: 'Cо страницы настроек можно опубликовать отзыв о приложении(открывается модальное окно), а так же перейти на страницу с отзывами',
            srcImg: './image/cleverfit/profile_7.jpg',
          },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Страница тренировок',
        features: [
          {
            text: 'Тренировки пользователя с возможностью сортировки по периодичности',
            srcImg: './image/cleverfit/trainings_1.jpg',
          },
          {
            text: 'Можно создавать тренировки с периодичностью от ежедневных до одной тренировки в 7 дней. Такие тренировки создаются на 3 месяца вперед.',
            srcImg: '',
          },
          {
            text: 'Можно создавать совместные тренировки с другими пользователями, которые согласны на проведение таких тренировок',
            srcImg: '',
          },
          {
            text: 'Если вам пришло предложение на совместную тренировку, вы можете его принять, либо отклонить',
            srcImg: './image/cleverfit/trainings_2_partners.jpg',
          },
          {
            text: 'Имеется поиск по имени среди пользователей согласных на совместные тренировки',
            srcImg: './image/cleverfit/trainings_search.jpg',
          },
          {
            text: 'Для совместных тренировок можно выбирать пользователей у которых самая популярная тренировка имеет такой же тип как и ваша.',
            srcImg: '',
          },
          {
            text: 'Уже назначенные совместные тренировки можно отменять',
            srcImg: './image/cleverfit/trainings_3_partner-card.jpg',
          },
        ],
        linkTask: '',
        linkPR: '',
      },
      {
        name: 'Страница достижений',
        features: [
          {
            text: 'Cтраница содержит данные о средних нагрузках по днях недели за период (неделя/ месяц)',
            srcImg: './image/cleverfit/achievement_1.jpg',
          },
          {
            text: 'Содержит информацию о частых тренировках по дням недели  и за весь выбранный период(неделя/месяц)',
            srcImg: './image/cleverfit/achievement_2.jpg',
          },
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
    src: './image/superboards-vertical-1.jpg',
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
    src: './image/genuli-vertical.jpg',
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
    src: './image/virtual-keyboard-2.jpg',
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
    src: './image/shelter-2.jpg',
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
        features: [{ text: 'REST API endpoints (Пользователи, Артисты, Альбомы, Треки, Добавление в избранное)' }],
        linkTask: 'https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/rest-service/assignment.md',
        linkPR: 'https://github.com/UTYFjs/nodejs2023Q2-service/pull/1',
      },
      {
        name: '',
        features: [{ text: 'Контейнеризация' }, { text: 'Обращение к PostgreSQL через ORM Prisma' }],
        linkTask:
          'https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/containerization-database-orm/assignment.md',
        linkPR: 'https://github.com/UTYFjs/nodejs2023Q2-service/pull/2',
      },
      {
        name: '',
        features: [{ text: 'Аутентификация и авторизация' }, { text: 'Логирование' }, { text: 'Обработка ошибок' }],
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
