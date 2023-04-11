import axios from 'axios';
import { useState } from 'react';

const Category = () => {
    const [category, setCategory] = useState('');

    const requestCategory = async () => {
        try {
            const ressult = await axios.post('http://localhost:8000/api/categories', {
                name: category,
            });

            console.log(ressult);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = () => {
        requestCategory();
    };

    console.log(category);

    return (
        <div className="w-[1260px] m-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Category</label>
            <select
                required
                onChange={(e) => setCategory(e.target.value)}
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option defaultValue>Choose a Category</option>
                <option value="Loại 1">Loại 1</option>
                <option value="Loại 2">Loại 2</option>
                <option value="Loại 3">Loại 3</option>
            </select>

            <button
                onClick={handleSubmit}
                className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Create Category
            </button>
        </div>
    );
};

export default Category;
