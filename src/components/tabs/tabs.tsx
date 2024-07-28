import styles from './tabs.module.scss';
import cn from 'classnames';
import { CSSProperties, useState } from 'react';
import { useWindowWidth } from '~/hooks/use-window-width';

type TabItemProps = {
  isActive: boolean;
  label: string;
  onClick: () => void;
};
type TabItem = {
  label: string;
  content: JSX.Element;
};
type TabsProps = {
  tabs: TabItem[];
  className?: string;
  tabContainerStyle?: CSSProperties;
};

export const Tabs = ({ tabs, className, tabContainerStyle }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useWindowWidth();
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const containerClassNames = cn(styles['tabs-container'], className);

  return (
    <div className={containerClassNames} style={tabContainerStyle}>
      <div className={styles.tabs}>
        {' '}
        {tabs.map((tab, index) => (
          <Tabs.Item
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>

      <div className={cn(styles['tab_content'], isMobile && styles.mobile)}>{tabs[activeTab].content}</div>
    </div>
  );
};

Tabs.Item = ({ label, onClick, isActive }: TabItemProps) => {
  return (
    <div className={cn(styles.tab, isActive && styles.active)} onClick={onClick}>
      {label}
    </div>
  );
};
