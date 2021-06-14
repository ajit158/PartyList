import './App.css';
import {useState} from 'react';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  people: {
    
    name: string,
    age:number,
    url: string,
    note?:string
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: 'Ajit',
      age:25,
      url:"",
      note:"Software Engineer"
    }
  ]);

  return (
    <div className="App">
      <h1>ADD Contacts to your Notes</h1>
      <List people={people} setPeople={setPeople}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
