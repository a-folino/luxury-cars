import { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { IoMenuSharp } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

type Props = {
    setView: (view: string) => void;
    view: string;
}

export const Nav = ({ setView, view }: Props): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState(false);
    const homeRef = useRef<HTMLDivElement>(null);
    const carsRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setView(target.textContent as string);
    }

    const handleMenuClick = () => {
        const menu = mobileMenuRef.current as HTMLDivElement;
        menu.classList.toggle('menu-open');
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const refs = [homeRef.current, carsRef.current, servicesRef.current, aboutRef.current, contactRef.current];

        if (view === '') return setView('Home');
        if (window.innerWidth > 700) {
            refs.forEach((ref) => {
                if (ref?.textContent === view) {
                    ref.classList.add('active-nav');
                } else {
                    ref?.classList.remove('active-nav');
                }
            })  
        }
        
    }, [view, setView])

    return (
        <>
        {window.innerWidth < 700 ?
            <div className="hamburger-menu" onClick={() => handleMenuClick()}>
                {!menuOpen ? <IoMenuSharp/> : <IoClose /> }
            </div> :
            <nav>
                <div className="nav-item" onClick={(e) => handleClick(e)} ref={homeRef}>Home</div>
                <div className="nav-item" onClick={(e) => handleClick(e)} ref={carsRef}>Cars</div>
                <div className="nav-item" onClick={(e) => handleClick(e)} ref={servicesRef}>Services</div>
                <div className="nav-item" onClick={(e) => handleClick(e)} ref={aboutRef}>About</div>
                <div className="nav-item" onClick={(e) => handleClick(e)} ref={contactRef}>Contact</div>
            </nav>
        }

        <div className="hamburger-menu-open" onClick={() => handleMenuClick()} ref={mobileMenuRef}>
            <div className="mobile-menu-item" onClick={(e) => handleClick(e)} ref={homeRef}>Home</div>
            <div className="mobile-menu-item" onClick={(e) => handleClick(e)} ref={carsRef}>Cars</div>
            <div className="mobile-menu-item" onClick={(e) => handleClick(e)} ref={servicesRef}>Services</div>
            <div className="mobile-menu-item" onClick={(e) => handleClick(e)} ref={aboutRef}>About</div>
            <div className="mobile-menu-item" onClick={(e) => handleClick(e)} ref={contactRef}>Contact</div>
        </div>
        </>
    )
}