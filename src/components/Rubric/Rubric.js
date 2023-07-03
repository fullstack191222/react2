
import './Rubric.css';


function Rubric({children}) {

 
  return (
    <div  className="rubrika">
        <h2>Rubric: </h2>
        {children}
    </div>
  )
}

export default Rubric