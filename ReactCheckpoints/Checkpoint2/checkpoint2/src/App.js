import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Players</h1>
      </header>
      <main>
        <PlayersList />
      </main>
    </div>
  );
}

export default App;
