import { FamilyTreePage } from '@/pages/FamilyTree'
import './styles/index.css'
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <FamilyTreePage />
    </NextUIProvider>
  )
}

export default App
