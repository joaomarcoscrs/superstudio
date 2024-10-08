import React from "react";
import Renderer from "./components/Renderer";
import useConfigValidation from "./hooks/configValidation";
import sampleJson from "./examples/sample.json";

function App() {
  const { isValid } = useConfigValidation(sampleJson);

  return (
    <div className="App">
      {isValid ? (
        <Renderer config={sampleJson} />
      ) : (
        <div>Invalid layout configuration</div>
      )}
    </div>
  );
}

export default App;
