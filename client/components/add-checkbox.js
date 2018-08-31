import React from 'react';
import {Checkbox,FormControl} from 'react-bootstrap';
export default const Add_CheckBox=()=>{
return (
  <Checkbox inline>
    <FormControl
      type="text"
      value={
        this.state.checkboxText3 === " "
          ? "Option 3"
          : this.state.checkboxText3
      }
      placeholder="Option 3"
      onChange={(e)=>this.handleChange(e,'checkboxText3')}
    />
  </Checkbox>
)
};
