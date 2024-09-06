import MakeupFront from "../MakeupFront/MakeupFront";
import MakeupBack from "../MakeupBack/MakeupBack";

type MakeupProductProps = {
  veganMakeupData: object[],
  crueltyFreeMakeupData:object[]
}

const MakeupProduct = ({veganMakeupData,crueltyFreeMakeupData}:MakeupProductProps) => {
  return (
    <article>
       <MakeupFront/>
       <MakeupBack/> 
    </article>
  )
}

export default MakeupProduct