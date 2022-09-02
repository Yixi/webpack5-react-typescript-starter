import * as React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.scss'
import Header from '@root/components/Header'
import About from '@root/pages/About'
import Home from '@root/pages/Home'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Header/>
        <div className={styles.content}>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  )
}

export default App
