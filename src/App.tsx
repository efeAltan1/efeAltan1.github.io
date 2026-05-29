import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from '@/context/LangContext'
import Home from '@/pages/Home'

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
