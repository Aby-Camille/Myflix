"use client"
import axios from "axios";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    // Switch function between login and register.
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, [])

    // Register function (send POST request to /api/register).
    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });
        } catch(error) {
            console.log(error);
        }
    }, [email, name, password]);

    return (
        <div className = "h-full w-full relative bg-[url('/images/bg-img.jpg')] bg-center bg-cover z-1">
            <div className="bg-black w-full h-full bg-opacity-30">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo myflix" className="h-16"/>
                </nav>
                <div className="flex justify-center">
                    <form className="bg-black bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-2xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                            <Input label="Username" onChange={(ev: any) => setName(ev.target.value)} id="name" value={name} />
                            )}
                            <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
                            <Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password} />
                        </div>
                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Myflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;