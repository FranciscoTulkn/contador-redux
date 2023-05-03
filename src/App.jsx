import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
  // Uso del UseSElector para poder traer la propiedad counter de la constante iniciada en 0.
  const counter = useSelector (state => state.counter);
  // Uso del UseDispatch que disparara al hacer click un evento.
  const dispatch = useDispatch ();

  // Función para incrementar el contador, utilizando el useDispatch
  function incrementar (){
    dispatch({type: 'INCREMENT'});
  }

  // Función para decrementar el contador, itulizando el useDispatch.
  function decrementar (){
    dispatch({type: 'DECREMENT'});
  }

  // Retorna el valor a APP.
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick = {incrementar}>Incrementar</button>
      <button onClick = {decrementar}>Decrementar</button>
    </div>

  )
}

export default App
