import {Routes, Route, useLocation} from 'react-router-dom'
import Homepage from '../pages/homepage'
import AboutPage from '../pages/aboutSubPage' 
import { AnimatePresence } from 'framer-motion'
import PageTransition from './pageTransition'
import GalleryPage from '../pages/galleryPage'
import { useEffect, useState } from 'react'







const AppRoutes = () => {
    const location:any = useLocation()
    return (
        <>
            <AnimatePresence mode='wait' initial={false} >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
                <Route path="about" element={ <PageTransition><AboutPage /></PageTransition>} />
                <Route path="gallery" element={<GalleryPage /> } />
            </Routes>
            </AnimatePresence>
                    </>
    )
}

export default AppRoutes