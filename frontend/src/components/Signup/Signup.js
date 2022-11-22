// import PropTypes from "prop-types";
// import React from "react";
// import { useState } from "react";

// async function signUpUser(credentials) {
//   //returns the data as json
//   return fetch(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC61H9pnMsqoh9QPMtIMEjcV8X2D_-tTW0",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     }
//   ).then((data) => {
//     if (data.ok) {
//     } else {
//       return data.json().then((data) => {
//         let errorMessage = "Authentication failed!";
//         if (data && data.error && data.error.message) {
//           errorMessage = data.error.message;
//         }
//         console.log(data);
//         alert(errorMessage);
//       });
//     }
//   });
// }

// export default function Signup({ setToken }) {
//   const [email, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   let error;
//   if (password && confirmPassword && password !== confirmPassword) {
//     error = "Passwords do not match.";
//   } else {
//     error = "";
//   }
//   // const [users, setUsers] = useState([]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await signUpUser({
//       email,
//       password,
//       returnSecureToken: true,
//     });

//     //assuming there is a data array in the login/register API
//     // const usernames = await token.data.map((res) => res.email);
//     // if (usernames) {
//     //   // setUsers(usernames);
//     //   //if username already exists, displapys an error
//     //   // if (users.includes(username))
//     // }

//     //do i get an error if i try to register but the email exists? or do i have to check it manually?
//     //if so, how can i get the entire array of users, so that i can compare if current username exist?
//     // setToken(token);

//     console.log(email, password, confirmPassword);
//   };

//   // TailwindUI Template

//   return (
//     <>
//       <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:my-20">
//         <div className="w-full max-w-md space-y-8">
//           <div>
//             <img
//               className="mx-auto h-12 w-auto"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1373px-USC_Trojans_logo.svg.png"
//               alt="USC Logo"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//               Create an account
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="-space-y-px rounded-md shadow-sm">
//               <div>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   onChange={(e) => setUserName(e.target.value)}
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   id="Password"
//                   name="Password"
//                   type="Password"
//                   required
//                   className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   confirm Password
//                 </label>
//                 <input
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   id="confirm-password"
//                   name="confirm-password"
//                   type="password"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-800 focus:outline-none focus:ring-red-800 sm:text-sm"
//                   placeholder="Confirm Password"
//                 />
//               </div>
//             </div>
//             {error && (
//               <span className="err sm:text-sm text-red-800">{error}</span>
//             )}
//             <div className="flex items-center justify-between">
//               <div className="text-sm">
//                 <span>Already registered? </span>
//                 <a
//                   href="/login"
//                   className="font-medium text-red-800 hover:text-yellow-500 transition ease-in-out"
//                 >
//                   Login
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// // Login.propTypes = {
// //   setToken: PropTypes.func.isRequired,
// // };
