import axios from 'axios';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
} from '../constants/userConstants';

export const register = (name, email, date, city, Istate) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })
  
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
  
        const { data } = await axios.post(
            '/api/users',
            { name, email, date, city, state:Istate },
            config
        )
  
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
        
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                : error.message,
            })
        }
}

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })

  
        const { data } = await axios.get(`/api/users`)
  
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        dispatch({
            type: USER_LIST_FAIL,
            payload: message,
        })
    }
}