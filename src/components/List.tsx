import React from "react";
import { Istate as Iprops } from "../App";

interface props {
  people: Iprops["people"];
  setPeople: React.Dispatch<React.SetStateAction<Iprops["people"]>>;
}

const List: React.FC<props> = ({ people, setPeople }) => {
  
  
  

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt={person.name} className="List-img" />
            <h3>{person.name}</h3>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
          <button  value={person.id}>Delete</button>
        </li>
      );
    });
  };
  return (
    <div>
      <h3>{renderList()}</h3>
    </div>
  );
};

export default List;
