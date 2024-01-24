import { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})

  const [name, setName] = useState('')
  const [alias, setAlias] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [propietario, setPropietario] = useState('')
  const [date, setDate] = useState('')
  const [duedate, setDuedate] = useState('')
  const [duration, setDuration] = useState('')

  const getProjects = () => {

  }

  useEffect(() => {
    getProjects()
  }, []);

  useEffect(() => {
    if (Object.keys(project).length === 0) return

    setProjects([...projects, project])
    setProject({})
  }, [project])


  return (
    <ProjectsContext.Provider
      value={{
        projects,
        project,
        setProject,
        name,
        setName,
        alias,
        setAlias,
        description,
        setDescription,
        tags,
        setTags,
        propietario,
        setPropietario,
        date,
        setDate,
        duedate,
        setDuedate,
        duration,
        setDuration
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export { ProjectsProvider }

export default ProjectsContext
