import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducer'
import Myreducer from './Myreducer'
import Postreducer from './Postreducer'
import Datareducer from './Datareducer'

export const store = configureStore({
  reducer:{
    Data: Myreducer,
    counter:counterReducer,
     Post:Postreducer,
    User:Datareducer
  }
})