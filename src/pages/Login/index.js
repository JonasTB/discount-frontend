import React, { useCallback, useRef, useState } from "react";
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Banner, Content } from './styles';
import { Form } from '@unform/web';

import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth';
import * as Yup from 'yup';
import getValidatorErrors from '../../util/getValidatorErros';

const Login = () => {

    const formRef = useRef(null);
    const { login } = useAuth();
    let [ loading, setLoading ] = useState(false);

    const handleSubmit = useCallback(
        
        async (data) => {
            console.log(data);
            setTimeout(()=>null, 10000)
            setLoading(true);
            try {
                formRef.current?.setErros({});
                const schema = Yup.object().shape({
                    email: Yup.string().required("Email é obrigatório!"),
                    password: Yup.string().min(6, "Senha muito curta, verifique sua senha."),
                });

                await schema.validate(data, { abortEarly: false });

                await login({
                    email: data.email,
                    password: data.password,
                });

                toast.success('Seja bem-vindo ao web administrativo de descontos');
            } catch (err) {
                setLoading(false);

                if (err instanceof Yup.ValidationError) {
                    const errors = getValidatorErrors(err);
                    formRef.current?.setErros(errors);
                    
                    return;
                }

                toast.error("Email ou senha inválidos");
                formRef.current.clearField("password");
            }
        },

        [login]
    );

    return (
        <Container>
            <Banner />
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Bem vindo!</h1>
                    <p>Entre com o seu login administrativo</p>
                    <span>Email</span>
                    <input name="email" icon={FiMail} />
                    <span>Senha</span>
                    <input type="password" name="senha" />

                    <button type="submit">Entrar</button>
                </Form>
            </Content>
        </Container>
    )
}

export default Login;