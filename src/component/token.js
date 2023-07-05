import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch('http://thegoodnetwork.fr/index.php/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(err => console.log(err))
   }

  const submitLoginForm = async e => {
    e.preventDefault();
    const response = await loginUser({
      email: email,
      password: password
    });
    if (email === "admin@stylestock.com") {
      localStorage.setItem('token', response['token']);
      alert('Vous avez récupéré un token avec succès.');
      navigate('/Home');
    } else {
      localStorage.removeItem('token');
      alert('Erreur vérifier l\'email et le mot de passe utiliser.');
    }
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
        <h2>Get Token for BackOffice of StyleStock 🔑</h2>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" type="submit" onClick={submitLoginForm}>
          Get Token
        </Button>
      </Stack>
    </div>
  );
};

export default Login;