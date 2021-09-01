import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import dataFile from './components/data.json';
import SelectBeast from './components/SelectedBeast';
class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    data:dataFile,
    show:false,
    title:'',
    image_url:'',
    description:''
  }
}
handleShow=()=>{
  this.setState({
    show:true
  })
}
handleClose=()=>{
  this.setState({
    show:false
  })
}
updateSelectedData=(title,imageUrl,description)=>{
  this.setState({
    title:title,
    image_url:imageUrl,
    description:description
  })
}
  render() {
    return (
      <>
        <Header />
                <Main
                dataFile={dataFile}
                handleShow={this.handleShow}
                updateSelectedData={this.updateSelectedData}
                 
                />
                <SelectBeast
                show={this.state.show}
                title={this.state.title}
                image_url={this.state.image_url}
                description={this.state.description}
                handleClose={this.handleClose}
                />
        <Footer />
      </>
    );
  }
};
export default App;