import { useState } from 'react'
import useProjects from "../Hooks/useProjects"
import CardProyect from '../Components/CardProyect'

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import Modal from '../Components/Modal';

const Projects = () => {

  const { projects } = useProjects()



  return (
    <>

      <div className='relative h-screen'>
        <h1 className='text-red-200'>Todos Nuestros proyectos</h1>

        <div className='grid grid-cols-3 gap-4'>
          {
            projects.map(project => (
              <CardProyect
                key={project.id}
                project={project}
              />
            ))
          }
        </div>


        <Popover animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}>
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
          <div>

            <Modal  />

            <Button
              className='bg-red-200 m-2'
            >Guardar</Button>

            <Button
              className='bg-red-200 m-2'
            >Eliminar</Button>
          </div>
          </PopoverContent>
        </Popover>
      </div>


    </>
  )
}

export default Projects
