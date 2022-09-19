import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Tareas from './Tareas';

const Tasks = ({tareas, setEditarTarea, eliminarTarea}) => {

  return (
    <Container className='text-center md:h-screen' id='proceso'>  
     
      <Row id='subtitulo'>
          <h2>Mis tareas pendientes</h2>
          <div  className='Tareas'>
            <div className='interno'> 

            {tareas.map((tarea) =>{
              return(
                <Tareas
                key={tarea.id}
                tarea={tarea}
                setEditarTarea={setEditarTarea}
                eliminarTarea={eliminarTarea}
                />
              )
            })} 
            
            </div>
          </div>
        </Row>
       
    </Container>
  )
}

export default Tasks