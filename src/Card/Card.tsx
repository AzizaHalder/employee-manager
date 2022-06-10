import React from 'react'

// Object properties
interface Props {
    title: string;
    className: string;
}

export const Card: React.FC<Props> = ({ title, className}) => {
    return (
        <section className={className}>
            <h1 className='card-header'>{title}</h1>
            <div>Whatcha looking at...</div>
            <footer></footer>
        </section>
    )
};