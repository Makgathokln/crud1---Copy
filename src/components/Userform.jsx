import React,{useState} from "react";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import TextField from  './TextField';
import UserData from  './UsersArray';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import '@firebase/firestore';
import {useHistory} from 'react-router-dom';
import './style.css';

const Userform = () => {
    const history = useHistory();
    const [user,setUser] = useState([]);
    const  db = firebase.firestore();
    var constants = [];
    const add = (values) => {


        db.collection('users').add({
            name:values.name,
            surname:values.surname,
            age:values.age,
            location:values.location,
        }).then((res) =>{
            alert("Success")
            history.push('/UserDetails')


        }).catch((err) =>{
            alert(err)
            history.push('/UserDetails')
        })

    }
const validate = Yup.object({
    name:Yup.string().required('Name is Required'),
    surname:Yup.string().required('Surname must contain a value'),
    age:Yup.string().required('age is Required'),
    location:Yup.string().required('Please Provide Location'),


});

    return (

        <div className="container mt-1" >

            <div className="row" >
                <div className="col-sm-5" style={{ width: 500 }}>
                    <Formik
                        validationSchema={validate}
                    initialValues={{
                        name: '',
                        surname:'',
                        age:'',
                        location:'',
                       
                    }}
                    onSubmit={(values, actions) => {
                    add(values)

                    }}


                    >
                        {
                            formik => (
                                <div>

                                    <h1 className={'my-4 font-weight-bold-display-4'}>
                                         Add User

                                    </h1>
                                    <Form onSubmit={formik.handleSubmit}>
                                        <TextField label={'Name'} name={'name'} type={'text'}/>
                                        <TextField label={'Surname'} name={'surname'} type={'text'}/>
                                        <TextField label={'Location'} name={'location'} type={'text'}/>
                                        <TextField label={'Age'} name={'age'} type={'text'}/>
                                       
                                        <button className="btn btn-success mt-3" type="submit" >
                                            Register User
                                        </button> {""} 
                                        <button className="btn btn-warning mt-3 ml-3" type="reset"  >
                                            Clear fields
                                        </button>
                                    </Form>
                                </div>

                            )
                        }

                    </Formik>
                </div>
                


            </div>

        </div>
    )
}
export default Userform;