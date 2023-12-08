import './styles/reset.css';
import './styles/index.css';
import { ReactFlowProvider } from 'reactflow';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { FamilyTreePage } from '@/pages/FamilyTree';
import { themeConfig } from '@/global/configs/themeConfig.ts';

library.add(faHeart, faPlus, faUser);

function App() {
  return (
    <ConfigProvider theme={themeConfig} locale={ruRU}>
      <ReactFlowProvider>
        <FamilyTreePage />
      </ReactFlowProvider>
    </ConfigProvider>
  );
}

export default App;
