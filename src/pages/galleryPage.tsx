import Navbar from "../components/aboutComp/nav"
import HeroGallery from "../components/GalleryComp/heroComp"


const GalleryPage = () => {
    return (
        <section className="w-full ">
            <main className="w-full">
                <div className="relative">
                    <Navbar />
                </div>
                <div className="relative">
                    <HeroGallery />
                </div>
            </main>
        </section>
    )
}

export default GalleryPage