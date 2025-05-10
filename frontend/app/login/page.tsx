'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {loginAdmin} from '@/lib/api';


const LoginPage = () => {
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('');
    const router=useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); 
        seterror('');
        try{
            // console.log(username,password);
            const token = await loginAdmin(username,password);
            localStorage.setItem('token', token);
            router.push('/admin');
        } catch (error) {
            console.error('Login failed:', error);
            seterror('Invalid username or password');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-black mb-4">Login</h1>
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e)=>setusername(e.target.value)}
                value={username}
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e)=>setpassword(e.target.value)}
                value={password}
            />
            </div>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
            Login
            </button>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        </form>
        </div>
    );
}

export default LoginPage;