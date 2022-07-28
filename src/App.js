import logo from './logo.svg';
import './App.css';

import List from './components/list/List';

function App() {
  return (
    <div>
      <h2>Lista de compras Gaby</h2>
      <List
        fruta={'Fresa'}
        imagen={"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800/public/2022-04/fresas%C2%A9iStock.jpg.webp?itok=Qr6qTdXj"} />
      <h2>Lista de compras Miguel</h2>
      <List
        fruta={'Piña'}
        imagen={"https://okdiario.com/img/vida-sana/2015/02/beneficios-de-la-pina-en-la-dieta.jpg"} />
    </div>
  );
}

export default App;
