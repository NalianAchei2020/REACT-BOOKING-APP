import React from 'react';
import { TextField, Stack, Button } from '@mui/material';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Login = () => {
  return (
    <div>
      <Navbar />
      <form>
        <Stack spacing={2} width={400}>
          <TextField type="text" label="Email" />
          <TextField type="password" label="Password" />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
