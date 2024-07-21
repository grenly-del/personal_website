

import { FaBook  } from 'react-icons/fa'
import { FaPerson } from "react-icons/fa6"
import { useAppDispatch } from '../../../app/hooks'
import {postData} from '../../../features/aboutContent/content'
import { AppDispatch } from '../../../app/store'

const KiriAboutComp = () => {
    const dispatch:AppDispatch = useAppDispatch()
    
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>, target:string) => {
        e.preventDefault()
        dispatch(postData(target))
    }
    return (
        <section className="w-full h-full flex justify-center items-center relative font-Opens mt-24">
            <main className="relative w-full">
                <h2 className="absolute -top-[96px] font-Logo font-black text-5xl text-purple-700">G</h2>
                <h1 className="text-5xl font-black">Saya Sekarang Berkuliah Di <span className="text-purple-700">Universitas Klabat</span></h1>
                <p className="font-bold my-2 ">Semester 3, jurusan informatika</p>
                <p className="text-sm my-5">Halo, perkenalkan nama saya <b className='text-purple-700'>Grantly Antonio Edward Sorongan.</b> Saya adalah seorang <i><b>Web Developer</b></i> dan juga saya adalah  <i><b>Mahasiswa</b></i> di <b>Universitas Klabat.</b></p>
                <div className='flex gap-x-7 [&>div]:w-[150px] mb-6'>
                    <div>
                        <h1 className='font-bold text-sm'>Umur</h1>
                        <p className='text-xs'>19 Tahun</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-sm'>Negara</h1>
                        <p className='text-xs'>Indonesia</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-sm'>Email</h1>
                        <p className='text-xs'>snakeeys070@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-sm'>No.HP</h1>
                        <p className='text-xs'>089527173365</p>
                    </div>
                </div>
                <div className="flex gap-x-6">
                    <button onClick={(e) => handleClick(e, 'pendidikan')} className={'flex gap-x-1 transition-all group border-2 border-gray-800 bg-gray-800 text-white font-semibold px-3 py-2 rounded-sm hover:text-black hover:bg-transparent'}><FaBook size={23} className="text-white transition-all group-hover:text-black"/>Pendidikan</button>
                    <button onClick={(e) => handleClick(e, 'pengalaman')} className={'flex group gap-x-1 transition-all border-2 border-gray-800 bg-gray-800 text-white font-semibold px-3 py-2 hover:text-black hover:bg-transparent rounded-sm'}><FaPerson size={23} className="text-white transition-all group-hover:text-black"/>Pengalaman</button>
                    <button onClick={(e) => handleClick(e, 'pengetahuan')} className={'flex group gap-x-1 transition-all border-2 border-gray-800 bg-gray-800 text-white font-semibold px-3 py-2 hover:text-black hover:bg-transparent rounded-sm'}><FaPerson size={23} className="text-white transition-all group-hover:text-black"/>Pengetahuan</button>
                </div>
                <div className='font-Mono mt-6 grid grid-cols-3'>
                    <div className='flex gap-x-1 items-center'>
                        <h1 className='text-4xl font-black'>7</h1>
                        <div>
                            <p className='text-sm'>Tahun</p>
                            <p className='text-sm'>Pengalaman</p>
                        </div>
                    </div>
                    <div className='flex gap-x-1 items-center'>
                        <h1 className='text-4xl font-black'>12</h1>
                        <div>
                            <p className='text-sm'>Teknologi</p>
                            <p className='text-sm'>Dikuasai</p>
                        </div>
                    </div>
                    <div className='flex gap-x-1 items-center'>
                        <h1 className='text-4xl font-black'>3</h1>
                        <div>
                            <p className='text-sm'>Projek</p>
                            <p className='text-sm'>Dibuat</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default KiriAboutComp

