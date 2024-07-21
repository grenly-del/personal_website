

const HeroGallery = () => {
    return (
        <section className="w-[90%] h-[100vh] relative bg-[url('./image/bg-1.jpg')] bg-cover bg-center">
            <main className="w-full h-full flex flex-col justify-center items-center relative text-white">
                <h1 className="font-Edu font-extrabold text-4xl">Gallery Saya</h1>
                <h3 className="font-Mono font-bold mt-9">FotoGrafi, Design, Foto Saya, Projek Design</h3>
                <p className="font-Mono text-sm font-extralight mt-2 w-[70%] text-center">Selamat datang di gallery pribadi saya, silahkan lihat semua aktifias, dan kehidupan saya di dalam Gallery ini.</p>
                <div className="flex gap-10 mt-5">
                    <button className="w-[150px] py-2 bg-white text-black font-semibold">Lihat Semua</button>
                    <button className="w-[150px] py-2 bg-white text-black font-semibold">Lihat Bagian</button>
                </div>
            </main>
        </section>
    )
}

export default HeroGallery