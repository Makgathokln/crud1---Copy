import firebase from './firebase';
import '@firebase/firestore';





var constants = [];
var db = firebase.firestore();

db.collection('users').get()
    .then((users) => {
        users.forEach(user => {
            constants.push({

                id:user.id,
                name: user.data().name,
                surname: user.data().surname,
                age: user.data().age,
                location: user.data().location,


        });
        })

    })
    .catch((error) => console.log(error))

export default constants;