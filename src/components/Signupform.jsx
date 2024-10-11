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
            if (!values.mobile) {
                errors.mobile = 'Required';
            } else if (values.mobile.length < 10) {
                errors.mobile = 'Mobile number must be at least 10 digits';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }

            return errors;
        },
    });

    const handleImageChange = (files) => {
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the image preview state
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    return (
        <div className='w-screen flex align-items-center justify-center m-6'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2 w-1/2 justify-start border-2 border-slate-300 items-center p-6 text-start'>
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

                <label htmlFor="image">Profile Image</label>

                {/* {image here } */}
               
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

                <button type="submit" className='bg-sky-400 w-24 rounded px-4 py-2'>Submit</button>
            </form>

            {/* This div will display the image preview if an image is uploaded */}
            {imagePreview && (
                <div>
                    <h3>Image Preview:</h3>
                    <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover" />
                </div>
            )}
        </div>
    );
};

export default SignupForm;
