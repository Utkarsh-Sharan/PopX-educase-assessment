import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    navigate(`/${e.target.id}`);
  }

  return (
    <form className='h-full flex flex-col justify-between'>
        <div className='flex flex-col gap-5'>
            <TextField
                label="Full Name"
                placeholder='Enter full name'
                size='small'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
            />
            <TextField
                label="Phone number"
                placeholder='Enter phone number'
                size='small'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <TextField
                label="Email address"
                placeholder='Enter email address'
                size='small'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                label="Password"
                placeholder='Enter password'
                size='small'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <TextField
                label="Company name"
                placeholder='Enter company name'
                size='small'
                name='companyName'
                value={formData.companyName}
                onChange={handleChange}
            />
            <FormLabel>Are you an agency?</FormLabel>
            <RadioGroup row>
                <FormControlLabel value={"Yes"} control={<Radio />} label="Yes" />
                <FormControlLabel value={"No"} control={<Radio />} label="No" />
            </RadioGroup>
        </div>

        <Button 
            id={"profile"} 
            bgColor={"bg-purple-700"}
            onClick={handleSubmit}
        >
            Create Account
        </Button>
    </form>
  )
}

export default SignupForm