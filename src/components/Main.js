import React from 'react';
import Div from './Hornedbeast'
import img from './hornedbeast.json'


class Main extends React.Component{

constructor (props){

  super(props);
  this.state={
    
  }
}

render(){
  console.log(this.props);
  return(
<>
 
{img.map((item,index) => {

return(
<Div 
key={index}
title= {item.title} 
imgUrl={item.image_url}
description={item.description}
keyword={item.keyword}
/>
  )
})

}


</>

  );
}

}
export default Main;