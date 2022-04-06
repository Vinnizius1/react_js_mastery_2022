import "./App.css";

const Person = ({ name, lastName, age }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Last Name: {lastName}</h2>
      <h3>Age: {age}</h3>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name={"Pâmela"} lastName={"Regina"} age={33} />
      <Person name="Vinicius" lastName="Matos" age={37} />
    </div>
  );
};

export default App;
