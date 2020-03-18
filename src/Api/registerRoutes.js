import {register} from '../Service/RegisterController';

const RegisterRoutes = (app) =>{
    app.route('/register')
        .post(register)
}

export default RegisterRoutes;