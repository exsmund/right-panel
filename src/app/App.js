import './App.scss';
import Panel from '../panel/Panel';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <article className="App-body">
          <h1>Demo page</h1>
          <p>Right panel</p>
          <img src="/fry.png" alt="Fry" />
        </article>
        <Panel></Panel>
      </main>
    </div>
  );
}

export default App;
