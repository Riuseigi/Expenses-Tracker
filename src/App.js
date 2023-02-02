import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses =[
      {title: 'Car Insurance', amount: 294.67,  }
    ]
  return (
    <div className="App">
    
    <h2>Lets get started</h2>
   <ExpenseItem></ExpenseItem>
   <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
