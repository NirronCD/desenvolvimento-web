import React from 'react';

export function Navigation() {
    return (
        <nav className="nav-container">
            <ul className="navlinks">
                <li><a className="effect-link" href="https://store.steampowered.com/">Home</a></li>
                <li><a className="effect-link" href="https://store.steampowered.com/about/">Sobre</a></li>
                <li><a className="effect-link" href="https://help.steampowered.com/en/">Contato</a></li>
            </ul>
        </nav>
    );
}