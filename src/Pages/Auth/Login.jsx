import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { email } = useAuth();
  console.log(email);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
            Create User{" "}
            <Link className="text-[#73863A] font-bold" to="/register">
              Register
            </Link>{" "}
          </p>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </>
  );
};

export default Login;
