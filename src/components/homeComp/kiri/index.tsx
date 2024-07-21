import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LeftCompHome = () => {
    return (
        <section className="w-[65%] h-[100vh] flex justify-center items-center relative font-Opens">
            <main className="relative left-0 pl-20 w-[122%]">
                <h2 className="absolute left-20 -top-[170px] font-Logo font-black text-5xl text-purple-700">G</h2>
                <h1 className="text-5xl font-black">Saya Adalah <span className="text-purple-700">Grantly Sorongan</span></h1>
                <p className="font-bold my-2 ">Saya Seorang Developer / UI</p>
                <p className="text-sm my-5">Halo, perkenalkan nama saya Grantly Antonio Edward Sorongan. Saya adalah seorang Web Developer dan juga saya adalah Mahasiswa di Universitas Klabat.</p>
                <div className="flex gap-x-6">
                    <NavLink to="#"><FaInstagram size={30} className="text-purple-700"/></NavLink>
                    <NavLink to="#"><FaWhatsapp size={30} className="text-purple-700"/></NavLink>
                    <NavLink to="#"><FaLinkedin size={30} className="text-purple-700"/></NavLink>
                </div>
            </main>
        </section>
    )
}

export default LeftCompHome