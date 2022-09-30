import { useRef } from "react";
import Moveable from "react-moveable";

function App() {
  const ref = useRef();
  const moveableRef = useRef();
  return (
    <div className="App">
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        ref={ref}
        style={{
          height: "500px",
          width: "500px",
        }}
        alt=""
      ></img>
      <Moveable
        origin={false}
        ref={moveableRef}
        target={ref}
        draggable
        throttleDrag={0}
        resizable
        throttleResize={0}
        onDrag={({ target, left, top, dist, transform }) => {
          console.log("onDrag left, top", left, top);
          console.log("onDrag translate", dist);
          target.style.transform = transform;
        }}
        renderDirections={["nw", "ne", "se", "sw"]}
      />
    </div>
  );
}

export default App;
