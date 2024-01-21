import { Box, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box style={{ background: "url(bg-heart.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} sx={{width:{xs:'150%',md:'100%'}}}>

        <div className="container" style={{ width: "80%", margin: "0 auto", fontFamily: 'times-new-roman' }}>
          <h1 className="main-heading" style={{ marginTop: "0px", padding: "5px", marginBottom: "10px", fontWeight: 'bolder' }}>About HealthShield</h1>
          <h3>
            HealthShield is a cutting-edge web application designed to empower
            users in predicting and managing their risk of heart disease and
            diabetes.
            <br />
            Leveraging advanced machine learning algorithms and comprehensive
            health data analysis, this application provides personalized insights
            to help users make informed decisions about their lifestyle and
            healthcare.
          </h3>
        </div>
        <div className="container" style={{ width: "80%", margin: "10px auto", fontFamily: 'times-new-roman' }}>
          <h2 className="main-heading" style={{ marginBottom: "8px", fontWeight: 'bold' }}>Features :</h2>
          <h3 style={{ marginTop: "8px" }}>
            1. User-friendly Interface <br />
            2. Diabetes Prediction Module <br />
            3. Heart disease Prediction Module <br />
            4. Health Recommendations
          </h3>
        </div>
        <div className="container" style={{ width: "80%", margin: "10px auto", fontFamily: 'times-new-roman' }}>
          <h2 className="main-heading" style={{ marginBottom: "8px", fontWeight: 'bold' }}>Made By :</h2>
          <h3 style={{ marginTop: "8px", paddingBottom: "20px" }}>
            Mukul Nayak <a href="https://www.linkedin.com/in/mukul-nayak-973014220/" target="_blank"><img src="Linkedin.png" alt="" style={{ width: "20px", height: "20px" }} /></a>
            <a href="https://github.com/muke0131" target="_blank"><img src="github.png" alt="" style={{ width: "20px", height: "20px", marginLeft: "5px" }} /></a><br />
            Paarisha Kaushik <a href="https://www.linkedin.com/in/paarisha-kaushik-41800b1b6/" target="_blank"><img src="Linkedin.png" alt="" style={{ width: "20px", height: "20px" }} /></a>
            <a href="https://github.com/Paarisha1" target="_blank"><img src="github.png" alt="" style={{ width: "20px", height: "20px", marginLeft: "5px" }} /></a> <br />
            Mohd. Ayaan Raza <a href="https://www.linkedin.com/in/mohd-ayan-raza-908381267/" target="_blank"><img src="Linkedin.png" alt="" style={{ width: "20px", height: "20px" }} /></a>
            <a href="https://github.com/ayann07" target="_blank"><img src="github.png" alt="" style={{ width: "20px", height: "20px", marginLeft: "5px" }} /></a><br />
            Aryan Mishra <a href="https://www.linkedin.com/in/aryan-mishra-a8959b267/" target="_blank"><img src="Linkedin.png" alt="" style={{ width: "20px", height: "20px" }} /></a>
            <a href="https://github.com/Aryanmartinian" target="_blank"><img src="github.png" alt="" style={{ width: "20px", height: "20px", marginLeft: "5px" }} /></a><br />
          </h3>
        </div>

      </Box>
    </>
  );
};

export default About;