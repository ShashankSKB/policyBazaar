import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';

const MAX_LENGTH = 10;
function NormalText({label,fieldname})
{
    
    const [owner,setOwner]=useState("");

    const handleChange=(e)=>{

        console.log(e.target.value)
    }

    return (
        <div>
              {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
        //   autoComplete="current-password"
        /> */}

<Box
      sx={{
        // width: 500,
        // maxWidth: '98%',
      }}
    >
      <TextField
       id="fullWidth" 
       error={fieldname >= MAX_LENGTH}
       fullWidth label={label} 
       
      
       />
    </Box>
        </div>
    ) 
}

export {NormalText}