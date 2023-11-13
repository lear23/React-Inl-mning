// import React, { useState } from 'react';
// import './FormSection.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const FormSection = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('')
//   const [isSuccess, setIsSuccess] = useState(false); // Här ska "isSuccess" deklareras
//   const [successMessage, setSuccessMessage] = useState('')
//   const form = useFormik({
    // initialValues: {
    //   name: '',
    //   email: '',
    //   message: '',
    // },
    // validationSchema: Yup.object({
    //   name: Yup.string()
    //     .required('Name is required.')
    //     .min(2, 'Name must be at least 2 characters.'),
    //   email: Yup.string()
    //     .required('Email is required.')
    //     .matches(
    //       /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,7})$/,
    //       'Invalid email'
    //     ),
    //   message: Yup.string().required('Message is required.'),
    // }),
//     onSubmit: async (values) => {
//       try {
//         setIsSubmitting(true);
//         const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
//           method: 'POST',
//           body: JSON.stringify(values),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 200) {
//           setIsSuccess(true);
//           setSuccessMessage('Message sent successfully');
//           form.resetForm(); 
//         } else {
//           setIsSuccess(false);
//           setSuccessMessage('Message sending failed');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setIsSuccess(false);
//         setSuccessMessage('An error occurred: Message sending failed');
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div className="container-section">
//       {isSuccess ? (
//         <h1 className="success-message">{successMessage}</h1>
//       ) : (
//         <form onSubmit={form.handleSubmit} className="container" noValidate>
//           {/* Display error messages next to input fields */}
//           <ul>
//             <li className="title">
//               <h2>Leave us a message for any information.</h2>
//               <p className='errorMessage'>{errorMessage}</p>
//             </li>
            // <li className="text-form">
            //   <label>{form.errors.name ? form.errors.name : ''}</label>
            //   <input type="text" name="name" value={form.values.name} onChange={form.handleChange} placeholder="Name*" />
            // </li>
            // <li className="text-form">
            //   <label>{form.errors.email ? form.errors.email : ''}</label>
            //   <input type="email" name="email" value={form.values.email} onChange={form.handleChange} placeholder="Email*" />
            // </li>
            // <li>
            //   <label>{form.errors.message ? form.errors.message : ''}</label>
            //   <textarea type='text' name="message" value={form.values.message} onChange={form.handleChange} placeholder="Your Message*"></textarea>
            // </li>
            // <div className="form-button">
            //   <button type='Submit' className="btn-theme" disabled={isSubmitting}>
            //     {isSubmitting ? 'Sending...' : 'Send Message'}
            //   </button>
            // </div>
//           </ul>
//         </form>
//       )}
//     </div>
//   );
// };

// export default FormSection;

import React, { useState } from 'react';
import './FormSection.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters.'),
      email: Yup.string()
        .required('Email is required.')
        .matches(
          /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,7})$/,
          'Invalid email'
        ),
      message: Yup.string().required('Message is required.'),
    }),
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          setIsSuccess(true);
          setSuccessMessage('Message sent successfully');
          form.resetForm();

          setTimeout(() => {
            setIsSuccess(false);
            setSuccessMessage('');
          }, 2000);
        } else if (response.status === 400) {
          setIsSuccess(false);
          setSuccessMessage('Email address is already taken');
        } else {
          setIsSuccess(false);
          setSuccessMessage('Message sending failed');
        }
      } catch (error) {
        console.error('Error:', error);
        setIsSuccess(false);
        setSuccessMessage('An error occurred: Message sending failed');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="container-section">
      {isSuccess ? (
        <h1 className="success-message">{successMessage}</h1>
      ) : (
        <form onSubmit={form.handleSubmit} className="container" noValidate>
          <ul>
            <li className="title">
              <h2>Leave us a message for any information.</h2>
              <p className='errorMessage'>{errorMessage}</p>
            </li>
            <li className="text-form">
              <label>{form.errors.name ? form.errors.name : ''}</label>
              <input type="text" name="name" value={form.values.name} onChange={form.handleChange} placeholder="Name*" />
            </li>
            <li className="text-form">
              <label>{form.errors.email ? form.errors.email : ''}</label>
              <input type="email" name="email" value={form.values.email} onChange={form.handleChange} placeholder="Email*" />
            </li>
            <li>
              <label>{form.errors.message ? form.errors.message : ''}</label>
              <textarea type='text' name="message" value={form.values.message} onChange={form.handleChange} placeholder="Your Message*"></textarea>
            </li>
            <div className="form-button">
              <button type='Submit' className="btn-theme" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </ul>
        </form>
      )}
    </div>
  );
};

export default FormSection;





