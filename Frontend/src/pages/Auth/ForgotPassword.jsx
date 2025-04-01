import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../StylesAuthStyle.css";
import Layout from "../../Components/Layout/Layout";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.SNOWPACK_PUBLIC_API}/auth/forgot-password`, {
        email,
        answer,
        newPassword
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
       
        navigate("/login");
      } 
      else {
        toast.error(res.data.message);
      }
    } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrvfvong");
    }
  };
  
  return (
    <Layout title="Forgot password - Ecommerce App">
          <div className="form-container " style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
              <h4 className="title">RESET PASSWORD</h4>
    
              <div className="mb-3">
                <input
                  type="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputAnswer"
                  placeholder="Enter Your Favorite Coding Langugae"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputNewPassword1"
                  placeholder="Enter Your New Password"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                RESET
              </button>
            </form>
          </div>
        </Layout>
      );
}

export default ForgotPassword