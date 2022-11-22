import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'
import { request, Config } from '@base/axios/lib'
import { nowDate } from '@base/util/lib'

function App(): ReactElement {
  console.log('nowDate', nowDate())
  const config: Config = {
    url: '/test',
    header: {},
    method: 'string',
    parameter: {}
  }
  console.log('request', request(config))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
