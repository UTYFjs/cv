import { Tabs } from '~/components/tabs/tabs';
import { ReactProjectList } from '~/components/project-lists/react-project-list/react-project-list';
import { JsProjectList } from '~/components/project-lists/js-project-list/js-project-list';
import { NodeProjectList } from '~/components/project-lists/node-project-list/node-project-list';

export const ProjectsPage = () => {
  return (
    <>
      <Tabs
        tabs={[
          {
            label: 'React',
            content: <ReactProjectList />,
          },
          {
            label: 'JS, HTML, CSS',
            content: <JsProjectList />,
          },
          {
            label: 'Node.JS',
            content: <NodeProjectList />,
          },
        ]}
      />
    </>
  );
};
