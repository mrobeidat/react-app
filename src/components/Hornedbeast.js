import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class Hornedbeast extends React.Component{

constructor(props){

  super(props);
  this.state={NumberOfClicks : 0
  }
}

incrementOfClicks=()=>{

  this.setState
  ({NumberOfClicks :this.state.NumberOfClicks +1})
}

render(){
  return(
  
<>

<Card style={{ width: '18rem', display:"inline-block", margin:"30px"}}>
  <Card.Img variant="top" src= {this.props.imgUrl} onClick ={this.incrementOfClicks} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
<p>Number of clicks 😸: {this.state.NumberOfClicks}</p>
<p>{this.props.description}</p>
<p>{this.props.keyword}</p>
    </Card.Text>
    <Button variant="primary" onClick={this.incrementOfClicks}>click to view</Button>
  </Card.Body>
</Card>
</>

  );
}

}
export default Hornedbeast;