import {
  AntDSvg,
  CSSModulesSvg,
  CSSSvg,
  DockerSvg,
  EslintSvg,
  FigmaSvg,
  GitSvg,
  GraphQLSvg,
  HTMLSvg,
  JSSvg,
  JestSvg,
  MUISvg,
  NPMSvg,
  NestJSSvg,
  NextJSSvg,
  NodeJSSvg,
  PlaywrightSvg,
  PrettierSvg,
  PrismaSvg,
  RTLSvg,
  ReactHookFormSvg,
  ReactRouterSvg,
  ReactSvg,
  ReduxSvg,
  RestSvg,
  SaSSSvg,
  StylelintSvg,
  TSSvg,
  VSCodeSvg,
  WebpackSvg,
  YarnSvg,
  ZustandSvg,
} from '~/components/custom-icons/CustomIcons';
import styles from './skills.module.scss';
import { SpringLogo } from '~/components/custom-icons/react-spring-logo/react-spring-logo';
import { SkillCard } from '~/components/skill-card/skill-card';
import { nanoid } from 'nanoid';
const cssWidthHeight = { width: 64, height: 64 };
const skills = [
  {
    icon: <JSSvg color="#fcc521" {...cssWidthHeight} />,
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: <TSSvg color="#3178c6" {...cssWidthHeight} />,
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    icon: <NextJSSvg {...cssWidthHeight} />,
    title: 'Next.js',
    link: 'https://nextjs.org/',
  },
  { icon: <ReactSvg color="#127ea4" {...cssWidthHeight} />, title: 'React', link: 'https://react.dev/' },
  {
    icon: <ReduxSvg {...cssWidthHeight} />,
    title: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org/',
  },
  {
    icon: <ZustandSvg {...cssWidthHeight} width={94} height={64} />,
    title: 'Zustand',
    link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  {
    icon: <NodeJSSvg {...cssWidthHeight} />,
    title: 'NodeJS',
    link: 'https://nodejs.org/en',
  },
  {
    icon: <NestJSSvg {...cssWidthHeight} />,
    title: 'NestJS',
    link: 'https://nestjs.com/',
  },
  {
    icon: <HTMLSvg {...cssWidthHeight} />,
    title: 'HTML',
    link: 'https://www.w3schools.com/html/default.asp',
  },
  {
    icon: <CSSSvg {...cssWidthHeight} />,
    title: 'CSS',
    link: 'https://www.w3schools.com/css/default.asp',
  },
  {
    icon: <SaSSSvg {...cssWidthHeight} />,
    title: 'SaSS',
    link: 'https://sass-lang.com/',
  },
  {
    icon: <CSSModulesSvg {...cssWidthHeight} />,
    title: 'CSS-modules',
    link: 'https://github.com/css-modules/css-modules',
  },
  {
    icon: <GitSvg {...cssWidthHeight} />,
    title: 'Git',
    link: 'https://git.github.io/git-scm.com/docs',
  },
  {
    icon: <ReactRouterSvg {...cssWidthHeight} />,
    title: 'React Router',
    link: 'https://reactrouter.com/en/main',
  },
  {
    icon: <ReactHookFormSvg {...cssWidthHeight} />,
    title: 'React Hook Form',
    link: 'https://react-hook-form.com/',
  },
  {
    icon: <PlaywrightSvg {...cssWidthHeight} />,
    title: 'Playwright E2E',
    link: 'https://playwright.dev/',
  },
  {
    icon: <JestSvg {...cssWidthHeight} />,
    title: 'Jest',
    link: 'https://jestjs.io/',
  },
  {
    icon: <RTLSvg {...cssWidthHeight} />,
    title: 'React Testing Liblary',
    link: 'https://testing-library.com/',
  },
  {
    icon: <FigmaSvg {...cssWidthHeight} />,
    title: 'Figma',
    link: 'https://www.figma.com/',
  },
  {
    icon: <AntDSvg {...cssWidthHeight} />,
    title: 'Ant Design',
    link: 'https://ant.design/',
  },
  {
    icon: <MUISvg {...cssWidthHeight} />,
    title: 'MUI',
    link: 'https://mui.com/',
  },
  {
    icon: <SpringLogo width={'64'} />,
    title: 'React Springs',
    link: 'https://react-spring.dev/',
  },
  {
    icon: <EslintSvg {...cssWidthHeight} />,
    title: 'Eslint',
    link: 'https://eslint.org/',
  },
  {
    icon: <StylelintSvg {...cssWidthHeight} />,
    title: 'Stylelint',
    link: 'https://stylelint.io/',
  },
  {
    icon: <PrettierSvg {...cssWidthHeight} />,
    title: 'Prettier',
    link: 'https://prettier.io/',
  },

  {
    icon: <RestSvg color={'#00b38e'} {...cssWidthHeight} />,
    title: 'Rest API',
    link: 'https://restfulapi.net/',
  },
  {
    icon: <GraphQLSvg {...cssWidthHeight} />,
    title: 'GraphQL',
    link: 'https://graphql.org/',
  },
  {
    icon: <PrismaSvg {...cssWidthHeight} />,
    title: 'ORM Prisma',
    link: 'https://www.prisma.io/',
  },

  {
    icon: <DockerSvg {...cssWidthHeight} />,
    title: 'Docker',
    link: 'https://www.docker.com/',
  },
  {
    icon: <WebpackSvg {...cssWidthHeight} />,
    title: 'Webpack',
    link: 'https://webpack.js.org/',
  },
  {
    icon: <NPMSvg {...cssWidthHeight} />,
    title: 'npm',
    link: 'https://www.npmjs.com/',
  },
  {
    icon: <YarnSvg {...cssWidthHeight} />,
    title: 'yarn',
    link: 'https://github.com/yarnpkg/yarn#readme',
  },

  {
    icon: <VSCodeSvg {...cssWidthHeight} />,
    title: 'VS Code',
    link: 'https://code.visualstudio.com/',
  },
];
export const Skills = () => {
  return (
    <>
      <p className={styles['page-title']}> Технологии и инструменты.</p>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <SkillCard key={nanoid()} icon={skill.icon} title={skill.title} link={skill.link} />
        ))}
      </div>
    </>
  );
};
