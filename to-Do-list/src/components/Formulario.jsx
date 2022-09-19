import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


const Formulario = ({tareas, setTareas, editarTarea, setEditarTarea}) => {

  const [titulo, setTitulo] = useState("")
  const [fecha, setfecha] = useState("")
  const [descripcion, setdescripcion] = useState("")

  const [error, setError] = useState(false)



   useEffect(() => {
    if (Object.keys (editarTarea).length>0){
      setTitulo (editarTarea.titulo)
      setfecha (editarTarea.fecha)
      setdescripcion (editarTarea.descripcion)
    }
    
  }, [editarTarea]); 
  

  const generarId = () => {
    const id = Math.random().toString(20).substring(2)
    return id
  }
  

  const handleSumit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")){
      setError(true)
      setTimeout (()=>{setError(false)},2500)
      return;
    }
    setError(false);
    
    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    }

    if (editarTarea.id) {
//Editando tarea

objetoTareas.id = editarTarea.id;

const tareasActualizadas = tareas.map(tareaState => 
  tareaState.id === editarTarea.id ? objetoTareas : tareaState 
  );

  setTareas(tareasActualizadas);
  setEditarTarea({})

    }
    
    else {
// Nueva tarea
objetoTareas.id = generarId()
setTareas([...tareas, objetoTareas])

}

    setTitulo("");
    setfecha("");
    setdescripcion("");
    
  }

  return ( 

    
      <Row id='subtitulo'>
        
          <h2 >Crear tarea</h2>
          
          <form onSubmit={handleSumit}>

          <div id='subtit' className='crear d-flex flex-column text-start'>
          {error && (<p className='mensajeError'>Fatan datos por ingresar</p>)}
            <label className='m-2'>Título:</label>
              <input 
                id='tit'
                type="text"
                placeholder="Titulo de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
                value={titulo}
                onChange= {(e) => setTitulo(e.target.value)}
              />
            <label className='m-2'>Fecha:</label>
              <input 
                id="fecha"
                type="date"
                placeholder="Fecha de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
                value={fecha}
                onChange= {(e) => setfecha(e.target.value)}
              />            
            <label className='m-2'>Descripción:</label>
              <textarea 
                id="descripcion"
                type="text"
                placeholder="Descripción de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
                value={descripcion}
                onChange= {(e) => setdescripcion(e.target.value)}
              />
              {!editarTarea.id ? (
                <Button className='mt-3' variant="primary" type="submit">Crear tarea</Button>
              ):
              <Button className='mt-3' variant="warning" type="submit">Actualizar tarea</Button>
            }
          </div>
        </form>  
      </Row>

  )
}

export default Formulario





