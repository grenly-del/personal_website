
import AboutLeft from '../components/aboutComp/kiri'
import Navbar from "../components/aboutComp/nav"
import Content from '../components/aboutComp/tabs'

const AboutSubPage= () => {
    return(
        
        <section className='w-full relative font-Opens overflow-hidden'>
            <Navbar />
            <main className='flex px-20 gap-10'>
                <div className='w-[45%]'>
                    <AboutLeft  />
                </div>
                <div className='w-[55%]'>
                    <Content />
                </div>
            </main>
        </section>
    )
}


export default AboutSubPage