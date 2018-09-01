import React from 'react';
import {Checkbox,FormControl} from 'react-bootstrap';
 const AddCheckBox=(props)=>{
return (
  <div>
  <Checkbox inline>
    <FormControl
      type="text"
      value={
        props.checkboxText[props.loop].text === " "
          ? "Option "+(props.loop+1)
          : props.checkboxText[props.loop].text
      }
      placeholder={"Option"+(props.loop+1)}
      onChange={(e)=>props.handleChange(e,props.loop)}
      key={props.loop}
    />
  </Checkbox>
<br></br>
  </div>
)
};
export default AddCheckBox;
