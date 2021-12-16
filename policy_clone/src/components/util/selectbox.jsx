import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
function Inputselectbox({width,value1,value2,value3,label})
{

    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
      setAge(event.target.value);
    };


    return (
        <div>
            <FormControl sx={{ m: 0, minWidth: {width} }} >
        <InputLabel id="demo-simple-select-disabled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label={label}
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={value1}>{value1}</MenuItem>
          <MenuItem value={value2}>{value2}</MenuItem>
          <MenuItem value={value3}>{value3}</MenuItem>
        </Select>
        {/* <FormHelperText>Disabled</FormHelperText> */}
      </FormControl>

        </div>
    )
}

export {Inputselectbox}