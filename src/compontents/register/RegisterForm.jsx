import React, { useEffect, useState } from 'react';
import ReusabilityTextInput from './ReusabilityTextInput';
import { Alert } from '@mui/material';

const RegisterForm = () => {

    // STATE
    // Form State
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Loading State
    const [loading, setLoading] = useState(false);

    // Multiple Request State
    const [multipleRequest, setMultipleRequest] = useState(false);

    // Error
    const [errors, setErrors] = useState({});

    // isFormValid
    const [isFormValid, setIsFormValid] = useState(false);
    ///////////////////////////////////////////////////////////

    // Form Data hepsi doluysa
    useEffect(() => {
        const { username, email, password, confirmPassword } = formData;
        if (username && email && password && confirmPassword) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }

        // fetch
        // axios (npm i axios)
        //fetch('')

    }, [formData]);

    ///////////////////////////////////////////////////////////
    // OnChange All
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        // USERNAME
        if (formData.username.trim().length < 3) {
            tempErrors.username = 'Kullanıcı en az 3 karakter olmalı';
            isValid = false;
        }

        // EMAIL
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            tempErrors.email = 'Email regex uymadı';
            isValid = false;
        }

        // PASSWORD
        if (formData.password.length < 6) {
            tempErrors.password = 'Şifre için en az 6 karakter olmalı';
            isValid = false;
        }

        // RE-PASSWORD
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Şifreler birbirine uymuyor.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Submit
    let handleSubmit = async (e) => {
        // Browser sen dur birşey yapma
        e.preventDefault();

        // Loading çalışmaya başlasın
        setLoading(true);

        // Çoklu isteği
        setMultipleRequest(false)

        // Validate
        if (validate()) {
            // Loading Çalışsın
            setLoading(false);

            alert('Kayıt olundu');
            // Form submission logic here
            console.log(formData);
            console.log(formData.username);
            console.log(formData.password);
            console.log(formData.email);

            // POST
            // Submit fetch api
            fetch('https://66755c8da8d2b4d072efb8cf.mockapi.io/api/v1/blog/react_project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    email: formData.email
                }),
            }).then(response => response.json())
                .then(data => {
                    console.log("Success", data)
                }).catch(err => {
                    console.error("ERROR", err)
                })
        }
    };

    // Return
    return (
        <>
            <h1 className="text-center text-uppercase display-4 text-primary mt-4 mb-4">Register</h1>

            <form onSubmit={handleSubmit} className='mb-5'>

                {/* USERNAME */}
                <div className='form-group mb-4'>
                    <label>Kullanıcı Adı:</label>
                    <input
                        type="text"
                        name="username"
                        className='form-control'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

                    {errors.username &&
                        <div
                            class="alert alert-info alert-dismissible fade show mt-2"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>

                            <strong>Validation</strong>
                            {errors.username && <p style={{ color: 'blue' }}>{errors.username}</p>}
                        </div>
                    }
                    {errors.username &&
                        <Alert
                            variant='outlined'
                            severity="error"
                            sx={{
                                marginTop: 3, // 8px*3=24px
                            }}>{errors.username && <p style={{ color: 'blue' }}>{errors.username}</p>}</Alert>
                    }
                </div>

                {/* EMAIL */}
                {/* 
                <div className='form-group mb-4'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className='form-control'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div> */}
                <ReusabilityTextInput
                    label='Email:'
                    type="email"
                    name="email"
                    className='form-control'
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                {/* PASSWORD */}
                {/* 
                 <div className='form-group mb-4'>
                    <label>Şifre:</label>
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                */}
                <ReusabilityTextInput
                    label='Şifre:'
                    type="password"
                    name="password"
                    className='form-control'
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />


                {/* RE-PASSWORD */}
                {/*  
                <div className='form-group mb-4'>
                    <label>Şifre tekrarı:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className='form-control'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                </div>
                */}
                <ReusabilityTextInput
                    label='Şifre tekrarı:'
                    type="password"
                    name="confirmPassword"
                    className='form-control'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                />


                {/* Submit */}
                <button type="reset" className='btn btn-danger me-3'>Temizle</button>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className='btn btn-primary'
                >
                    {(loading) &&
                        <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }
                    Kayıt ol
                </button>
            </form>
        </>
    );
};

// Export
export default RegisterForm;