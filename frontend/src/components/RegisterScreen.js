import React, { useState,  }          from 'react'
import { Link }                       from 'react-router-dom'
import { Form, Button, }              from 'react-bootstrap'
import { useDispatch, useSelector }   from 'react-redux'
import Message                        from './Message'
import Loader                         from './Loader'
import FormContainer                  from './FormContainer'
import { register }                   from '../actions/userActions'
import { useNavigate }                from 'react-router-dom';
const RegisterScreen = ({history}) => {
    const [name, setName]       = useState('');
    const [email, setEmail]     = useState('');
    const [date, setDate]       = useState(new Date());
    const [city, setCity]       = useState('');
    const [state, setState]     = useState('');
    const [message, setMessage] = useState(null);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error } = userRegister
  
    
    
  
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name, email, date, city, state))
        setMessage("Slot Booked! :)");
        navigate('/');
    }
  
    return (
        <FormContainer>
            <Link className='btn btn-primary my-3' to='/'>
                Go Back
            </Link>
            <h1>Book Your Appointment</h1>
            {message && <Message>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
  
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
  
                <Form.Group controlId='date'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type='date'
                        placeholder='On the date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>
  
                <Form.Group controlId='name'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
        </FormContainer>
    )
}
  
export default RegisterScreen;