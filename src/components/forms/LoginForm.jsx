import { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '../Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  return (
    <form className='flex flex-col gap-5'>
        <TextField 
            label="Email Address" 
            defaultValue="Enter email address"
            size='small'
            name='email'
            value={formData.email}
            onChange={handleChange}
        />

        <TextField  
            label="Password" 
            defaultValue="Enter password"
            size="small"
            name='password'
            value={formData.password}
            onChange={handleChange}
        />

        <Button bgColor={"bg-purple-700"}>Login</Button>
    </form>
  )
}

export default LoginForm