import React, {useEffect,useState} from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import firebase from './firebase';
import '@firebase/firestore';



const Home = () =>{
    const  db = firebase.firestore();

    const [users,setUsers] = useState([]);
    //Function & Variable Declaration
    const history = useHistory();

    const profileFunc = () => {
        history.push('./Profile')
};
    const aboutFunc = () => {
        history.push('./About')
};
    useEffect(() => {
        var userArray = [];
        db.collection('users').get()
            .then((res) => {
              res.forEach(user => {
               userArray.push({...user.data()})
              })
            })
        setUsers(userArray)
    },[])
    return (
        <Container>
            {
                users.map((user) => (
                   console.log(user)
                ))
            }
        </Container>
    )
}
export default Home;