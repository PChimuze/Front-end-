import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-red-800 flex justify-center items-center">
            <header className="p-4">
                <nav>
                    <ul className="flex list-none p-0 m-0">
                        <li className="mr-5">
                            <Link to="/" className="text-white hover:text-neutral-950">PAGINA INICIAL</Link>
                        </li>
                        <li className="mr-5">
                            <Link to="/login" className="text-white hover:text-neutral-950">INICIAR A SESSAO</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="text-white hover:text-neutral-950">INCREVA-SE</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
