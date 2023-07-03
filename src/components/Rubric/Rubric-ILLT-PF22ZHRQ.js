
import './Rubric.css';


function Rubric(props) {

  console.log(props);
  return (
    <div  className="rubrika">
        <h2>Rubric: {props.rubricName}</h2>
        {props.children}
       
    </div>
  )
}

export default Rubric