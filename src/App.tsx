import type { Component } from 'solid-js'
import Home from './pages/Home'

const App: Component = () => {
  return (
    <div class="flex items-center justify-center h-screen bg-cyan-100">
      <div class="font-roboto">
        <Home />
      </div>
    </div>
  )
}

export default App
