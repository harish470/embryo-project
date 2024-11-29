import React from 'react'
import Navbar from './components/Nav/Navbar'
import Header from './components/Headedr/header'
import Cart from './components/Cart/Cart'
import Text from './components/Text/Text'
import Card from './components/Card/Card'
import Let from './components/Latext/Let'
import Em from './components/Employe/Em'
import Footer from './components/Footer/Footer'
function Homepage() {
    const cardsData = [
        {
          title: "Tailored Software Solutions",
          items: [
            "Software Development",
            "Mobile Applications",
            "Product Engineering",
            "MVP Development",
            "Development Services",
            "Containerization Services",
          ],
        },
        {
          title: "DevOps",
          items: [
            "Cloud Infrastructure",
            "AWS Consulting",
            "Continuous Integration/Continuous Deployment",
            "Development Services",
            "Containerization Services",
            "Maintenance and Support",
            "Project Management",
          ],
        },
        {
          title: "Advisory",
          items: [
            "Project Management",
            "Digital Transformation",
            "Technology Consultation",
            "Application and Architecture Review",
            "General Project and Roadmap Consultation",
            "AWS Consulting",
            "Continuous",
          ],
        },
      ];
    
      return (
        
        <>
      <div className="container" >
     <Navbar/>
       <Header/></div>
  
  <div className="div-element">
      <Cart title='eCommerce' decription='Retail and enterprise eCommerce solutions with web and mobile app.'/>
    <Cart title='Digitization' decription='Achieve digital goals by using ready to deploy or custom solutions.'/>
    <Cart title='Integration' decription='Achieve digital goals by using ready to deploy or custom solutions.'/>
    <Cart title='Visibility' decription='Get insights of system performance with insight plugins.'/>
      </div>
      <Text/>
      <div className="container-box">
      {cardsData.map((card, index) => (
            <Card key={index} title={card.title} items={card.items} />
          ))}
    </div>
    <Let/>
    <div className="container77">
   <Em name='Harish rajpoot' post='Developer'/>
   <Em name='Vindod chauhan' post='Developer'/>
   <Em name='Pawan Parhar' post='Developer'/>
   <Em name='Raman thakur' post='Developer'/>
   <Em name='Hitesh rajpoot' post='Developer'/>
   </div>
   <Footer/>
    </>
    
      )
}

export default Homepage