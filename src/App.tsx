import type { Component } from 'solid-js'
import Home from './pages/Home'

const App: Component = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-cyan-100">
      <div class="max-w-4xl font-roboto overflow-hidden">
        <Home />
      </div>
    </div>
  )
}

export default App
