import React from "react";
import Renderer from "./components/Renderer";
import useConfigValidation from "./hooks/configValidation";

const sampleJson = {
  layout: {
    columns: 12,
    rowHeight: 50,
  },
  components: [
    {
      id: "button1",
      type: "button",
      x: 0,
      y: 0,
      width: 3,
      height: 1,
      properties: {
        label: "Run Workflow 1",
        action: "workflow_1",
      },
    },
    {
      id: "button2",
      type: "button",
      x: 3,
      y: 0,
      width: 3,
      height: 1,
      properties: {
        label: "Run Workflow 2",
        action: "workflow_2",
      },
    },
    {
      id: "image1",
      type: "image",
      x: 0,
      y: 1,
      width: 6,
      height: 4,
      properties: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEFaQ92LFAvxI9_JelfRmrf6sjCf8bmFJZA&s",
        alt: "Workflow Output",
      },
    },
  ],
};

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
