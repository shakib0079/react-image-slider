 /* eslint-disable react/prop-types */
import { images } from "../assets/storage/storage";
 const imgStyle = {
    width: "100%",
    borderRadius: "10px"
 }

const imgDiv = {
    width: "600px",
    transition: "transform 0.5s ease-in-out",
}

export default function ImageSlider({imageID}) {
    const imgFill = images.filter((image) => image.id === imageID)
  return (
        <div style={imgDiv}>
            {imgFill.map((data) => <img key={data.id}src={data.image_url} style={imgStyle} alt="" />)}
        </div>
  )
}
