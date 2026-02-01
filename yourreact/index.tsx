import { React } from "./customreactlib/react";
import { createRoot } from "./customreactlib/react-dom";

const count = 0;
const setCount = (c) => { c(count);}

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Custom React</h1>
      <p>Count: {count}</p>
      <button onclick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App/>);