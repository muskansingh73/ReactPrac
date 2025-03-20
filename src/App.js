import './App.css';
// import Avatar from './Avatar';
// import PackingList from './PackingList';
import Counter from './States/Counter';
import Timer from './States/Timer';
function App() {
  
  return (
    <div className="App">
      {/* <Avatar 
      height = "100px"
      width = "100px"
      person = {{name:"Muskan Singh"}}       /> */}
      {/* <PackingList /> */}
      {/* <TodoTernary />
      <ButtonClikable /> */}

      <Timer />
      <Counter />
    </div>
  );
}

export default App;
