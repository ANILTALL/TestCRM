import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstslide from "../assets/first_slide.jpg";
import secondslide from "../assets/second_slide.jpg";
import thirdslide from "../assets/third_slide.jpg";

const Login = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [empID, setEmpID] = useState("");
  const [password, setPassword] = useState("");
  const [toasterMessage, setToasterMessage] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    console.log("Login attempt with", { empID, password });
    try {
      const response = await axios.post("http://172.206.114.140:8080/RecruitmentApplication/api/v1.0/login", {
        username: empID,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("API response:", response);

      if (response.data.message === "Employee not exists") {
        setToasterMessage("Employee does not exist");
      } else if (response.data.message === "Login Success") {
        navigate('/home');
      } else {
        setToasterMessage("Incorrect Employee ID or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setToasterMessage("An error occurred while logging in");
    }
  }

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  function closeToaster() {
    setToasterMessage("");
  }

  return (
    <div className="flex">
      <div className="w-3/5 bg-white h-screen">
        <Slider {...settings}>
          <div className='p-3'>
            <div className='backgroundimg' style={{ backgroundImage: `url(${firstslide})` }}>
              <div className='slider-img'>
                <div className='imgtext'>
                  <h2 className='text-xl font-black'>Accessibility Reminder</h2>
                  <p>Access Your HR Tools Anytime, Anywhere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-3'>
            <div className='backgroundimg' style={{ backgroundImage: `url(${secondslide})` }}>
              <div className='slider-img'>
                <div className='imgtext'>
                  <h2 className='text-xl font-black'>Progressive Vision</h2>
                  <p>Transforming HR Practices for a Brighter Future</p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-3'>
            <div className='backgroundimg' style={{ backgroundImage: `url(${thirdslide})` }}>
              <div className='slider-img'>
                <div className='imgtext'>
                  <h2 className='text-xl font-black'>Security Assurance</h2>
                  <p>Your Data, Our Priority. Trust in Secure HR Solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="w-2/4 flex flex-col justify-inherit h-screen">
        <div className="text-right">
          <img className="float-right" src={logo} alt="Logo" />
        </div>
        <div className="items-center flex flex-col justify-inherit h-screen">
          {toasterMessage && (
            <div className="bg-red-500 text-white p-2 rounded-md mb-4 relative">
              {toasterMessage}
              <button className="top-0 right-0 px-2 py-1" onClick={closeToaster}>
                X
              </button>
            </div>
          )}
          <div className={toasterMessage ? "w-96 p-7" : "w-96 p-7 mt-[100px]"}>
            <h1 className="text-2xl mb-7 font-bold">
              Welcome to MY<span className="text-[#29AB87]">GIG</span>
            </h1>
            <form>
              <label className="block mb-2 font-medium text-base" id="empID">
                Employee ID<span className="text-[#FF4646] p-1">*</span>
              </label>
              <input
                name="emloyeeID"
                type="text"
                className={`border-2 border-[#E6E6E6] px-4 py-2 rounded-md w-80 mb-2 outline-none ${toasterMessage ? "border-red-500" : ""}`}
                placeholder="Enter Here"
                value={empID}
                onChange={(event) => setEmpID(event.target.value)}
              />
              <div className="relative w-80 container mx-auto">
                <label className="block mb-2 font-medium">
                  Password<span className="text-[#FF4646] p-1">*</span>
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full px-4 py-2 text-base border-2 border-[#E6E6E6] rounded-md outline-none mb-4 ${toasterMessage ? "border-red-500" : ""}`}
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {password && (
                  <button
                    className="absolute inset-y-0 right-0 top-5 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                )}
              </div>
              <div className="flex justify-end text-[14px]">
                <p>
                  <Link to="/resetpassword" className="text-[#29AB87] text-[14px]">Forgot password?</Link>
                </p>
              </div>
              <button className="w-80 bg-[#29AB87] p-2 mt-4 text-[#FFFFFF] rounded-md text-[18px]" onClick={login}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
