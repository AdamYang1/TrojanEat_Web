import { LockClosedIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

function setTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme','dark');
  } else {
    localStorage.setItem('theme','light');
  }
}

if ('theme' in localStorage) {
  localStorage.removeItem('theme');
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const AuthForm = () => {
  const navigate = useNavigate();
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  let error;
  if (password && confirmPassword && password !== confirmPassword) {
    error = "Passwords do not match.";
  } else {
    error = "";
  }
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = function (event) {
    setTheme();
    event.preventDefault();
    console.log(email, password, confirmPassword);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC61H9pnMsqoh9QPMtIMEjcV8X2D_-tTW0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC61H9pnMsqoh9QPMtIMEjcV8X2D_-tTW0";
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log(data.idToken);
        // set the token received from the firebase
        authCtx.login(data.idToken);
        if (isLogin) {
          navigate("/", { replace: true });
        } else {
          setIsLogin(true);
          navigate("/Auth", { replace: true });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  // TailwindUI Template

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1373px-USC_Trojans_logo.svg.png"
              alt="USC Logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black dark:text-white">
              {isLogin ? "Sign in to your account" : "Create an account"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />

            {isLogin ? (
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            ) : (
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="Password"
                    name="Password"
                    type="Password"
                    required
                    // ref={passwordInputRef}
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    confirm Password
                  </label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                {error && (
                  <span className="err sm:text-sm text-red-800">{error}</span>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type={isLogin ? "checkbox" : "hidden"}
                  className="h-4 w-4 rounded border-gray-300 text-red-800 focus:ring-red-800 dark:border-gray-700 dark:bg-gray-800"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-white"
                >
                  {isLogin ? "Remember me" : ""}
                </label>
              </div>
              <div className="text-sm">
                <button
                  className="font-medium text-red-800 hover:text-yellow-500 transition"
                  type="button"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin ? "Don't have an account?" : "Already registered?"}
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {isLogin ? (
                    <LockClosedIcon
                      className="h-5 w-5 text-red-800 group-hover:text-red-700"
                      aria-hidden="true"
                    />
                  ) : (
                    ""
                  )}
                </span>
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
