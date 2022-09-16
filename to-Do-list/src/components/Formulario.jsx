import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const Formulario = () => {
  return ( 
      <Row id='subtitulo'>
        
          <h2>Crear tarea</h2>
          <div id='subtit' className='crear d-flex flex-column text-start'>
            <label className='m-2'>Título:</label>
              <input 
                id='tit'
                type="text"
                placeholder="Titulo de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
              />
            <label className='m-2'>Fecha:</label>
              <input 
                id="fecha"
                type="date"
                placeholder="Fecha de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
              />            
            <label className='m-2'>Descripción:</label>
              <textarea 
                id="descripcion"
                type="text"
                placeholder="Descripción de la tarea"
                className="border-2 w-full p-2 rounded-md placeholder-gray-400"
              />
              <Button className='mt-3' variant="primary" type="submit">Submit</Button>
          </div>
      </Row>

  )
}

export default Formulario





