import './App.css'
import Button from './components/Button'
import { images } from './assets/storage/storage'
import ImageSlider from './components/ImageSlider'
import { useState } from 'react'
const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}
const buttonDiv = {
  display: "flex",
  gap: "10px",
}





function App() {

  let [image, setImage] = useState(1);

  function increament(){
    if(image < images.length){
      setImage(image + 1)
    }else{
      setImage(image = 1);
    }
  }
  
  function decrement(){
    if(image > 1){
      setImage(image - 1)
    }else{
      setImage(image = images.length);
    }
  }

  return (
    <>  
      <div style={divStyle}>
        <ImageSlider imageID={image} />
        <div style={buttonDiv}>
          <Button title="<Previous" handler={decrement}/>
          <Button title="Next>" handler={increament}/>
        </div>
      </div>
        
    </>
  )
}

export default App
