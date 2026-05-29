import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from '@/context/LangContext'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
