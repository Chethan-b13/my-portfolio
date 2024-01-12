import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import HomePageInfo from '@/components/HomePage/HomePageInfo';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Chethan B</title>
        <meta property="og:title" content="Chethan B | Portfolio" />
        <meta property="og:description" content="Passionate Data Scientist,Full Stack Developer and Tech Lead | Expert in Python, machine learning, NLP, 
       SQL, Django, Flask, NextJs" />
        <meta property="og:image" content="./img4.jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        {/* Other Open Graph tags */}
      </Head>


      <div className="pageLayout">
        <HomePageInfo />
      </div>
      {/* Engineering Tomorrow: One Line of Code at a Time. */}
      {/* Building Tomorrow: Tech Tales by [Your Name] */}

    </div>
  )
}

export default Home