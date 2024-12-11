// // import React, { useState } from "react";
// // import './Login.css';
// // import TextField from '@mui/material/TextField';
// // import { Link } from "react-router-dom";
// // import Button from '@mui/material/Button';
// // import Logo from '../../assets/Logo.png';
// // import { FaFacebook } from "react-icons/fa";
// // import { FcGoogle } from "react-icons/fc";
// // import { useNavigate } from 'react-router-dom';

// // const SignIn = () => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate(); 

// //     const handleSignIn = (e) => {
// //         e.preventDefault();
// //         if (email === "alia@test.com" && password === "alia123") {
// //             setError(""); // Clear any previous errors
// //             navigate('/homescreen');
// //         } else {
// //             setError("Invalid email or password. Please try again."); // Set error message
// //         }
// //     };

// //     return (
// //         <div className="container-fluid vh-100 d-flex align-items-center">
// //             <div className="row">
// //                 {/* Left Section */}
// //                 <div className="col-md-6 p-5">
// //                     <div className="logo">
// //                         <h3 className="fw-bold">
// //                             <img
// //                                 src={Logo}
// //                                 alt="Makemymarry"
// //                                 className="me-3"
// //                                 style={{ width: "40px" }}
// //                             />
// //                             Makemymarry
// //                         </h3>
// //                     </div>

// //                     <h2 className="fw-bold">Sign in to find your perfect partner</h2>
// //                     <p className="text-muted">
// //                         Enter email address and password or use Google or Facebook account
// //                         or via OTP to login to your account.
// //                     </p>
// //                     <form onSubmit={handleSignIn}>
// //                         <div className="mb-3">
// //                             <label htmlFor="email" className="form-label">
// //                                 Email <span className="text-danger">*</span>
// //                             </label>
// //                             <TextField
// //                                 id="email"
// //                                 variant="filled"
// //                                 type="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 required
// //                                 fullWidth
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <label htmlFor="password" className="form-label">
// //                                 Password <span className="text-danger">*</span>
// //                             </label>
// //                             <TextField
// //                                 id="password"
// //                                 variant="filled"
// //                                 type="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                                 required
// //                                 fullWidth
// //                             />
// //                         </div>
// //                         <div className="d-flex justify-content-between align-items-center">
// //                             <Link href="#forgot-password" className="text small" style={{ color:"#c65b73df", marginLeft: "26.8rem", textDecoration:"none"}}>
// //                                 Forgot Password?
// //                             </Link>
// //                         </div>
// //                         <Button
// //                             type="submit"
// //                             variant="contained"
// //                             fullWidth
// //                             onClick={handleSignIn} 
// //                             sx={{ mt: 3, backgroundColor: "rgba(0, 0, 0, 0.06)", color: "darkGrey" }}
// //                         >
// //                             Sign in                           
// //                         </Button>

// //                     </form>
// //                     <div className="text-center mt-3">OR</div>
// //                     <div className="d-flex justify-content-center mt-3" style={{ gap: "7vw" }}>
// //                         <button className="btn btn-outline-dark d-flex align-items-center gap-2">
// //                             <FaFacebook style={{ color: "#4267B2" }} /> Facebook
// //                         </button>

// //                         <button className="btn btn-outline-dark d-flex align-items-center gap-2">
// //                             <FcGoogle /> Google
// //                         </button>

// //                         <button className="btn" style={{background: "linear-gradient(90deg, rgba(235, 91, 132, 1) 0%, rgba(201, 24, 74, 1) 100%)", color: '#fff' }}>Connect via OTP</button>

// //                     </div>

// //                     <p className="text-center mt-4" style={{ marginLeft: "20rem" }}>
// //                         New to Makemymarry?{" "}
// //                         <Link href="#signup" className="text" style={{color:"#c65b73df", textDecoration:"none"}}>
// //                             Sign Up
// //                         </Link>
// //                     </p>
// //                 </div>

// //                 {/* Right Section */}
// //                 <div className="col-md-6 d-flex align-items-center justify-content-center bg-gradient" style={{backgroundColor: "#da3a67"}}>
// //                     <div className="text-center text-white">
// //                         <h2>This is an onboarding screen 1</h2>
// //                         <p>
// //                             Talk about one of the features of your application & how it will
// //                             help your users.
// //                         </p>
// //                         <div className="dots">
// //                             <span className="dot active"></span>
// //                             <span className="dot"></span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignIn;


// import React, { useState } from "react";
// import './Login.css';
// import TextField from '@mui/material/TextField';
// import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
// import Logo from '../../assets/Logo.png';
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(""); // State for error message
//     const navigate = useNavigate();

//     const handleSignIn = (e) => {
//         e.preventDefault();

//         // Static credentials validation
//         if (email === "alia@test.com" && password === "alia123") {
//             setError(""); // Clear any previous errors
//             navigate('/homescreen');
//         } else {
//             setError("Invalid email or password. Please try again."); // Set error message
//         }
//     };

//     return (
//         <div className="container-fluid vh-100 d-flex align-items-center">
//             <div className="row">
//                 {/* Left Section */}
//                 <div className="col-md-6 p-5">
//                     <div className="logo">
//                         <h3 className="fw-bold">
//                             <img
//                                 src={Logo}
//                                 alt="Makemymarry"
//                                 className="me-3"
//                                 style={{ width: "40px" }}
//                             />
//                             Makemymarry
//                         </h3>
//                     </div>

