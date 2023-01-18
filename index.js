// import firebase admin library - tools needed to connect to firestore
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "./secrets.js";


// connect to firebase PROJECT
initializeApp({
    credential: cert(service_account)
})

// once connected, connect to firestore
const db = getFirestore( 
)

// create our object
const food = {
    food: 'octopus',
    style: 'Mediterranean',
    feeds: 4,
    price: 29.99,
    meal: 'appetizer',
    prepTime: '25 minutes',
    inStock: true,
    description: 'When prepared well, grilled octopus is incredible'
}

// create a new documentx
// go into db 
// go into the "foods" collection
// add a new document with the data above (food)

db.collection("foods").add(food)
    .then(doc => console.log("added food to: ", doc.id))
    // .catch(err => console.log(err)
    .catch(console.error)

//     db.collection("foods").get()
//     .then (collection => {
//         const foods = collection.docs.map(doc => {
//         let food = doc.data()
//         food.id = doc.id
//             //return {...doc.data(), id: doc.id}
//         })
//     })