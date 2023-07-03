// import './Item.css'


// function Item(props) {
//     return(
//         <div className="property-card">
//       <img src={props.photo}
//        alt="property" className="property-photo" />
//       <div className="property-details">
//         <div className="property-city">{props.city}</div>
//         <div className="property-price">{props.price}</div>
//       </div>
//     </div>

//     )
// }

// export default Item;
import DateComponent from "../DateComponent/DateComponent"


export default function Item(props) {
  const checkStock = () => {
    if (props.quantity && props.quantity > 0) {
      return "In Stock:" +props.quantity
    } else {
      return "Not in Stock"
    }
  }
  return (
    <div >
      <div >
        <img src={props.picture} style =  {{width: 300,height: 200 }}/>
      </div>
      <div>
        {props.description}
      </div>
      <div>
        {props.price}
      </div>
      <div>
         {(props.quantity && props.quantity > 0) ? "In Stock:" + props.quantity : "Not in Stock"}
      </div>
      <DateComponent date = {props.date}>

      </DateComponent>
    </div>
  )
}

Item.defaultProps = {
  picture: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
  description: "default description",
  price: "free",
};




