import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import Auth from "@/utils/auth";
import ADD_USER from "@/utils/mutations";
import { newUser } from "@/utils/addUser";

export default function Register() {
  // const [addUser, { error }] = useMutation(ADD_USER);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    Auth.login(newUser(data.firstName, data.lastName, data.username, data.email, data.password));
  }
  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>First Name</label>
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
        <label>Last Name</label>
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
        <label>Username</label>
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
        <label>Email</label>
        <input {...register("email", {
        required: <p style={{ color: "red" }}>email is required for registration</p>, 
        pattern: { 
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: <p style={{ color: "red" }}>Please enter a valid email address</p> 
              }
        })} />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" {...register("password", { 
        required: <p style={{ color: "red" }}>Password field is required</p>, 
        maxLength: 20, 
        pattern: {
        value: /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message: <p style={{ color: "red" }}>Password must be 8 characters minimum and include at least <span style={{fontWeight: "bold"}}>one of each</span> of the following: uppercase letter, lowercase letter, number, special character (!@#$%^&*).</p>
        }
      })} />
      </div>
      <input type="submit" />
    </form>
  );
}