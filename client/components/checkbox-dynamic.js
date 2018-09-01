import React from 'react';
import AddCheckBox from './add-checkbox';
const CheckboxDynamic=(props)=>{
  let box=[];
  for(let i=0;i<props.loop;i++)
  {
    box.push(<AddCheckBox loop={i} checkboxText={props.checkboxText} handleChange={props.handleChange}/>);
  }
  return box;
}
export default CheckboxDynamic;
