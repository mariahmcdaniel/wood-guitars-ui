import { useForm } from "react-hook-form";
import Auth from "@/utils/auth";
import { authenticateUser } from "@/utils/strapiAuth";
import styled from "styled-components";
import Layout from "@/components/layout"
import Link from "next/link";

// import { LOGIN_USER } from "@/utils/mutations";
// import { useMutation } from '@apollo/client';

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
font-size: clamp(1.4rem, 4vw, 1.8rem);
color: #E6FCD6;
display: flex;
justify-content:center;
padding: calc(10px + 2vw);
text-align: center;
`; 

const Form = styled.form`
margin-bottom: 40px;
font-size: clamp(.8rem, 4vw, 1.2rem);
border: 2px solid #B4D3BA;
padding: 50px;
display: flex;
flex-direction: column;
align-items: flex-end; 
`
const Paragraph = styled.p`
font-size:clamp(.8rem, 4vw, 1.2rem);
margin-bottom: 100px;
`
const StyledLink = styled(Link)`
background-color: #D0F5B8;
font-size:clamp(.8rem, 4vw, 1.2rem);
padding:5px;
border-radius: 3px;
margin-left: 3px;
margin-right:3px;
`
const FormInput = styled.input`
margin-bottom: 20px;
`
const SubmitInput = styled.input`
font-size: clamp(.8rem, 4vw, 1.2rem);
padding: 8px;
margin-top: 14px;
align-self: center;
`

export default function Login(){

const { register, handleSubmit } = useForm();
const onSubmit = data => {
    console.log(data);
    Auth.login(authenticateUser(data.username,data.password));
  }

return (
<Layout>
    <Div>
      <H1>Login</H1>
    <Form onSubmit={handleSubmit(onSubmit)}> 
      <div className="form-control">
        <label>Username:  </label>
        <FormInput {...register("username", { 
        required: <p style={{ color: "red" }}>Please enter a username.</p>, 
        maxLength: 20, 
        pattern: {
        value: /^[a-zA-Z0-9.\_]{5,16}$/,
        message: <p style={{ color: "red" }}>Username must contain 5-16 characters and no spaces. Only letters and . (period) or _ (underscore) are accepted.</p>
        }
      })} />
      </div>
      <div className="form-control">
        <label>Password:  </label>
        <FormInput type="password" {...register("password", { 
        required: <p style={{ color: "red" }}>Password field is required</p>, 
        maxLength: 20, 
        pattern: {
        value: /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message: <p style={{ color: "red" }}>Password must be 8 characters minimum and include at least <span style={{fontWeight: "bold"}}>one of each</span> of the following: uppercase letter, lowercase letter, number, special character (!@#$%^&*).</p>
        }
      })} />
      </div>
      <SubmitInput type="submit" />
    </Form>
    <Paragraph>Need to create an account? <StyledLink href="/register">Register Here</StyledLink></Paragraph>
    </Div>
    </Layout>

)

}