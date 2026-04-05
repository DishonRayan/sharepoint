// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Homebanner from './components/Homebanner'

import { Routes, Route } from "react-router-dom";
import AccessManagement from './components/AccessManagement'
import HeaderNav from './components/HeaderNav'
import IncidentManagement from './components/IncidentManagement'
import IntakeProcess from './components/IntakeProcess'
import ReleaseCalendar from './components/ReleaseCalendar'
import ReleaseTracker from './components/ReleaseTracker'
import Datapoints from './components/Datapoints'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
     <>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Homebanner />
              <HeaderNav />
              <Datapoints/>
            </main>
          }
        />

        <Route
          path="/access-management"
          element={<AccessManagement />}
        />
        <Route
          path="/incident-management"
          element={<IncidentManagement />}
        />
        <Route
          path="/intake-process"
          element={<IntakeProcess />}
        />
        <Route
          path="/release-calendar"
          element={<ReleaseCalendar />}
        />
        <Route
          path="/release-tracker"
          element={<ReleaseTracker />}
        />
      </Routes>
    </>



  )
}

export default App
