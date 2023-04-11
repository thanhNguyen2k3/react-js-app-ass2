import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const AdminDashboard = () => {
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const result = await axios.get('http://localhost:8000/api/products');
        setData(result.data);

        console.log(result.data);
    };

    const handleRemove = async (id) => {
        const request = await axios.delete(`http://localhost:8000/api/products/${id}`);
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="mt-10 w-[1260px] m-auto pb-7">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <tr
                                key={product._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">{product.description}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link
                                        to={`/admin/update/${product._id}`}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleRemove(product._id)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
