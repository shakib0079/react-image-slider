import './App.css'
import Button from './components/Button'
import { images } from './assets/storage/storage'
import ImageSlider from './components/ImageSlider'
import { useState } from 'react'
const divStyle = {
  display: "flex",
  gap: "30px",
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
    (image < images.length) ? setImage(image + 1) : setImage(image = 1);
  }
  
  function decrement(){
    (image > 1) ? setImage(image - 1) : setImage(image = images.length);
  }

  const img = images.filter((img) => img.id === image)

  return (
    <>  
      <div style={divStyle}>
        <h1>React Image Slider</h1>
        <ImageSlider {...img[0]}/>
        <div style={buttonDiv}>
          <Button title="<Previous" handler={decrement}/>
          <Button title="Next>" handler={increament}/>
        </div>
      </div>
        
    </>
  )
}

export default App
