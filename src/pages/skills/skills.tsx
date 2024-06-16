import {
  CSSModulesSvg,
  CSSSvg,
  EslintSvg,
  GitSvg,
  GraphQLSvg,
  HTMLSvg,
  JSSvg,
  Jest2Svg,
  JestSvg,
  NPMSvg,
  NestJSSvg,
  PrettierSvg,
  ReactRouterSvg,
  ReactSpringsSvg,
  ReactSvg,
  ReduxSvg,
  RestAPISvg,
  SaSSSvg,
  StylelintSvg,
  TSSvg,
} from '~/components/custom-icons/CustomIcons';
import styles from './skills.module.scss';
import { SpringLogo } from '~/components/custom-icons/react-spring-logo/react-spring-logo';
export const Skills = () => {
  const cssWidthHeight = { width: 64, height: 64 };
  return (
    <>
      <p className={styles['page-title']}> Технологии которые я использовал последнее время</p>
      <div className={styles.grid}>
        <ReactSvg {...cssWidthHeight} />
        <JSSvg color="yellow" {...cssWidthHeight} />
        <TSSvg color="#3178c6" {...cssWidthHeight} />
        <ReduxSvg {...cssWidthHeight} />
        <NestJSSvg {...cssWidthHeight} />
        <HTMLSvg {...cssWidthHeight} />
        <CSSSvg {...cssWidthHeight} />
        <SaSSSvg {...cssWidthHeight} />
        <CSSModulesSvg {...cssWidthHeight} />
        <GitSvg {...cssWidthHeight} />
        <JestSvg {...cssWidthHeight} />
        <Jest2Svg {...cssWidthHeight} />
        <EslintSvg {...cssWidthHeight} />
        <StylelintSvg {...cssWidthHeight} />
        <PrettierSvg {...cssWidthHeight} />
        <ReactRouterSvg {...cssWidthHeight} />
        <ReactSpringsSvg {...cssWidthHeight} />
        <SpringLogo width={'64'} />
        <GraphQLSvg {...cssWidthHeight} />
        <NPMSvg {...cssWidthHeight} />
      </div>
    </>
  );
};
