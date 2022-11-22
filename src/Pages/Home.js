import React from 'react'
import Banner from '../Components/Banner/Banner'
import Brand from '../Components/Brand/Brand'
import Category from '../Components/Category/Category'
import Feature from '../Components/Feature/Feature'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/NavBar'
import FeaturedProducts from '../Components/Products/FeaturedProducts'
import NewProducts from '../Components/Products/NewProducts'
import Review from '../Components/Review/Review'
import Support from '../Components/Support/Support'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Brand/>
    <Feature/>
    <Category/>
    <Support data={{title:"Call us for any queries",phone:"+8801938639567"}}/>
    <FeaturedProducts/>
    <Support data={{title:"Subscribe Our Newsletter",input:"Enter your Email"}}/>
    <NewProducts/>
    <Review/>
    <Footer/>

    </>
  )
}

export default Home