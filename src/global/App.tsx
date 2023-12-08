import './styles/reset.css';
import './styles/index.css';
import { NextUIProvider } from '@nextui-org/react';
import { ReactFlowProvider } from 'reactflow';
import { FamilyTreePage } from '@/pages/FamilyTree';

function App() {
  return (
    <NextUIProvider>
      <ReactFlowProvider>
        <FamilyTreePage />
      </ReactFlowProvider>
    </NextUIProvider>
  );
}

export default App;
