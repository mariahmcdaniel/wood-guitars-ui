import { useForm } from "react-hook-form";
import Auth from "@/utils/auth";
import { newUser } from "@/utils/strapiAuth";
import styled from "styled-components";
import Layout from "@/components/layout"
import Link from "next/link";

// import { LOGIN_USER } from "@/utils/mutations";
// import { useMutation } from '@apollo/client';

export default function Login(){

const { register, handleSubmit } = useForm();
const onSubmit = data => {
    console.log(data);
    Auth.login(data.firstName, data.lastName, data.username, data.email, data.password);
  }

return (
<div>

</div>

)

}