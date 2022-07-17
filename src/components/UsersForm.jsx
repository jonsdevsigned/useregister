import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ( {getUsers, userSelected, deselectUser} ) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthday, setBirthday] = useState('') 

    useEffect(() => {
        if(userSelected !== null){
            /* console.log(userSelected) */
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }
    }, [ userSelected ]) 

    const submit = (e) => {
        e.preventDefault()
        /* alert ('hice submit') */

        const userForm = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday

        }

        if (userSelected !== null){
            /* alert('actualizando') */
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userForm)
                .then(() =>{
                    getUsers()
                    reset()
                    deselectUser()
                })
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', userForm)
                .then(() => {
                    getUsers()
                    reset()
                })
                .catch(error => console.log(error.response))
        }
    }

    const reset = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setBirthday('')
    }

    const clear = () => {
        reset()
        deselectCar()
    }

    return (
        <div className='containerUser-form'>
            <form className='form-user' onSubmit={submit}>

                <h2 className='title-form'>Welcome, register</h2>

                <div className='container-name'> 

                    <i class="fa-solid fa-user"></i>
                    
                    <div className='name-complete'>
                        <div>
                            <label htmlFor="firstName"></label>
                                <input type="text" placeholder='first name' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="lastName"></label>
                                <input type="text" placeholder='last name' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div>
                    
                    <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                        <input type="email" placeholder='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                        <input type="password" placeholder='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                        <input type="date" id='birthday' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
                </div>
                <button>Submit</button>
                <button type='button' onClick={clear}>Clear</button>

            </form>
        </div>
    );
};

export default UsersForm;