import { useState } from "react";

function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmt = (event) => {
        event.preventDefault();

        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmt}>
            <label htmlFor="fullName">Full name</label>
            <input
                placeholder="enter your full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            <br></br>

            <label htmlFor="username">User name</label>
            <input
                placeholder="enter your username"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />

            <br></br>

            <label htmlFor="password">Password</label>
            <input
                placeholder="enter your username"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}

export default Form;