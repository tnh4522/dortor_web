import App from './App.jsx'
import './Index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome/Welcome.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import AddData from './pages/AddData/AddData.jsx'
import LoadResult from './pages/LoadResult/LoadResult.jsx'
// import ListResult from './pages/Result/History.jsx'
import Home from './pages/Home/Home.jsx'
import ResultPage from './pages/Result/ResultPage.jsx'
import { PieChart } from './pages/Result/PieChart.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import CheckScheduled from './pages/Doctors/CheckScheduled/CheckScheduled.jsx'
import CheckUser from './utils/CheckUser.jsx'
import MeetingDoctor from './pages/Doctors/Meeting/MeetingDoctor.jsx'
import MeetingUser from './pages/Patient/MeetingUser.jsx'
import UserContextProvider from './contexts/userContext'
import ResultsContextProvider, { ResultsContext } from './contexts/resultsContext'
import History from './pages/Result/History.jsx'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // <React.StrictMode>
    <HashRouter>
      <App>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/add-data' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<AddData />} doctorComponent={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/load-result' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<LoadResult />} doctorComponent={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/history' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<History />} doctorComponent={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>
          } />
          <Route path='/result' element={
            <ProtectedRoutes>
              <ResultPage />
            </ProtectedRoutes>
          } />
          <Route path='/chart' element={
            <ProtectedRoutes>
              <PieChart />
            </ProtectedRoutes>} />
          <Route path='/home' element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>} />

          <Route path='patient/meeting' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<MeetingUser />} doctorComponent={<><h1>You are doctor</h1></>} />
            </ProtectedRoutes>} />

          <Route path='/doctor/meeting' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<><h1>You are patient</h1></>} doctorComponent={<MeetingDoctor />} />
            </ProtectedRoutes>} />

          <Route path='/checkScheduled' element={
            <ProtectedRoutes>
              <CheckUser userComponent={<><h1>You are patient</h1></>} doctorComponent={<CheckScheduled />} />
            </ProtectedRoutes>
          } />
        </Routes>
      </App>
    </HashRouter>
    // </React.StrictMode>
  )
}
