import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/hornedbeast.json'
import Button from 'Button';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
    images: Data
    }
  }
render(){
  return(

<>
<Header/>
<Main hornedData={this.state.images}/>
<Footer/>
</>

  );
}

}
export default App;

function Modal (){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.Data}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
)
}