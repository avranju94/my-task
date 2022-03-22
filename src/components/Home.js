import React, {useState} from "react";
import { MultiSelect } from "react-multi-select-component";
import '../App.css';

const options = [
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Ember", value: "Ember", disabled: true },
  ];
  
  const Home = () => {
    const [selected, setSelected] = useState([]);
  
    return (
      <div className="container">
        <div className="app-wrapper">
            <h4 className="title" style={{paddingBottom: "10px"}}>Select from dropdown</h4> 
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            />
        </div>
      </div>
    );
  };
  
  export default Home;