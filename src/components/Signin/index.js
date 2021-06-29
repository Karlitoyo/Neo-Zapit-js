import React from 'react'
import { FormButton, FormConent, FormH1, FormInput, FormWrap, Container, Icon, Form, FormLabel, Text } from './SigninElements';

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">Neo-Zapit</Icon>
                    <FormConent>
                        <Form action="#">
                            <FormH1>Sign into your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormConent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
