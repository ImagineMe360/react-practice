import React, { useState } from "react"
// import Final from "./3-conditional-rendering/final/3-show-hide";
// import Setup from "./3-conditional-rendering/setup/3-show-hide";
import TourList from "./projects/02-tours/TourList"
import NavIcon from "./projects/02-tours/NavIcon"
import NavBar from "./projects/02-tours/NavBar"
import Reviews from "./projects/02-tours/Reviews"

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [tourIsOpen, setTourIsOpen] = useState(false)
  const [reviewIsOpen, setReviewIsOpen] = useState(false)

  let navClass = "open"
  if (navIsOpen) {
    navClass = "open"
  } else {
    let navClass = "close"
  }

  let allNavClass = "nav-bar-container " + navClass

  const openNav = () => {
    setNavIsOpen(!navIsOpen)
  }

  const openTours = () => {
    setTourIsOpen(true)
    setNavIsOpen(false)
    setReviewIsOpen(false)
  }

  const openReviews = () => {
    setReviewIsOpen(true)
    setNavIsOpen(false)
    setTourIsOpen(false)
  }
  return (
    <div className='container'>
      <div className='nav-icon-container'>
        <NavIcon openNav={openNav} />
      </div>

      {/* {navIsOpen ? (navClass = "open") : (navClass = "close")} */}

      <div className={allNavClass}>
        <NavBar openTours={openTours} openReviews={openReviews} />
      </div>

      <section className='head'>
        <h1>Our Tours</h1>
        <div className='underline'></div>
      </section>
      {tourIsOpen && <TourList />}
      {reviewIsOpen && (
        <div className='review-scroll-track'>
          <Reviews />
        </div>
      )}
    </div>
  )
}

export default App
