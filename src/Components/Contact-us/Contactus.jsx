import React from "react";
import Container from "../Container/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Thank you for contacting us! Your message has been sent.");
    resetForm();
  };

  return (
    <div className='mt-4' >
     <Container>
     <h2 className="text-white text-4xl Subtitle" >Contact Us</h2>
     <div className="grid grid-flow-col grid-rows-1 gap-4 p-3">
     <div>
        <ul className="mt-10">
        <li className=" text-2xl p-4 hover:text-pink-500"><FaSquareInstagram /></li>
        <li className=" text-2xl p-4  hover:text-white"><FaGithub /></li>
        <li className=" text-2xl p-4  hover:text-blue-300"><FaLinkedin  /></li>
        </ul>
        <div className="">

        </div>
     </div>
     <div className="w-60 text-left mt-15">
     <h2 className="text-blue-600 text-lg font-bold">Contact-Us</h2>
     <div className="text-bold text-blue-400"> nainabahuriya257@gmail.com</div>
     <div className="text-bold text-blue-600">  +91 89563475389</div>
     <div className="text-bold text-blue-600">  Dr.Ambedkar ward, Ballarpur</div>
     <p>
        I would love to collaborate on exciting projects or share ideas. Feel free to reach out to me at{' '}
        <a href="mailto:yourname@webdev.com" className="text-blue-600 font-extrabold">nainabahuriya257@gmail.com</a> or check out my work on{' '}
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>    
     </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-5">
            <label htmlFor="name" className="font-bold">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              style={{ width: "100%", padding: "8px",background:"white" }}
              className="rounded-2xl"
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-bold">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              style={{ width: "100%", padding: "8px" ,background:"white"}}
              className="rounded-2xl"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />
          </div>
          <div className="mb-5" >
            <label htmlFor="message" className="font-bold">Message:</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              style={{ width: "100%", padding: "8px" ,background:"white"}}
              className="rounded-2xl"
            />
            <ErrorMessage
              name="message"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
            className="rounded-2xl"
          >
            Send Message
          </button>
        </Form>
      </Formik>

      </div>
      </Container>
    </div>
  );
};

export default ContactUs;