

import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tasks from './components/Tasks'




function App() {
  

  return (

    <div>
      <Header/>
      <Container className='text-center' id='proceso'>
        <Row>
          <Col sm={6}> 
            <Formulario/>
          </Col>
          <Col sm={6}> 
            <Tasks/>
          </Col>
        </Row>
      </Container>
      
      
      
    
    </div>


  
 

   
    

    
  )
}

export default App
