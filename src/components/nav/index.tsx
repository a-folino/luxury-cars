import { useEffect, useRef } from 'react';
import './styles.scss';

type Props = {
    setView: (view: string) => void;
    view: string;
}

export const Nav = ({ setView, view }: Props): JSX.Element => {
    const homeRef = useRef<HTMLDivElement>(null);
    const carsRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);


    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setView(target.textContent as string);
    }

    useEffect(() => {
        const refs = [homeRef.current, carsRef.current, servicesRef.current, aboutRef.current, contactRef.current];

        if (view === '') return setView('Home');

        refs.forEach((ref) => {
            if (ref?.textContent === view && ref.textContent === 'About') {
                ref.classList.add('active-about');
            } else if (ref?.textContent === view) {
                ref?.classList.add('active');
            } else {
                ref?.classList.remove('active');
                ref?.classList.remove('active-about');
            }
        })
    }, [view, setView])

    return (
        <nav>
            <div className="nav-item" onClick={(e) => handleClick(e)} ref={homeRef}>Home</div>
            <div className="nav-item" onClick={(e) => handleClick(e)} ref={carsRef}>Cars</div>
            <div className="nav-item" onClick={(e) => handleClick(e)} ref={servicesRef}>Services</div>
            <div className="nav-item" onClick={(e) => handleClick(e)} ref={aboutRef}>About</div>
            <div className="nav-item" onClick={(e) => handleClick(e)} ref={contactRef}>Contact</div>
        </nav>
    )
}