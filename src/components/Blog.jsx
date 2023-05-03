import React from 'react';

const Blog = () => {
    return (
        <div className=" bg-base-100 text-left w-11/12 mx-auto mt-5 grid lg:grid-cols-2 gap-5">
            <div className="card w-full bg-slate-50 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className='pt-2'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. <br /> In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself. Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.</p>
                </div>
            </div>
            <div className="card w-full bg-slate-50 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. How to validate React props using PropTypes?</h2>
                    <p className='pt-2'>With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.
                        To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function. <br />
                        <span className='font-semibold'>Basic types:</span> <br />
                        PropTypes.any: The prop can be of any data type <br />
                        PropTypes.bool: The prop should be a Boolean <br />
                        PropTypes.number: The prop should be a number <br />
                        PropTypes.string: The prop should be a string <br />
                    </p>
                </div>
            </div>
            <div className="card w-full bg-slate-50 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">3. Tell us the difference between nodejs and express js.</h2>
                    <p className='pt-2'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications". 
                    <br />JS web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.Mar</p>
                </div>
            </div>
            <div className="card w-full bg-slate-50 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='pt-2'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. <br />
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;