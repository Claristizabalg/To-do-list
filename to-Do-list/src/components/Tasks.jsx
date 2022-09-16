import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const Tasks = () => {
  return (
    <Container className='text-center' id='proceso'>    
      <Row id='subtitulo'>
          <h2>Mis tareas pendientes</h2>
          <div id='subtit' className='crear d-flex flex-column text-start'>
            <label>Título:</label>
            
            <label>Fecha:</label>
            <label>Descripción:</label>
          </div>
        </Row>
    </Container>
  )
}

export default Tasks