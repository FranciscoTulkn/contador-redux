import { configureStore } from '@reduxjs/toolkit';

// Constante para inicializar el contador
const initialState = {
  counter: 0
}

// función para incrementar o decrementar el contador según el caso.
// La función tiene dos propiedades, el estado y la action.
const counterReducer = (state = initialState, action) =>{
  switch (action.type){
    case 'INCREMENT':
      return {counter: state.counter + 1};
    case 'DECREMENT':
      return { counter: state.counter -1};
    default:
      return state;
  }
};

// Constante para configurar el store de REDUX.
// Sirve para que la aplicación se actualice de manera global en sus componentes, donde sea utilizado.
const store = configureStore({
  reducer: counterReducer
});

// Exportando el store
export default store;