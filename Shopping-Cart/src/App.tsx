import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Products } from './components/Products/Products'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'
import './app.module.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App