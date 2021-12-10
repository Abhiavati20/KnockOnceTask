import React, { useEffect }         from 'react';
import { Link }                     from 'react-router-dom'
import { Table }                    from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message                      from '../components/Message';
import Loader                       from '../components/Loader';
import { listUsers }                from '../actions/userActions';

const UserListScreen = () => {
    const dispatch = useDispatch()
  
    const userList = useSelector((state) => state.userList)
    let { loading, error, users } = userList
    
    users = users?.sort((a, b) => new Date(a.date) - new Date(b.date))

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])
    return (
    <>
        
        <Link className='btn btn-primary my-3' to='/register'>
            Book A Slot
        </Link>
        <h1>Users</h1>
            { loading ? (
                <Loader />
            ) : error ? (
                    <Message variant='danger'>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className='table-md'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>DATE</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>
                                <td>{user.date.substring(0, 10)}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
    </>
    )
  }
  
export default UserListScreen;