import React from 'react';
import Div from './Hornedbeast'
import img from './hornedbeast.json'
class Main extends React.Component{

render(){
  return(
<>

{img.map((item) => {

return(
<Div 
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