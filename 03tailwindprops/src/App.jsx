import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-white bg-yellow-700 p-10 rounded-2xl w-auto mb-10">
        TAILWIND TEST
      </h1>
      <Card username="Sameer" btnTxt="visit" />
      <Card username="ABC" btnTxt="aaja" />
    </>
  );
}

export default App;
