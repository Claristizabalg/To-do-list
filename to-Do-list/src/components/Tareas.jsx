import React from 'react'
import Button from 'react-bootstrap/Button';

const Tareas = ({tarea, setEditarTarea, eliminarTarea}) => {

  const {titulo, fecha, descripcion, id}=tarea
  return (
    <div id='subtit' className='crear d-flex flex-column text-start mt-3'>
            <p>Título: <span id='contenido'>{titulo}</span>
            </p>
            <p>Fecha: <span id='contenido'>{fecha}</span></p>
            <p>Descripción: <span id='contenido'>{descripcion}</span> </p>
            <div>
              <Button variant="success"
              onClick={()=> setEditarTarea(tarea)}
              >Editar</Button>{' '}
              <Button variant="danger"
              onClick={()=> eliminarTarea(id)}
              >Eliminar</Button>{' '}
          </div>
          </div>
          
          
  )
}


export default Tareas