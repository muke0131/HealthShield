import React from "react";
import {Box, Typography} from "@mui/material";
const Footer=()=>{
    return(
        <Box sx={{ '@media (max-width:600px)': { marginLeft:'12rem' } }}>
        <Typography variant="body1" textAlign="center" my="2rem" >
        © Copyrights 2024 By Team mighty_devs<br/>All Rights Reserved.
        </Typography>
        </Box>
    )
}
export default Footer;