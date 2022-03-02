import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import constants from './data';
import Userform from "./Userform";
import firebase from './firebase';
import '@firebase/firestore';
import './style.css';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
} from '@material-ui/core';
import TableFooter from "@material-ui/core/TableFooter";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius:15,
        margin: '25px 10px',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.secondary.main,
        color:theme.palette.getContrastText(theme.palette.primary.dark)
    },
    name: {
        fontWeight: 'bold',
        color: 'grey ',
    },
    age: {
        fontWeight:'bold',

    },
}));


const UserDetails = () => {
    const classes = useStyles();
    const db = firebase.firestore();
    const [UsersData,setData] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const history = useHistory();
    const ConfirmAge = (age) => {


        if (age > 18){

            return age;
        }
        else{

            return age;
        }

    }
    UsersData.sort((a,b) => parseInt(a.age) - parseInt(b.age));
    const  Add = () =>{
       history.push('/AddUser')
    };
    const Update = () => {
      history.push('/UpdateDetails')
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
useEffect(() => {
    var info = []
    db.collection('users').get()
        .then((users) => {
            users.forEach(user => {

                info.push(user.data())
            })
            setData(info)

        })
        .catch((error) => console.log(error))

},[])
    return (
        <div className={'container'} >
            <div className="users">
               <Userform/>

            </div>
           
           <div>
           <h1 className={'my-4 font-weight-bold-display-4'}  style={{ marginLeft:120 }}>
                                         List of Users

                                    </h1>
         
            <TableContainer component={Paper} className={classes.tableContainer} style={{ width: 600, marginLeft:120 }}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {constants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id} >
                                <TableCell component="th" scope="row" width="10%">
                                
                                    <Grid container>
                                        <Grid item lg={3}>
                                            <Avatar alt={row.name} src={'./'}/></Grid>
                                        <Grid item lg={9}> <NavLink to={{pathname:'/UpdateDetails',
                                            user:{...row}}} className={'Navlink'}> <Typography className={classes.name}>
                                            {row.name}</Typography>
                                           </NavLink>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[3,5,10,15]}
                            component="div"
                            count={constants.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
            </div>

        </div>

    );

}
export default UserDetails;

