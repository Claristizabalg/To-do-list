

import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tasks from './components/Tasks'




function App() {
  
  const [tareas, setTareas] = useState([])
  const [editarTarea, setEditarTarea] = useState([])

  const eliminarTarea = (id) =>{

    const actuliazarTarea = tareas.filter((tarea) => tarea.id !== id);

    setTareas(actuliazarTarea);
  }

  return (

    <div>
      <Header/>
      <Container className='text-center' id='proceso'>
        <Row>
          <Col sm={6}> 
            <Formulario
            editarTarea={editarTarea}
            tareas={tareas}
            setTareas={setTareas}
            setEditarTarea={setEditarTarea}

            />
          </Col>
          <Col sm={6}> 
            <Tasks
            tareas={tareas}
            setEditarTarea={setEditarTarea}
            eliminarTarea={eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
      
      
      
    
    </div>


  
 

   
    

    
  )
}

export default App
