import React from 'react';
import { Navigation } from './Navigation';

export function Header() {
    return (
        <header className="header flexcenter">
            <h1>Updates CS2</h1>
            <Navigation />
        </header>
    );
}