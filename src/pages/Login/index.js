import React, { useContext, useState } from "react";
// import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Banner, Content } from './styles';

import { Context } from '../../hooks/authProvider';
import { useHistory } from 'react-router-dom'

function initialState() {
    return {
        email: "",
        password: "",
    }
}

const Login = () => {
    const history = useHistory();
    const { login } = useContext(Context);
    const [values, setValues] = useState(initialState);

    const validate = async (e) => {
        e.preventDefault();
        const data = values;

        await login({
            email: data.email,
            password: data.password,
        });

        history.push('/dashboard');
    }

    return (
        <Container>
            <Banner />
            <Content>
                <form>
                    <input type="email" onChange={(e) => { setValues({ ...values, email: e.target.value }) }} />
                    <input type="password" onChange={(e) => { setValues({ ...values, password: e.target.value }) }} />
                </form>

                <button type="submit" onClick={validate}>ENTRAR</button>
            </Content>
        </Container>
    );
}

export default Login;