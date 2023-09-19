import "./App.scss";
import Gallery from "../Gallery/Gallery";

function App(props) {
  
  return (
    <div className="container">
      <Gallery photos={props.photos} />
    </div>
  );
}

export default App;
