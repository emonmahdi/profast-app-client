import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const {createUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/'


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      console.log(result)
      navigate(from)

    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* Name Input */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Name is required</p>
          )}

          {/* Email input */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}

          {/* Password Input */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              {" "}
              password must be in 6 or larger number
            </p>
          )}
          <p className="my-2 text-sm">
            Already have an account{" "}
            <Link className="text-[#73863A] font-bold" to="/login">
              Login
            </Link>{" "}
          </p>

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
