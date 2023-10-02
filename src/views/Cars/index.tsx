import { cars } from '../../data/data';
import { useState, useEffect, useRef } from 'react';
import './styles.scss';
import { IoIosArrowForward } from 'react-icons/io';

type Car = {
    name: string;
    price: string;
    image: string;
    caption: string;
}

export const Cars = (): JSX.Element => {
    const [brand, setBrand] = useState<Car[]>();
    const [activeBrand, setActiveBrand] = useState('');
    const [car, setCar] = useState<Car>();

    const lamborghiniRef = useRef<HTMLImageElement>(null);
    const porscheRef = useRef<HTMLImageElement>(null);
    const ferrariRef = useRef<HTMLImageElement>(null);
    const teslaRef = useRef<HTMLImageElement>(null);
    const vwRef = useRef<HTMLImageElement>(null);
    const audiRef = useRef<HTMLImageElement>(null);
    const bmwRef = useRef<HTMLImageElement>(null);
    const maseratiRef = useRef<HTMLImageElement>(null);

    const handleBrandClick = (e: React.MouseEvent, brand: Car[]) => {
        const target = e.target as HTMLImageElement;
        setActiveBrand(target.id);
        setBrand(brand);
        
    }

    useEffect(() => {
        const refs = [lamborghiniRef.current, porscheRef.current, ferrariRef.current, teslaRef.current, vwRef.current, audiRef.current, bmwRef.current, maseratiRef.current];

        refs.forEach(ref => {
            if (ref?.id === activeBrand) {
                ref.classList.add('active');
            } else {
                ref?.classList.remove('active');
            }
        })
    
    }, [activeBrand]);

    return (
        <div className="cars-container">
            <h1>Find the car for you.</h1>

            <div className="cars-wrapper">
                <div className="brands">
                    <img src={require('../../assets/logos/lamborghini-logo.png')} className="brand" id="Lamborghini" alt="lamborghini logo" ref={lamborghiniRef} onClick={(e) => handleBrandClick(e, cars.lamborghini)} />
                    <img src={require('../../assets/logos/porsche-logo.png')} className="brand" id="Porsche" alt="porsche logo" ref={porscheRef} onClick={(e) => handleBrandClick(e, cars.porsche)} />
                    <img src={require('../../assets/logos/ferrari-logo.png')} className="brand" id="Ferrari" alt="ferrari logo" ref={ferrariRef} onClick={(e) => handleBrandClick(e, cars.ferrari)} />
                    <img src={require('../../assets/logos/tesla-logo.png')} className="brand" id="Tesla" alt="tesla-logo" ref={teslaRef} onClick={(e) => handleBrandClick(e, cars.tesla)} />
                    <img src={require('../../assets/logos/vw-logo.png')} className="brand" id="Volkswagen" alt="volkswagen logo" ref={vwRef} onClick={(e) => handleBrandClick(e, cars.vw)} />
                    <img src={require('../../assets/logos/audi-logo.png')} className="brand" id="Audi" alt="audi logo" ref={audiRef} onClick={(e) => handleBrandClick(e, cars.audi)} />
                    <img src={require('../../assets/logos/bmw-logo.png')} className="brand" id="BMW" alt="bmw logo" ref={bmwRef} onClick={(e) => handleBrandClick(e, cars.bmw)} />
                    <img src={require('../../assets/logos/maserati-logo.png')} className="brand" id="Maserati" alt="maserati logo" ref={maseratiRef} onClick={(e) => handleBrandClick(e, cars.maserati)} />
                </div>

                <div className="cars">
                    {brand?.map((car, index) => {
                        return (
                            <div className="car" key={index} onClick={() => setCar(car)}>
                                <p>{car.name} <IoIosArrowForward /></p>
                            </div>
                        )
                    })}
                </div>

                {car && 
                    <div className="car-details">
                        <div className="name-banner">
                            <h2>{car.name}</h2>
                        </div>
                        <p>${car.price}</p>
                        <img src={require(`../../${car.image}`)} alt={car.name} />
                        <p>{car.caption}</p>
                    </div>
                }
            </div>
        </div>
    )
}