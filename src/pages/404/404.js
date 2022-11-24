import React from 'react'
import { Link } from 'react-router-dom'
import './404.css';

export default function NotFound(){
    document.title = 'Not Found'
    return (
        <main className='main--wrapper'>
            <h1 className='main--title'>404</h1>
            <h2 className='main--subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='main--back' to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}