import React from 'react';
import './Hornedbeast.css';
class Hornedbeast extends React.Component{

render(){
  return(
  
<>
<h2>{this.props.title}</h2>
<img src={this.props.imgUrl} title={this.props.title}/>
<p>{this.props.discription}</p>
</>

  );
}

}
export default Hornedbeast;