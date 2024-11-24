/* eslint-disable react/prop-types */
const btn = {
    width: "100px",
    height: "40px"
}

export default function Button({title,handler}) {
  return (
    <button style={btn} onClick={handler}>{title}</button>
  )
}
