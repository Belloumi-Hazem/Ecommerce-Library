import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './ui/Highlight'

const Highlights = () => {
  return (
    <>
    <section id='highlights'>
        <div className='container'>
            <div className="row">
                <h2 className="section__title">
                    why choose <span className='purple'>Library</span>
                </h2>
                <div className='highlight__wrapper'>
                    <Highlight paragraph="Get access to the book you purchased online instantly." subtitle="Easy and Quick" icon={<FontAwesomeIcon icon="bolt"/>}/>
                    <Highlight paragraph="Library has books in all your favourite categories." subtitle="10,000+ books" icon={<FontAwesomeIcon icon="book-open"/>}/>
                    <Highlight paragraph="Get your hands on popular books for as little as 10 TND." subtitle="Affordable" icon={<FontAwesomeIcon icon="tags"/>}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Highlights