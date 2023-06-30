import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const submitLoginForm = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Stack
        component="form"
        sx={{
          width: '300px',
          textAlign: 'center',
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <h2>Login to BackOffice of StyleStock 🧨</h2>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          required
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          required
        />
        <Button variant="contained" type="submit" onClick={submitLoginForm}>
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default Login;