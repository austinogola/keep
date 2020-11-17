import './App.css';
import Notes from './components/Notes'
import Header from './components/Header'
// import Side from './components/Side'
import AddNote from './components/AddNote'

function App() {
  return (
    <div className="App">
      <Header/>
      <AddNote/>
      <Notes/>
    </div>
  );
}

export default App;
