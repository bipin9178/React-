import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Cahi</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
    
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (

 <a href="https://google.com" target='_blank'>visit google</a>
)
const anotheruser = "chai aur react"
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click Me To Visit Google',
  anotheruser
)
createRoot(document.getElementById('root')).
  render(

  reactElement
)
