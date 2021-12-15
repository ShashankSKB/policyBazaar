import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function NormalText()
{

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
        maxWidth: '98%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
        </div>
    ) 
}

export {NormalText}