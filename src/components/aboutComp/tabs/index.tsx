import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import './style.css'
import { SiVite, SiAdobephotoshop, SiTailwindcss, SiRedux, SiExpress, SiMongoose, SiMongodb   } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs   } from "react-icons/fa";
import { DiJavascript1  } from "react-icons/di";


const TabsContent = () => {
    const data = useAppSelector((state: RootState) => state.contentAbout.value);
    const [contentObj, setContentObj] = useState<Content[keyof Content] | null>(null);

    const element = useRef<HTMLDivElement | null>(null)

    interface Item {
        level: string;
        tanggal: string;
        tahun: string;
    }

    interface SubContent {
        judul: string;
        deskribsi: string;
        items: Item[];
    }

    interface Content {
        pendidikan: SubContent;
        pengalaman: SubContent;
    }

    const content: Content = {
        pengalaman: {
            judul: 'Pengalaman',
            deskribsi: 'Ini adalah pengalaman saya dalam bidang Komputer.',
            items: [
                {
                    level: 'Design',
                    tanggal: '2016 - sekarang',
                    tahun: 'Autodidak | Freelance'
                },
                {
                    level: 'UI/UX',
                    tanggal: '2021 - Sekarang',
                    tahun: 'Autodidak'
                },
                {
                    level: 'Frontend Developer',
                    tanggal: '2021 - Sekarang',
                    tahun: 'Autodidak'
                },
                {
                    level: 'Backend Developer',
                    tanggal: '2022 - Sekarang',
                    tahun: 'Autodidak'
                }
            ]
        },
        pendidikan: {
            judul: 'Pendidikan',
            deskribsi: 'Berikut adalah pendidikan yang pernah saya lewati, dari TK sampai saat ini.',
            items: [
                {
                    level: 'TK GPDI Treman',
                    tanggal: '2009 - 2010',
                    tahun: '5 - 6 Tahun'
                },
                {
                    level: 'SDN Inpres Treman',
                    tanggal: '2010 - 2016',
                    tahun: '6 - 12 Tahun'
                },
                {
                    level: 'SMPN 2 Kauditan',
                    tanggal: '2016 - 2019',
                    tahun: '12 - 15 Tahun'
                },
                {
                    level: 'SMKN 1 Airmadidi',
                    tanggal: '2019 - 2022',
                    tahun: '15 - 18 Tahun'
                },
                {
                    level: 'Universitas Klabat',
                    tanggal: '2023 - Sekarang',
                    tahun: '19 Tahun - Sekarang'
                }
            ]
        },
    };

    useEffect(() => {
        if (data) {
            const selectedContent = content[data as keyof Content];
            setContentObj(selectedContent);
        }
    }, [data]);


    if (!contentObj) {
        return (
         <div 
         ref={element}  
         className='w-[80%] h-[80%] overflow-auto py-4'>
            <h1 className='text-lg font-bold ml-1'>Pengetahuan</h1>
            <p className='text-sm ml-1 mb-5'>Berikut ini adalah teknologi yang saya pelajari dan pahami. Teknologi berikut terdapat, Framework, Bahasa Pemograman, Database.</p>
            <main id='tabs-content' className='grid grid-cols-3 [&>div]:m-auto [&>div]:w-32 [&>div]:h-32 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:bg-[#f3f3f3] gap-8 w-full '>
                <div data-content="React.JS"><FaReact size={50} /></div>
                <div data-content="Vite.JS"><SiVite size={50} /></div>
                <div data-content="Node.JS"><FaNodeJs size={50} /></div>
                <div data-content="HTML"><FaHtml5 size={50} /></div>
                <div data-content="CSS"><FaCss3Alt size={50} /></div>
                <div data-content="JavaScript"><DiJavascript1 size={50} /></div>
                <div data-content="MongoDB"><SiMongodb size={50} /></div>
                <div data-content="Tailwind.CSS"><SiTailwindcss size={50}/></div>
                <div data-content="Mongoose"><SiMongoose size={50}/></div>
                <div data-content="React.Redux"><SiRedux size={50}/></div>
                <div data-content="Express.JS"><SiExpress size={50}/></div>
                <div data-content="Photoshop"><SiAdobephotoshop size={50}/></div>
            </main>
         </div>
        ) // Atau bisa mengganti dengan loader atau placeholder
    }

    return (
        <div 
        className='mt-14'
        
         >
            <main>
                <h1 
                className='text-lg font-bold'>{contentObj.judul}</h1>
                <p className='text-sm'>{contentObj.deskribsi}</p>
                <main className='mt-5 grid grid-cols-2 gap-5'>
                    {contentObj.items.map((item, index) => (
                        <div key={index} className='py-3 px-3 w-[250px] rounded-md bg-[#f3f3f3] drop-shadow-md shadow-black'>
                            <p className='text-sm font-bold text-purple-700'>{item.tanggal}</p>
                            <h1 className='font-bold text-xl mb-5'>{item.level}</h1>
                            <div className='flex items-center text-xs font-semibold text-purple-700'>
                                <div className='bg-purple-700 w-[7px] h-[7px] rounded-full mr-2'></div>{item.tahun}
                            </div>
                        </div>
                    ))}
                </main>
            </main>
        </div>
    );
};

export default TabsContent;
