import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="fixed -right-6 top-60 z-50">
            <ul className="flex flex-col gap-8 items-start">
                <li><NavLink to="/" className="bg-black text-white transition-all font-bold py-2 px-10 rounded-s-full relative hover:-left-2">Home</NavLink></li>
                <li><NavLink to="/about" className="bg-black text-white transition-all font-bold py-2 px-10 rounded-s-full relative hover:-left-2">About</NavLink></li>
                <li><NavLink to="/gallery" className="bg-black text-white transition-all font-bold py-2 px-10 rounded-s-full relative hover:-left-2">Gallery</NavLink></li>
                <li><NavLink to="#" className="bg-black text-white transition-all font-bold py-2 px-10 rounded-s-full relative hover:-left-2">Project</NavLink></li>
                <li><NavLink to="#" className="bg-black text-white transition-all font-bold py-2 px-10 rounded-s-full relative hover:-left-2">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header