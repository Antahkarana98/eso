import { useState } from 'react'
import useProjects from '../Hooks/useProjects'
import TagForm from './TagForm'

const Modal = () => {

  const { setProject, name, setName, alias,
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
    setDuration } = useProjects()


  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'alias':
        setAlias(value)
        break;
      case 'description':
        setDescription(value)
        break;
      case 'tags':
        setTags(value)
        break;
      case 'propietario':
        setPropietario(value)
        break;
      case 'date':
        setDate(value)
        break;
      case 'duedate':
        setDuedate(value)
        break;
      case 'duration':
        setDuration(value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)

    const newProject = {
      id : Date.now(),
      name,
      alias,
      description,
      tags,
      propietario,
      date,
      duedate,
      duration
    }

    setProject(newProject)

    setName('')
    setAlias('')
    setDescription('')
    setTags([])
    setPropietario('')
    setDate('')
    setDuedate('')
    setDuration('')
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type='button'
        className="bg-orange-500 text-white ms-5 py-1 px-3 rounded-lg font-bold shadow-lg hover:bg-orange-600"
      >
        Nuevo Proyecto
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar Nuevo Proyecto
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-5xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre Clave:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nombre Clave"
                        onChange={handleChange}
                        value={name}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alias">
                        Alias:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="alias"
                        type="text"
                        name="alias"
                        placeholder="Alias"
                        onChange={handleChange}
                        value={alias}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                        Tags:
                      </label>
                      <TagForm

                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Descripción:
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                        id="description"
                        type="text"
                        name="description"
                        placeholder="Descripción del proyecto"
                        onChange={handleChange}
                        value={description}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor='propietario' className="block text-gray-700 text-sm font-bold mb-2">Propietario</label>
                      <select id='propietario'
                        onChange={handleChange}
                        value={propietario}
                        name='propietario'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>-- Seleccione Propietario --</option>
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor='date' className="block text-gray-700 text-sm font-bold mb-2">Fecha de inicio</label>

                      <input
                        type="date"
                        id='date'
                        onChange={handleChange}
                        value={date}
                        name='date'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor='date' className="block text-gray-700 text-sm font-bold mb-2">Fecha de fin</label>

                      <input
                        type="date"
                        id='duedate'
                        onChange={handleChange}
                        value={duedate}
                        name='duedate'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor='duration' className="block text-gray-700 text-sm font-bold mb-2">Duración:</label>

                      <input
                        type="number"
                        placeholder="Duración"
                        id='duration'
                        onChange={handleChange}
                        value={duration}
                        name='duration'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Agregar Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
