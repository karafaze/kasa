import React from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import Banner from '../../components/banner/Banner'
import kasaData from '../../datas-about.json'

import './about.css'

export default function About(){
    // setting document title
    document.title = 'About us'
    return (
        <main>
            <Banner for={'about'} />
            <div className='dropdown-list'>
                <Dropdown dropDownItems={{
                    title:"Fiabilité",
                    items:kasaData.fiabilite
                }}/>
                <Dropdown dropDownItems={{
                    title:"Respect",
                    items:kasaData.respect
                }}/>
                <Dropdown dropDownItems={{
                    title:"Service",
                    items:kasaData.service
                }}/>
                <Dropdown dropDownItems={{
                    title:"Securité",
                    items:kasaData.securite
                }}/>
            </div>
        </main>
        )
}