import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutSection/Data'
import Footer from '../components/Footer.js'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
           <Sidebar isOpen={isOpen} toggle={toggle} /> 
           <Navbar toggle={toggle} />
           <HeroSection />
           <AboutSection {...homeObjOne}/>
           <AboutSection {...homeObjTwo}/>
           <AboutSection {...homeObjThree}/>
           <Footer />
        </React.Fragment>
    );
}

export default Home;
