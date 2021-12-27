import React from 'react'
import {useFormik} from 'formik'

function Frmpage() {

    const validate = values =>{
        const errors = {}
        
        if (!values.name){
            errors.name = "name required*"
        }

        if (!values.email){
            errors.email = "email required*"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "invalid email adderss"
        }

        if (!values.username){
            errors.username = "username required*"
        }

        if (!values.password){
            errors.password = "password required*"
        } else if(values.password.length <6){
            errors.password = "Must be 6 characters or more"
        }

        return errors
    }
     
    const formik = useFormik({
        initialValues : { name: "",
                          email: "", 
                          username: "",
                          password: "" 
    },

    validate,
    onSubmit : values =>{
        alert(JSON.stringify(values, null, 2))
    }
    
    })

    return (
        <div className='page'>
            <h2>Registration Form</h2>

            <form onSubmit = {formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name: </label>
                    <input name="name" placeholder="Name" 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.name && formik.errors.name ? <p className='errors'>{formik.errors.name}</p> : null}
                <div className='form-control'>
                    <label htmlFor='email'>Email: </label> 
                    <input name="email" placeholder="Email" 
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                        onBlur={formik.handleBlur}
                    /> 
                </div>
                {formik.touched.email && formik.errors.email ? <p className='errors'>{formik.errors.email}</p> : null}
                <div className='form-control'>
                    <label htmlFor='username'>Username: </label> 
                    <input name="username" placeholder="Username" 
                        onChange={formik.handleChange} 
                        value={formik.values.username} 
                        onBlur={formik.handleBlur}
                    /> 
                </div>
                {formik.touched.username && formik.errors.username ? <p className='errors'>{formik.errors.username}</p> : null}
                <div className='form-control'>
                    <label htmlFor='password'>Password: </label>
                    <input name="password" type="password" placeholder="Password" 
                        onChange={formik.handleChange} 
                        value={formik.values.password} 
                        onBlur={formik.handleBlur}
                    />
                </div> 
                {formik.touched.password && formik.errors.password ? <p className='errors'>{formik.errors.password}</p> : null}
                <button className='sub-btn'>Submit</button>
            </form>

        </div>
    )
}

export default Frmpage

