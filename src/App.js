
import './App.css';
// var title = "training";
const obj={
  name:"kavya",
  year:function(props){
    return props.date;
  }
}

function App(props) {
  const con= ()=>{
    console.log(props.name + " button click");
  }
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <button onClick={con}>Button</button>
     <h1>{obj.name}</h1>
    </div>
  
  );
}



export default App;
