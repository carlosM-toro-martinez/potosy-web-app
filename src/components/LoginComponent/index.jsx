import React, { useContext, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useStyles } from './Login.styles';
import loginSession from '../../async/services/post/loginSession';
import { MainContext } from '../../context/MainContext';
import { useNavigate } from 'react-router-dom';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'black',
        borderWidth: 1,
        color: 'black'
    },
    '& input:invalid + fieldset': {
        borderColor: 'black',
        borderWidth: 1,
    },
    '& .MuiInputBase-input': {
        color: 'black',
    },
    '& .MuiInputLabel-root': {
        color: 'black',
    },
    '& textarea:valid + fieldset': {
        borderColor: 'black',
        borderWidth: 1,
        color: 'black'
    },
    '& textarea:invalid + fieldset': {
        borderColor: 'black',
        borderWidth: 1,
    },
    '& .MuiInputBase-multiline': {
        color: 'black',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'black',
    },
    '& .MuiFormHelperText-root': {
        color: 'black',
    },
    '& fieldset': {
        borderColor: 'black !important',
    },
});

function LoginComponent() {
    const { setToken, setAuth, token, user, auth, setUser } = useContext(MainContext);
    const navigate = useNavigate()

    const classes = useStyles();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = formData;
            const promiseResult = await loginSession(newData);
            setToken(promiseResult.token);
            setAuth(true);
            if (promiseResult?.user?.business_id) {
                setUser(promiseResult?.user);
                navigate('/establishmentAdmin/home', { state: promiseResult?.user?.business_id })
            } else {
                setUser();
                navigate('/admin');
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Paper elevation={8}>
                <Box className={classes.container}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Iniciar Sesión
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <ValidationTextField
                            label="Nombre de Usuario"
                            variant="outlined"
                            fullWidth
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <ValidationTextField
                            label="Contraseña"
                            variant="outlined"
                            fullWidth
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Iniciar Sesión
                        </Button>
                    </form>
                </Box>
            </Paper>
        </>
    );
};

export default LoginComponent