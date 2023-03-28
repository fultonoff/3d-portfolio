import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'




const  App =()=> {


  return (
   <BrowserRouter>

   <div className="relative z-0 bg-primRY">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>

      <div className="bg-primary">

      <About/>
      </div>
      <div className="bg-primary">

      <Experience/>
      </div>

      <div className="bg-primary">
      <Tech/>
      </div>

      <div className="bg-primary">

      <Works/>

      </div>

      <Feedbacks/>

      <div className="relative z-0">

      <Contact/>
      <StarsCanvas/>

      </div>
   </div>
   </BrowserRouter>
  )
}

export default App
