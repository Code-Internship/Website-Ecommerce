import { Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios.js";
import { userStateContext } from "../contexts/ContextProvider.jsx";

const signup = () => {
  const { setCurrentUser, setUserToken } = userStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/signup", {
        name: fullName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          console.log(finalErrors);
          setError({ __html: finalErrors.join("<br>") });
        }
        console.error(error);
      });
  };

  return (
    <Box>
      <Box>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up free
        </h2>

        {error.__html && (
          <div
            className="bg-red-500 rounded py-2 px-3 text-white"
            dangerouslySetInnerHTML={error}
          ></div>
        )}
        <Box className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={onSubmit}
            className="space-y-4"
            action="#"
            method="POST"
          >
            <Box>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <Box className="mt-2">
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nguyen Van A"
                />
              </Box>
            </Box>

            <Box>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <Box className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="example@gmail.com"
                />
              </Box>
            </Box>

            <Box>
              <Box className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </Box>
              <Box className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your password"
                />
              </Box>
            </Box>

            <Box>
              <Box className="flex items-center justify-between">
                <label
                  htmlFor="password-confirmations"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password Confirmation
                </label>
              </Box>
              <Box className="mt-2">
                <input
                  id="password-confirmations"
                  name="password_confirmation"
                  type="password"
                  required
                  value={passwordConfirmation}
                  onChange={(ev) => setPasswordConfirmation(ev.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your password confirmations"
                />
              </Box>
            </Box>

            <Box>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </Box>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in with your account
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default signup;
