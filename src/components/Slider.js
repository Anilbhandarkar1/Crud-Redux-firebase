import { Slider } from 'antd';
import Select from 'react-select';
import React from react
 
 
 
 let data1 =  Object.keys(data1).map((id, index) => {
    return (
        data1[id].company
    );
  })
 
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = e => {
    setSelectedOption(e);
  }

              <div className="App">
 
      <Select
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data1} // set list of the data
        onChange={handleChange} // assign onChange function
      />
 
      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
      </div>}
    </div> 


export default Slider