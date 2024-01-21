import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, RadioGroup, Radio, FormControlLabel, FormLabel, Checkbox } from '@mui/material';


const HeartData = () => {
    const divStyle = {
        backgroundImage: 'url("bg-heart.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '366vh',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    };
    const [answer, setAnswer] = useState('')
    const [inputs, setInputs] = useState({
        age: '',
        cp: '',
        trestbps: '',
        chol: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        sex: '',
        thal: ''
    })
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [tipsArray, setTipsArray] = useState([]);

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
            const response = await fetch("https://healthshield.onrender.com/api/heartDisease_predict/", {
                method: 'POST',
                body: JSON.stringify({
                    age: Number(inputs.age),
                    sex: Number(inputs.sex),
                    cp: Number(inputs.cp),
                    trestbps: Number(inputs.trestbps),
                    chol: Number(inputs.chol),
                    fbs: Number(checked),
                    restecg: Number(inputs.restecg),
                    thalach: Number(inputs.thalach),
                    exang: Number(checked2),
                    oldpeak: Number(inputs.oldpeak),
                    slope: Number(inputs.slope),
                    ca: Number(inputs.ca),
                    thal: Number(inputs.thal)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                if (data[0] == 1) {
                    setAnswer('Yes, you have heart disease.')
                    let str=`
                    1)Choose a diet rich in fruits, vegetables, whole grains, lean proteins, and omega-3 fatty acids.
                    2)Engage in regular physical activity, including aerobic exercises like walking, jogging, swimming, or cycling.
                    3)If you smoke, quitting is one of the most significant steps you can take to improve heart health.
                    4)Practice stress-reduction techniques such as deep breathing, meditation, yoga, or engaging in hobbies to manage stress effectively.
                    5)Schedule regular screenings for cholesterol, blood pressure, diabetes, and other relevant heart disease risk factors.
                    `
                    setTipsArray(str.split('\n'));
                    console.log(answer)
                }
                else if (data[0] == 0) {
                    setAnswer('No, you do not have heart disease.')
                    console.log(answer)
                    setTipsArray([])
                }
            }

        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <Box style={divStyle} sx={{width:{xs:'150%',md:'100%'}}}>
            <form onSubmit={handleSubmit}>
                <Box maxWidth={500} display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" boxShadow="10px 20px 20px #737373" padding={3} borderRadius={5}>
                    <Typography variant='h4' padding={3} textAlign="center" fontFamily="times-new-roman" >Heart Disease Predictor</Typography>

                    <TextField placeholder='Age' value={inputs.age} onChange={handleChange} name='age' margin='normal' type='text' required sx={{ width: '60%' }} />
                    <FormLabel sx={{ marginRight: '14rem', marginTop: '1rem' }}>Gender</FormLabel>
                    <RadioGroup
                        aria-label="sex"
                        name="sex"
                        value={inputs.sex}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'row', color: 'gray' }}>
                        <FormControlLabel value="1" control={<Radio />} label="Male" />
                        <FormControlLabel value="0" control={<Radio />} label="Female" sx={{ marginRight: '7rem' }} />
                    </RadioGroup>

                    <FormLabel sx={{ marginRight: '10rem', marginTop: '1rem' }}>Chest Pain Type</FormLabel>
                    <RadioGroup
                        aria-label="cp"
                        name="cp"
                        value={inputs.cp}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'row', color: 'gray', marginRight: '3.6rem' }}>

                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                    </RadioGroup>

                    <TextField placeholder='Resting Blood Pressure' value={inputs.trestbps} onChange={handleChange} name='trestbps' margin='normal' type='text' required sx={{ width: '60%' }} />


                    <TextField placeholder='Cholesterol' value={inputs.chol} onChange={handleChange} name='chol' margin='normal' type='text' required sx={{ width: '60%' }} />
                    <TextField placeholder='Maximum Heart Rate' value={inputs.thalach} onChange={handleChange} name='thalach' margin='normal' type='text' required sx={{ width: '60%' }} />
                    <TextField placeholder="ST Depression" value={inputs.oldpeak} onChange={handleChange} name='oldpeak' margin='normal' type='text' required sx={{ width: '60%' }} />
                    <FormLabel sx={{ marginRight: '12.5rem', marginTop: '1rem' }}>Rest ECG</FormLabel>
                    <RadioGroup
                        aria-label="restecg"
                        name="restecg"
                        value={inputs.restecg}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'row', color: 'gray', mr: '6.5rem' }}>

                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                    </RadioGroup>
                    <FormControlLabel required sx={{ mr: '6rem', color: 'gray' }} control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Fasting Blood Sugar" />
                    <FormControlLabel required sx={{ mr: '4rem', color: 'gray' }} control={<Checkbox checked={checked2} onChange={() => setChecked2(!checked2)} />} label="Exercise Induced Angina" />

                    <FormLabel sx={{ marginRight: '14.5rem', marginTop: '1rem' }}>Slope</FormLabel>
                    <RadioGroup
                        aria-label="slope"
                        name="slope"
                        value={inputs.slope}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'column', color: 'gray', mr: '6rem' }}>

                        <FormControlLabel value="0" control={<Radio />} label="Upslopping (0)" />
                        <FormControlLabel value="1" control={<Radio />} label="Flat (1)" />
                        <FormControlLabel value="2" control={<Radio />} label="Downslopping (2)" />
                    </RadioGroup>
                    <FormLabel sx={{ marginRight: '4.4rem', marginTop: '1rem' }}>Number of measure vessels</FormLabel>
                    <RadioGroup
                        aria-label="ca"
                        name="ca"
                        value={inputs.ca}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'row', color: 'gray', marginRight: '3rem' }}>

                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                    </RadioGroup>
                    <FormLabel sx={{ marginRight: '7.3rem', marginTop: '1rem' }}>Thalassemia Disorder</FormLabel>
                    <RadioGroup
                        aria-label="thal"
                        name="thal"
                        value={inputs.thal}
                        onChange={handleChange}
                        required
                        sx={{ flexDirection: 'row', color: 'gray', marginRight: '3rem' }}>

                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                    </RadioGroup>
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

export default HeartData;