import './styles.scss';

type Props = {
    setView: (view: string) => void;
}
export const Nav = ({ setView }: Props): JSX.Element => {
    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setView(target.textContent as string);
    }

    return (
        <nav>
            <div className="nav-item" onClick={(e) => handleClick(e)}>Home</div>
            <div className="nav-item" onClick={(e) => handleClick(e)}>Cars</div>
            <div className="nav-item" onClick={(e) => handleClick(e)}>Services</div>
            <div className="nav-item" onClick={(e) => handleClick(e)}>About</div>
            <div className="nav-item" onClick={(e) => handleClick(e)}>Contact</div>
        </nav>
    )
}