//                     <h2 className="fw-bold">Sign in to find your perfect partner</h2>
//                     <p className="text-muted">
//                         Enter email address and password or use Google or Facebook account
//                         or via OTP to login to your account.
//                     </p>
//                     <form onSubmit={handleSignIn}>
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">
//                                 Email <span className="text-danger">*</span>
//                             </label>
//                             <TextField
//                                 id="email"
//                                 variant="filled"
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 fullWidth
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">
//                                 Password <span className="text-danger">*</span>
//                             </label>
//                             <TextField
//                                 id="password"
//                                 variant="filled"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 fullWidth
//                             />
//                         </div>
//                         {error && (
//                             <div className="text-danger mb-3">
//                                 {error}
//                             </div>
//                         )}
//                         <div className="d-flex justify-content-between align-items-center">
//                             <Link href="#forgot-password" className="text small" style={{ color:"#c65b73df", marginLeft: "26.8rem", textDecoration:"none"}}>
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             fullWidth
//                             sx={{ mt: 3, backgroundColor: "rgba(0, 0, 0, 0.06)", color: "darkGrey" }}
//                         >
//                             Sign in                           
//                         </Button>
//                     </form>
//                     <div className="text-center mt-3">OR</div>
//                     <div className="d-flex justify-content-center mt-3" style={{ gap: "7vw" }}>
//                         <button className="btn btn-outline-dark d-flex align-items-center gap-2">
//                             <FaFacebook style={{ color: "#4267B2" }} /> Facebook
//                         </button>

//                         <button className="btn btn-outline-dark d-flex align-items-center gap-2">
//                             <FcGoogle /> Google
//                         </button>

//                         <button className="btn" style={{background: "linear-gradient(90deg, rgba(235, 91, 132, 1) 0%, rgba(201, 24, 74, 1) 100%)", color: '#fff' }}>Connect via OTP</button>

//                     </div>

//                     <p className="text-center mt-4" style={{ marginLeft: "20rem" }}>
//                         New to Makemymarry?{" "}
//                         <Link href="#signup" className="text" style={{color:"#c65b73df", textDecoration:"none"}}>
//                             Sign Up
//                         </Link>
//                     </p>
//                 </div>

//                 {/* Right Section */}
//                 <div className="col-md-6 d-flex align-items-center justify-content-center bg-gradient" style={{backgroundColor: "#da3a67"}}>
//                     <div className="text-center text-white">
//                         <h2>This is an onboarding screen 1</h2>
//                         <p>
//                             Talk about one of the features of your application & how it will
//                             help your users.
//                         </p>
//                         <div className="dots">
//                             <span className="dot active"></span>
//                             <span className="dot"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;

import React, { useState } from "react";
import './Login.css';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Logo from '../../assets/Logo.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error message
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        // Static credentials validation
        if (email === "alia@test.com" && password === "alia123") {
            setError(""); // Clear any previous errors
            navigate('/homescreen');
        } else {
            setError("Invalid email or password. Please try again."); // Set error message
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center">
            <div className="row">
                {/* Left Section */}
                <div className="col-md-6 p-5">
                    <div className="logo">
                        <h3 className="fw-bold">
                            <img
                                src={Logo}
                                alt="Makemymarry"
                                className="me-3"
                                style={{ width: "40px" }}
                            />
                            Makemymarry
                        </h3>
                    </div>

                    <h2 className="fw-bold">Sign in to find your perfect partner</h2>
                    <p className="text-muted">
                        Enter email address and password or use Google or Facebook account
                        or via OTP to login to your account.
                    </p>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email <span className="text-danger">*</span>
                            </label>
                            <TextField
                                id="email"
                                variant="filled"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password <span className="text-danger">*</span>
                            </label>
                            <TextField
                                id="password"
                                variant="filled"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                fullWidth
                            />
                        </div>
                        {error && (
                            <div className="text-danger mb-3">
                                {error}
                            </div>
                        )}
                        <div className="d-flex justify-content-between align-items-center">
                            <Link href="#forgot-password" className="text small" style={{ color:"#c65b73df", marginLeft: "26.8rem", textDecoration:"none"}}>
                                Forgot Password?
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, backgroundColor: "rgba(0, 0, 0, 0.06)", color: "darkGrey" }}
                        >
                            Sign in                           
                        </Button>
                    </form>
                    <div className="text-center mt-3">OR</div>
                    <div className="d-flex justify-content-center mt-3" style={{ gap: "7vw" }}>
                        <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                            <FaFacebook style={{ color: "#4267B2" }} /> Facebook
                        </button>

                        <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                            <FcGoogle /> Google
                        </button>

                        <button className="btn" style={{background: "linear-gradient(90deg, rgba(235, 91, 132, 1) 0%, rgba(201, 24, 74, 1) 100%)", color: '#fff' }}>Connect via OTP</button>

                    </div>

                    <p className="text-center mt-4" style={{ marginLeft: "20rem" }}>
                        New to Makemymarry?{" "}
                        <Link href="#signup" className="text" style={{color:"#c65b73df", textDecoration:"none"}}>
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Right Section */}
                <div className="col-md-6 d-flex align-items-center justify-content-center bg-gradient" style={{backgroundColor: "#da3a67"}}>
                    <div className="text-center text-white">
                        <h2>This is an onboarding screen 1</h2>
                        <p>
                            Talk about one of the features of your application & how it will
                            help your users.
                        </p>
                        <div className="dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
