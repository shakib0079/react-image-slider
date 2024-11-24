/* eslint-disable react/prop-types */
const btn = {
    width: "100px",
    height: "40px",
    backgroundColor: "skyblue",
    color: "white",
    fontWeight: "Bold"
}

export default function Button({title,handler}) {
  return (
    <button style={btn} onClick={handler}>{title}</button>
  )
}
