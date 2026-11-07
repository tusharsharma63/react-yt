import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Tushar Sharma' img = "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user='Yashasvini Sharma' img = "https://images.unsplash.com/photo-1605895370326-e96b9d52e3f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user='Aditya Tiwari' img = "https://images.unsplash.com/photo-1793605300952-49cbebdc3d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user='Vishal Sharma' img = "https://plus.unsplash.com/premium_photo-1789412494244-fedb794ada10?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
    </div>
  )
}

export default App
