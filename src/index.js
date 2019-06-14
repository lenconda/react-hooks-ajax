import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useFetch } from './util'

import './styles.css'

const App = () => {
  const [url, updateUrl] = useState(undefined)
  const [inputValue, updateInputValue] = useState('')
  const result = useFetch(url)

  return (
    <div className={'App'}>
      <input 
        type={'text'} 
        value={inputValue}
        onChange={event => updateInputValue(event.target.value)}/>
      <button onClick={() => updateUrl(inputValue)}>update</button>
      {JSON.stringify(result)}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
