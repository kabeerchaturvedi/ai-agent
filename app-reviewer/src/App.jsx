import "./App.css";
import Editor from "./components/Editor";
import Review from "./components/Review";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden ">
      <Editor />
      <Review />
    </div>
  );
}

export default App;
