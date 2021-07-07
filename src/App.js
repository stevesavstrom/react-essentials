import './App.css';

function Header (props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main (props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish, i) => (
          <li key = {i}>{dish}</li>))}
      </ul>
    </section>
  )
}

function Footer (props) {
  return (
    <footer>
      <h2>Copyright {props.year}</h2>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu and Vegetables",
  "Pizza",
  "Salad"
];

function App() {
  return (
    <div className="App">
      <Header name="Steve" />
      <Main adjective="amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
