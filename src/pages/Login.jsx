import React, { useState } from 'react';
import Header from '../Components/header'; 
import Footer from '../Components/footer';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Formulário enviado:', formData);
     
    };

    return (
    <div>
        <Header className="bg-gray-800 text-white py-2 px-4 w-full text-center" />
        <div className="bg-orange-950 min-h-screen flex flex-col items-center justify-center text-gray-700">
          
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-8 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md text-gray-800"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md text-gray-800"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        href="/home">
                        Entrar
                    </button>
                </form>
            </div>
           
        </div>
        <Footer/>
        </div>
    );
}

export default Login;
