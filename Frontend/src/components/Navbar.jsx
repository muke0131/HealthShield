import React from 'react';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <AppBar position='sticky' sx={{ bgcolor: '#130d2d',width:{xs:'150%',md:'100%'} }}>
            <Toolbar>
                <Box display='flex' marginRight='auto' onClick={() => navigate("/")}>
                    <Avatar src="logo.jpeg" alt="Health Shield" style={{ marginRight: 1,cursor:'pointer' }} />
                    <Typography style={{
                        fontFamily: "Times new roman",
                        color: "inherit",
                        fontWeight: "bolder",
                        flex: 1,
                        cursor: "pointer",
                        marginTop:'4px',
                        marginLeft:'2px',
                    }}
                    sx={{ '@media (max-width:600px)': { display: 'none' } }}
                        variant='h5'>
                        HealthShield
                    </Typography>
                </Box>
                <Box display='flex' marginLeft='auto'>
                    <Button sx={{ '@media (max-width:600px)': { marginLeft:'6rem'},color: 'white',":hover":{'color':'#BFB8B7'} }} LinkComponent={Link} to="/heart-disease-predictor">Heart Disease Predictor</Button>
                    <Button sx={{color: 'white',":hover":{'color':'#BFB8B7'},marginX:'1rem'}} LinkComponent={Link} to="/diabetes-predictor" >Diabetes predictor</Button>
                    <Button sx={{color: 'white',":hover":{'color':'#BFB8B7'}  }} LinkComponent={Link} to="/about-us" >About us</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar




