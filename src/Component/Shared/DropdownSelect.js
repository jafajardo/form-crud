import React from 'react';
import { Label, Input } from 'reactstrap';

const DropdownSelect = ({ name, label, options }) => {
  return (
    <>
      <Label for={name}>{label}</Label>
      <Input type='select' id={name} name={name}>
        {options.map(({label,value}) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </Input>
    </>
  )
}

export default DropdownSelect;
