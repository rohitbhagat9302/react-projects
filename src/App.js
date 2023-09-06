import {useState} from 'react'
function App() {
  // let counter = 10;
  let [counter, setcounter] = useState(10);
  let addvalue = ()=>{
    setcounter(counter + 1)
    if(counter>=20){
      setcounter(counter)
    }
  }
  let removevalue = ()=>{
    setcounter(counter - 1)
    if(counter<=0){
      setcounter(counter)
    }
  }

  return (
<>
  <h1>Chai aur React</h1>
  <h2>Original Value of Counter is: {counter}</h2>
  <button onClick={addvalue} >Increase </button>
  <div></div>
  <button onClick={removevalue}>Decrease </button>
</>
  );
}

export default App;
