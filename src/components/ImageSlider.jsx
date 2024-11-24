 /* eslint-disable react/prop-types */
 
 const imgStyle = {
    width: "100%",
    borderRadius: "10px"
 }

const imgDiv = {
    width: "800px",
    transition: "transform 0.5s ease-in-out",
}

export default function ImageSlider({id, image_url}) {
  return (
        <div style={imgDiv}>
            <img key={id}src={image_url} style={imgStyle} alt="" />
        </div>
  )
}
