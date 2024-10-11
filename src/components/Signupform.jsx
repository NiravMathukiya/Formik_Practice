import React, { useState } from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            gender: '',
            address: '',
            age: '',
            username: '',
            password: '',
            dob: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            let errors = {};

            // Example validation logic
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.age || values.age <= 0) {
                errors.age = 'Required age and age must be greater than or equal to 0';
            } else if (values.age < 0) {
                errors.age = 'Age cannot be negative';
            }
            if (!values.mobile) {
                errors.mobile = 'Required';
            } else if (values.mobile.length < 10) {
                errors.mobile = 'Mobile number must be at least 10 digits';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(values.password)) {
                errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            }
            if(!values.username){
                errors.username = 'username Required';
            }

return errors;
        },
    });

const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result); // Set the image preview state
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
};

return (
    <div className='md:w-screen w-screen md:flex md:align-items-center md:justify-center py-6 '>
        <form onSubmit={formik.handleSubmit} className='flex w-screen flex-col gap-2 sm:w-1/2 justify-start md:border-2 md:border-slate-300 items-start p-6 text-start bg-white rounded-2xl shadow-2xl'>
        <h1 className='text-center w-full text-3xl underline'>Signup Form</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className='border p-2 rounded w-full'
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className='border p-2 rounded w-full'
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="mobile">Mobile</label>
            <input
                type="text"
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
                className='border p-2 rounded w-full'
            />
            {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-red-500">{formik.errors.mobile}</div>
            ) : null}

            <label htmlFor="gender">Gender</label>
            <select
                id="gender"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                className='border p-2 rounded w-full'
            >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                className='border p-2 rounded w-full'
            />
            {formik.touched.age && formik.errors.age ? (
                <div className="text-red-500">{formik.errors.age}</div>
            ) : null}

            <label htmlFor="image">Profile Image</label>
            <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className='border pl-2 pt-1 rounded w-full'
            />


            {/* This div will display the image preview if an image is uploaded */}
            {imagePreview && (
                <div className="my-2">
                    <h3>Image Preview:</h3>
                    <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover border-2 border-red-500 p-1" />
                </div>
            )}

            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className='border p-2 rounded w-full'
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className='border p-2 rounded w-full'
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
            ) : null}

            <label htmlFor="dob">Date of Birth</label>
            <input
                type="date"
                id="dob"
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className='border p-2 rounded w-full'
            />

            <button type="submit" className='w-full bg-sky-400 mt-6 rounded px-4 py-2'>Submit</button>
        </form>
    </div>
);
};

export default SignupForm;
