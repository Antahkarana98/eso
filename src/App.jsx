import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProjectsProvider } from "./Context/ProjectsProvider"

import MainLayout from "./Layouts/MainLayout"
import Projects from "./Pages/Projects"
import Project from "./Pages/Project"

function App() {



  return (
    <>
      <ProjectsProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProjectsProvider>
    </>
  )
}

export default App
