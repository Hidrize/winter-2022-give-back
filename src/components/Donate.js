import React from "react";
import { Button, FormControl, Input, InputLabel, Stack } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material"; 
//import { Input } from '@mui/material';
//import { InputLabel } from '@mui/material';
//import "../App.css";

function Donate() {
  return (
    <div>
      {/* <Container>
        <h1>Donate page</h1>
      </Container> */}
      <Container maxWidth='md'>
        <h3>Donate</h3>
      <form>
    <Stack spacing={2}>  
      <FormControl>
        <InputLabel htmlFor="first_name">First Name</InputLabel>
        <Input id="first_name" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="last_name">Last Name</InputLabel>
        <Input id="last_name" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Input id="address" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="city">City</InputLabel>
        <Input id="city" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="state">State</InputLabel>
        <Input id="state" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="zip">ZIP code</InputLabel>
        <Input id="zip" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="country">Country</InputLabel>
        <Input id="country" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" type="email"/>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input id="amount" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="credit_card">Credit Card</InputLabel>
        <Input id="credit_card" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="exp_date"></InputLabel>
        <Input id="exp_date" type="date"/>
      </FormControl>
      <Button variant="contained">Donate!</Button>
      </Stack>
      </form>
      </Container>
    </div>
  );
}

export default Donate;
