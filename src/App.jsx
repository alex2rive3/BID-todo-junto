import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard Name={"Jane"} LastName= {"Doe"} Age={45} HairColor={"Black"} />

      <PersonCard Name={"Jhon"} LastName= {"Smith"} Age={88} HairColor={"Brown"} />
      <PersonCard Name={"Millard"} LastName= {"Fillmore"} Age={50} HairColor={"Brown"} />
      <PersonCard Name={"Maria"} LastName= {"Smith"} Age={62} HairColor={"Brown"} />
    </div>
  );
}

export default App;
