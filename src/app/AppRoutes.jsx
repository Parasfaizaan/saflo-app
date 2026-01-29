 import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
 import React from 'react'
 import Home from '../pages/Home/Home'
 import Feature from  '../pages/Features/Features'
 function AppRoutes() {
   return (
     <div>
       <Router>
        <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/feature' element={<Feature />}/>
        </Routes>
       </Router>
     </div>
   )
 }
 
 export default AppRoutes
 
