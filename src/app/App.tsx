import { FamilyTree } from '@/pages/FamilyTree'
import './styles/index.css'
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <FamilyTree />
    </NextUIProvider>
  )
}

export default App
