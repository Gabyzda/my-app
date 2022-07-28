import logo from './logo.svg';
import './App.css';

import List from './components/list/List';

function App() {
  return (
    <div>
      <h2>Lista de compras Gaby</h2>
      <List
        fruta={'Fresa'}
        imagen={"data:image/jpeg;base64,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"} />
      <h2>Lista de compras Miguel</h2>
      <List fruta={'Piña'} />
    </div>
  );
}

export default App;
