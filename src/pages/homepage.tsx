import Navbar from "../components/navbar"
import SideLeft from '../components/homeComp/kiri'
import SideRight from '../components/homeComp/kanan'
import PageTransition from '../config/pageTransition'
const Homepage = () => {
    return (
        <section className="w-full h-[100vh] relative font-Opens">
            <Navbar />
            <div className="flex">
                <SideLeft />
                <SideRight />
            </div>
        </section>
    )
}

export default Homepage