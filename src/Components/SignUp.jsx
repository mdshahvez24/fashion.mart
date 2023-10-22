import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
// import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

export default function SignUp() {
    let[register,setregister]=useState({
        nmae:"",
        username:"",
        phone:"",
        email:"",
        cpassword:""
    })
    function getData(name,value){
        // console.log(e.target.name,e.target.value);
      setregister((oldData)=>{
        return{
            ...oldData,
            [name]:value
        }
      })
    }
    function postData(){
        if(register.password==register.cpassword)
        alert(`
             Name :${register.name}
             userName :${register.username}
             Email :${register.email}
             Phone :${register.phone}
             Password :${register.password}
        `
        )
        else 
        alert("Password and confirm Password Doesn't Matched!!!")
    }
  return (
    <Grid container spacing={2}>
          <Grid item md={2} xs={12}>
           </Grid>
            <Grid item md={8} xs={12}>
                <h5 className='background text-light text-center p-2'>SignUp section</h5>
                
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '98%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
            onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-name-input"
                label="Name*"
                type="text"
                autoComplete="current-name"
                placeholder='Enter Your Name'
                name="  name"
            />
            <TextField
                onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-username-input"
                label="User Name*"
                type="text"
                autoComplete="current-username"
                placeholder='Enter Your User Name'
                name="username"
            />
            <TextField
                onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-email-input"
                label="Email*"
                type="email"
                autoComplete="current-email"
                placeholder='Enter email'
                name="email"
                />
            <TextField
                onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-phone-input"
                label="Phone*"
                type="text"
                autoComplete="current-phone"
                placeholder='Enter Phone'
                name="phone"
            />
            <TextField
                onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-password-input"
                label="Password*"
                type="password"
                autoComplete="current-password"
                placeholder='Enter Your Password'
                name="password"
            />
            <TextField
                onChange={(e)=>{
                getData(e.target.name,e.target.value)
            }}
                id="outlined-cpassword-input"
                label="Confirm Password*"
                type="password"
                autoComplete="current-cpassword"
                placeholder='Confirm Password'
                name="cpassword"
            />
<Button variant="contained" className="background" onClick={postData}>SignUp</Button>
<Link href="/login" color="inherit" underline="none">Already user? Login to your Account</Link>

            </Box>       
            
     </Grid>
            <Grid item md={2} xs={12} >
            </Grid>
            </Grid>
  )
}




