import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
function Inputselectbox({width})
{

    const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
      setAge(event.target.value);
    };


    return (
        <div>
            <FormControl sx={{ m: 0, minWidth: {width} }} >
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Age"
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Disabled</FormHelperText> */}
      </FormControl>

        </div>
    )
}

export {Inputselectbox}