import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import "./login.css"
const LoginForm = () => {

    const [user, setUser] = useState(false)

    const rippleHandler = (e) => {
        const btnSubmit = document.getElementById("btn-submit")
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop
        let ripple = document.createElement("span")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        btnSubmit.appendChild(ripple)
        setTimeout(() => {
            ripple.remove()
        }, 600);
    }

    return (
        <>
            <div className="container">
                <form className={!user ? `form show` : `form hide`}>
                    <div className="dflex dflex-btn">
                        <button type="button" className="btn btn-signup">Sign up</button>
                        <button type="button" className="btn btn-login">Login</button>
                    </div>
                    <div className="dflex flexd-col px-1">
                        <div className="m-5">
                            <label htmlFor="email">Email</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="email" className="w-100">
                                    <FontAwesomeIcon icon={faEnvelope} className="p-absolute icon" />
                                    <input type="email" name="name" id="email" placeholder="someone@something.com" />
                                </label>
                            </div>
                        </div>
                        <div className="m-5">
                            <label htmlFor="user">Username</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="user" className="w-100">
                                    <FontAwesomeIcon icon={faUser} className="p-absolute icon" />
                                    <input type="text" name="username" id="user" placeholder="Username" />
                                </label>
                            </div>
                        </div>
                        <div className="m-5">

                            <label htmlFor="pass">Password</label>
                            <div className="dflex jsc-spbt p-relative">

                                <label htmlFor="pass" className="w-100">
                                    <FontAwesomeIcon icon={faLock} className="p-absolute icon" />
                                    <input type="password" name="password" id="pass" placeholder="Enter your password" />
                                </label>
                            </div>
                        </div>
                        <div className="m-5">

                            <label htmlFor="repass">Repeat password</label>
                            <div className="dflex jsc-spbt p-relative">

                                <label htmlFor="repass" className="w-100">
                                    <FontAwesomeIcon icon={faLock} className="p-absolute icon" />
                                    <input type="password" name="password" id="repass" placeholder="Repeat your password" />
                                </label>
                            </div>
                        </div>
                        <button type="button" className="btn btn-submit" id="btn-submit" onClick={rippleHandler}>
                            Get strated
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default LoginForm