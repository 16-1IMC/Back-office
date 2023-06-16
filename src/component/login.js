import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <Stack
        component="form"
        sx={{
          width: '25ch',
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
        />,

        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
      />,
      <Button variant="contained">Login</Button>
      </Stack>
    );
  };
  
  export default Login;