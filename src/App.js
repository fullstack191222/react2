import logo from './logo.svg';
import './App.css';
import Item from './components/Item/Item';
import Rubric from './components/Rubric/Rubric';
// function App() {
//   return (
//     // <div className="App">
//     //   <Item photo="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
//     //     city="Athens"
//     //     price="$200 per night"></Item>
      
//     //   <Item photo="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg"
//     //     city="New York City"
//     //     price="$500 per night"></Item>
//     //   <Item photo="https://www.bankrate.com/2022/04/14092711/what-is-tangible-personal-property.jpg"
//     //     city="Toronto"
//     //     price="$100 per night"></Item>
//     // </div>
    
    
//   );
// }
const itemsDB = [{date:"10/12/2022", quantity: 10, description : "LG TV 65inch",price : "500$", picture :"https://www.cnet.com/a/img/resize/209b985549508798cc16e8022ff79b8ce5ce2bc8/hub/2022/10/18/b643bc41-614e-4a5e-acaa-649281580f68/tcl-6-series-tv-r6-2022-6396.jpg?auto=webp&fit=crop&height=675&width=1200"}]


function App() {
  return (
    <div className="App">
      <Rubric rubricName="TV">
        <Item description = {itemsDB[0].description}
              price = {itemsDB[0].price}
              picture = {itemsDB[0].picture} 
              quantity = {itemsDB[0].quantity}
              date = {itemsDB[0].date}></Item>
        <Item ></Item>
      </Rubric>
      <Rubric rubricName="Default items">
        <Item ></Item>
        <Item ></Item>
      </Rubric>
     </div>
  );
}

export default App;
