import React from 'react';

export function Sidebar() {
    return (
        <aside className="sidebar flexcenter">
            <h3>Updates relacionados</h3>
            <ul className="navlinks-sidebar">
                <li><a className="effect-link" href="#update-season4">The Fourth Season</a></li>
                <li><a className="effect-link" href="#update-medal">2026 Service Medal</a></li>
                <li><a className="effect-link" href="#update-bees">The Year of the Bees</a></li>
            </ul>
        </aside>
    );
}