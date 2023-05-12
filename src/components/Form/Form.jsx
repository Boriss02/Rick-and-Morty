import { useState } from "react";
import validation from "./validation";

const Form = ({login})=>{
    const [userData, setUserData] = useState({
        email: "",
        password: "" 
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation(userData));
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }

    return(
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="ingrese su email" value={userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                
                <br/>

                <label htmlFor="password">Password: </label>
                <input type="text" name="password" placeholder="ingrese su password" value={userData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}

                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>     
    )
}
export default Form;