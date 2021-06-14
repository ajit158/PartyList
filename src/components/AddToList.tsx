import React, { useState } from "react";
import {Istate as Props} from '../App'

interface Iprop {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<Iprop> = ({people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,

        })
  }

  const handleClick = () => {
      if(!input.name || !input.age || !input.img){
          return
      }

      setPeople([
          ...people,
          {
              name:input.name,
              age: parseInt(input.age),
              url:input.img,
              note: input.note
          }
      ])

      setInput({
        name: "",
        age: "",
        note: "",
        img: "",
      })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Input Name"
        className="AddToList-input"
        onChange={handleChange}
        value={input.name}
        name="name"
      />
      <input
        type="text"
        placeholder="Input Age"
        name="age"
        className="AddToList-input"
        onChange={handleChange}
        value={input.age}
      />
      <input
        type="text"
        name="img"
        placeholder="Input Image Url"
        className="AddToList-input"
        onChange={handleChange}
        value={input.img}
      />
      <textarea
        placeholder="Input Name"
        name="note"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
      />
      <button className="AddToList-btn" onClick={handleClick}>Add To List</button>
    </div>
  );
};

export default AddToList;
