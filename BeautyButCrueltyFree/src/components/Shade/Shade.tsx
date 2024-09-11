import "./Shade.scss"

interface ShadeProps{
  color:string
}

const Shade:React.FC<ShadeProps> = ({color}) => {
  return (
    <div className="shade" style={{backgroundColor: color}}></div>
  )
}

export default Shade