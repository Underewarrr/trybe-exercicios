import './App.css';




function Button1() {
  console.log('Button1')
}

function Button2() {
  console.log('Button2')
}

function Button3() {
  console.log('Button3')
}

function App() {
  return (
   <>
   <button onClick={Button1} id="1">Button 1</button>
   <button onClick={Button2} id="2">Button 2</button>
   <button onClick={Button3} id="3">Button 3</button>
   </>
  );
}

export default App;
