import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
const Home = () => {
    return (

        <div>
            <Header />

            <div className="bg-gradient-to-br from-red-950 to-red-950 min-h-screen flex flex-col items-center justify-center text-white">
                <p className="text-center text-4xl font-bold">
                    Bem-vindo à página inicial!
                </p>
               
        </div>
        <Footer/>
        </div>
    );
}

export default Home;
