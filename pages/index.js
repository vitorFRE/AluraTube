import Head from 'next/head';
import React from 'react';
import Footer from '../src/components/home/Footer';
import Header from '../src/components/home/Header';
import Menu from '../src/components/home/Menu';
import TimeLine from '../src/components/TimeLine';

export default function Home() {
  const [valorFiltro, setValorFiltro] = React.useState('');
  return (
    <div>
      <Head>
        <title>AluraTube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
      <Header />
      <TimeLine searchValue={valorFiltro} />
      <Footer />
    </div>
  );
}
