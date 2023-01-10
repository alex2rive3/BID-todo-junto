import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard name={"Jane"} LastName= {"Doe"} Age={45} hair={"Black"} />
      <PersonCard name={"Jhon"} LastName= {"Smith"} Age={88} hair={"Brown"} />
      <PersonCard name={"Millard"} LastName= {"Fillmore"} Age={50} hair={"Brown"} />
      <PersonCard name={"Maria"} LastName= {"Smith"} Age={62} hair={"Brown"} />
    </div>
  );
}

export default App;
