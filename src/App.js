import './App.css';
// import Avatar from './Avatar';
// import PackingList from './PackingList';
import ButtonClikable from './EventHandling/ButtonClickable';
import TodoTernary from './ToDoTernary';
function App() {
  
  return (
    <div className="App">
      {/* <Avatar 
      height = "100px"
      width = "100px"
      person = {{name:"Muskan Singh"}}       /> */}
      {/* <PackingList /> */}
      <TodoTernary />
      <ButtonClikable />
    </div>
  );
}

export default App;
