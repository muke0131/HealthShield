import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';


const DataForm = () => {
  const divStyle = {
    backgroundImage: 'url("bg-heart.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '280vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  };
  const [answer, setAnswer] = useState('')
  const [tipsArray, setTipsArray] = useState([]);
  const [inputs, setInputs] = useState({
    age: '',
    glucose: '',
    bloodPressure: '',
    bmi: '',
    skinThickness: '',
    diabetesPedigreeFunc: '',
    insulin: '',
    pregnancy: ''
  })
  useEffect(() => {
    if (answer !== '') {
      window.scrollTo({
        top: document.getElementById('resultBox').offsetTop,
        behavior: 'smooth',
      });
    }
  }, [answer]);
  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://healthshield.onrender.com/api/predict/", {
        method: 'POST',
        body: JSON.stringify({
          Pregnancies: Number(inputs.pregnancy),
          Glucose: Number(inputs.glucose),
          BloodPressure: Number(inputs.bloodPressure),
          SkinThickness: Number(inputs.skinThickness),
          Insulin: Number(inputs.insulin),
          BMI: Number(inputs.bmi),
          DiabetesPedigreeFunction: Number(inputs.diabetesPedigreeFunc),
          Age: Number(inputs.age),
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        if (data[0] == 1) {
          setAnswer('Yes, you have diabetes.')
          let str = `
                    1)Focus on a balanced diet that includes fruits, vegetables, whole grains, lean proteins, and healthy fats.
                    2)Limit the intake of processed foods, sugary beverages, and high-calorie snacks.
                    3)Drink water throughout the day.
                    4)Engage in regular physical activity. Aim for at least 150 minutes of moderate-intensity aerobic exercise per week.
                    5)Practice stress-reducing activities, such as meditation, deep breathing, yoga, or regular exercise.
                    `
          setTipsArray(str.split('\n'));
          console.log(answer)
          console.log(answer)
        }
        else if (data[0] == 0) {
          setAnswer('No, you do not have diabetes.')
          setTipsArray([])
          console.log(answer)
        }
      }

    }
    catch (error) {
      console.log(error)
    }

  }
  return (
    <Box style={divStyle} sx={{ width: { xs: '150%', md: '100%' } }}>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={500} display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" boxShadow="10px 20px 20px #737373" padding={3} borderRadius={5}>
          <Typography variant='h4' padding={3} textAlign="center" fontFamily="times-new-roman" >Diabetes Predictor</Typography>
          <TextField placeholder='Age' value={inputs.age} onChange={handleChange} name='age' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder='Glucose' value={inputs.glucose} onChange={handleChange} name='glucose' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder='Blood Pressure' value={inputs.bloodPressure} onChange={handleChange} name='bloodPressure' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder='BMI' value={inputs.bmi} onChange={handleChange} name='bmi' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder='Skin Thickness' value={inputs.skinThickness} onChange={handleChange} name='skinThickness' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder='Diabetes Pedigree Function' value={inputs.diabetesPedigreeFunc} onChange={handleChange} name='diabetesPedigreeFunc' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder="Insulin" value={inputs.insulin} onChange={handleChange} name='insulin' margin='normal' type='text' required sx={{ width: '50%' }} />
          <TextField placeholder="Pregnancy" value={inputs.pregnancy} onChange={handleChange} name='pregnancy' margin='normal' type='text' required sx={{ width: '50%' }} />
          <Button variant='contained' type='submit' sx={{ marginY: 3 }}>Submit</Button>
        </Box>
      </form>
      {answer !== '' &&
        <Box id="resultBox" maxWidth={500} display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" marginTop={5} boxShadow="10px 10px 20px #737373" padding={3} borderRadius={5}>
          <Typography variant='h4' padding={3} textAlign="center" fontFamily="times-new-roman" >Result</Typography>
          <Typography variant='h5' padding={3} textAlign="center" fontFamily="times-new-roman" >{answer}</Typography>
          {tipsArray.length!==0 && (
            <>
              <Typography variant='h4' padding={3} textAlign="center" fontFamily="times-new-roman" >Tips for prevention</Typography>
              <Typography variant='body1' padding={3} textAlign="left" fontFamily="times-new-roman" >
                {tipsArray?.map((tip, index) => (
                  <p key={index}>{tip}</p>
                ))}
              </Typography>
            </>
          )}
        </Box>
      }
    </Box>
  )
}

export default DataForm;