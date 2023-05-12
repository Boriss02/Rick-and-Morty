export default (data)=>{
    let errors = {};

    if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(data.email)){
        errors.email = "Debe ingresar un email válido"
    }
    if(data.email.length === 0){
        errors.email = "No puede estar vacío"
    }
    if(data.email.length > 35){
        errors.email = "Debe ser menor a 35 caracteres"
    }
    if(!/\d/.test(data.password)){
        errors.password = "Debe contener al menos un número"
    }
    if(data.password.length <= 5 || data.password.length >= 11){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
}