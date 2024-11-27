// // SignUp.js
// import React, { useState } from "react";
// import "./signUp.css"; // Add your styles here
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth  } from "firebase";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const auth = getAuth();

//     setLoading(true);
//     setError("");

//     try {
//       // Firebase sign up with email and password
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Sign Up successful!");
//       // Optionally, redirect to login or another page
//     } catch (err) {
//       setError(err.message); // Show error message if sign up fails
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSignUp}>
//         <h2>Sign Up</h2>
//         {error && <p className="error-message">{error}</p>}

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Signing Up..." : "Sign Up"}
//         </button>

//         <p className="login-link">
//           Already have an account? <a href="/login">Login here</a>
//         </p>
//       </form>
//     </div>
//   );
// }
