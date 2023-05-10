import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import Auth from "@/utils/auth";
import ADD_USER from "@/utils/mutations";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
      <input {...register("firstName", { 
        required: <p style={{ color: "red" }}>Name fields are required</p>, 
        maxLength: 20, 
        pattern: {
        value: /^[\p{L} ,.'-]+$/u,
        message: <p style={{ color: "red" }}>Please ensure that you have entered a valid first name.</p>
        }
      })} />
      </div>
      <div className="form-control">
      <input {...register("lastName", { 
        required: <p style={{ color: "red" }}>Name fields are required</p>, 
        maxLength: 20, 
        pattern: {
        value: /^[\p{L} ,.'-]+$/u,
        message: <p style={{ color: "red" }}>Please ensure that you have entered a valid last name.</p>
        }
      })} />
      </div>
      <div className="form-control">
      <input {...register("username", { 
        required: <p style={{ color: "red" }}>Please enter a username.</p>, 
        maxLength: 20, 
        pattern: {
        value: /^[a-zA-Z0-9.\_]{5,16}$/,
        message: <p style={{ color: "red" }}>Username must contain 5-16 characters and no spaces. Only letters and . (period) or _ (underscore) are accepted.</p>
        }
      })} />
      </div>
      <div className="form-control">
      <input {...register("email", {
        required: <p style={{ color: "red" }}>email is required for registration</p>, 
        pattern: { 
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: <p style={{ color: "red" }}>Please enter a valid email address</p> 
              }
        })} />
      </div>
      <input type="submit" />
    </form>
  );
}