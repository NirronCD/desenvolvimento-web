import React from 'react';

export function Article({ title, author, date, children }) {
    return (
        <article className="card">
            <div className="card-header flexcenter">
                <h2>{title}</h2>
                <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
                    Por: <strong>{author}</strong>
                </p>
                <time>{date}</time>
            </div>

            <div className="card-content">
                {children}
            </div>
        </article>
    );
}