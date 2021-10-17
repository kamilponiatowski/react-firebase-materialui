import {useState} from "react";
import Counter from "./Counter";

const App= () => {
   const [welcome, setWelcome] = useState('Hellow World')
  return (
    <div className="App">
        { welcome }
        <Counter/>
    </div>
  );
}

export default App;
