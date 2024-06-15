import styles from './tabs.module.scss';
import cn from 'classnames';
import { useState } from 'react';

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
};

export const Tabs = ({ tabs, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const containerClassNames = cn(styles['tabs-container'], className);

  return (
    <div className={containerClassNames}>
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

      <div className={styles['tab_content']}>{tabs[activeTab].content}</div>
    </div>
  );
};

Tabs.Item = ({ label, onClick, isActive }: TabItemProps) => (
  <div className={cn(styles.tab, isActive && styles.active)} onClick={onClick}>
    {label}
  </div>
);
