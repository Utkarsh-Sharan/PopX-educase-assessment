import { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    navigate(`/${e.target.id}`);
  }

  return (
    <form className='flex flex-col gap-5'>
        <TextField 
            label="Email Address" 
            placeholder="Enter email address"
            size='small'
            name='email'
            value={formData.email}
            onChange={handleChange}
        />

        <TextField  
          label="Password" 
          placeholder="Enter password"
          size="small"
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <Button 
          id={"profile"} 
          bgColor={"bg-purple-700"}
          onClick={handleSubmit}
        >
          Login
        </Button>
    </form>
  )
}

export default LoginForm