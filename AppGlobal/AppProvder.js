"use client"
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import AppRootComponent from './AppRootComponent'

function AppProvder({ children}) {
  return (
      <Provider store={store}>
          <AppRootComponent>
        { children } 
          </AppRootComponent>
   </Provider>
  )
}

export default AppProvder