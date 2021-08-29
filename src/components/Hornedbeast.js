import React from 'react';
import './Hornedbeast.css';
class Hornedbeast extends React.Component{

render(){
  return(
<>
<fieldset style={{borderColor:"red"}}>
<div>
<h2 style={{color: "red"}}>UniWhal </h2>
<br/>
<img src={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} width='500px' height='500px' />

<p>A unicorn and a narwhal nuzzling their horns</p>
</div>
</fieldset>
<br></br>

<fieldset style={{borderColor:"red"}}>
<h2 style={{color: "red"}}>Rhino Family</h2>
<br/>
<img src={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} width='500px' height='500px' />
<p>Mother (or father) rhino with two babies</p>
</fieldset>
<br></br>

<fieldset style={{borderColor:"red"}}>
<h2 style={{color: "red"}}>Unicorn Head</h2>
<br/>
<img src={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'} width='500px' height='500px' />

<p>Someone wearing a creepy unicorn head mask</p>
</fieldset>
<br></br>
</>

  );
}

}
export default Hornedbeast;