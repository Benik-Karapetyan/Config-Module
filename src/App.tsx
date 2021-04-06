import React from 'react';
import {Button, Input} from "antd";

const App = () => {
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    console.log('effect')
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> {input} and save to reload.
        </p>

        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <Button type="primary">
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;
