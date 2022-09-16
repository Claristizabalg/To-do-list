import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap'

const Formulario = () => {
  return (
    <Container className='text-center' id='proceso'>    
      <Row id='subtitulo'>
        <Col sm={6}>
          <h2>Crear tarea</h2>
          <div id='subtit' className='crear d-flex flex-column text-start'>
            <label>Título:</label>
            <label>Fecha:</label>
            <label>Descripción:</label>
          </div>
        </Col>
        <Col sm={6}>
          <h2>Mis tareas pendientes</h2>
          <div id='subtit' className='crear d-flex flex-column text-start'>
            <label>Título:</label>
            <label>Fecha:</label>
            <label>Descripción:</label>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Formulario





