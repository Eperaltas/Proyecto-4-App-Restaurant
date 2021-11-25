import React from 'react'
//* Firebase
import db from '../firebase/config'
import {onSnapshot, collection} from 'firebase/firestore'

// Obtener los datos -> onSnapshot
// Guardar datos -> addDoc

function Main () { 
  const [reservaciones, setReservaciones] = React.useState([])
  //Yo quiero ver los datos cuando cargue mi componente
  React.useEffect(() => {
    console.log('%c Ejecutando una vez que el render termino', 'color: green;')

    onSnapshot(collection(db, 'reservaciones'), (snapshot) => {      
        console.log(snapshot.docs)
        snapshot.docs.map((doc) => setReservaciones((prevState) => [...prevState, doc.data()]))

    })
  }, [])


  console.log('%c Renderizando', 'color:red;')
  console.log('reservaciones', reservaciones)
  return <div>
    Hola soy main
    </div>
}

export {Main}