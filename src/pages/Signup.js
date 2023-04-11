import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Signup = () => {
    const [data, setData] = useState(initialState);

    const { name, email, password, confirmPassword } = data;
    const router = useNavigate();

    const ChangeEvent = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const signUp = async () => {
        await axios.post('http://localhost:8000/api/auth/signup', {
            ...data,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            signUp();

            router('/login');
        } catch (error) {
            console.log(error);
        }
    };

    console.log(data);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Name
                        </label>
                        <input
                            onChange={(e) => ChangeEvent(e)}
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            onChange={(e) => ChangeEvent(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            name="password"
                            onChange={(e) => ChangeEvent(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="******************"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            name="confirmPassword"
                            onChange={(e) => ChangeEvent(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="******************"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            to={'/login'}
                        >
                            Login
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Signup;
