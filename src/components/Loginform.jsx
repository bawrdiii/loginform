import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faUser, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./login.css"
const LoginForm = () => {

    const [signUp, setSignUp] = useState(true)

    // const [email, setEmail] = useState("")
    // const emailValue = e => setEmail(e.target.value)

    // const [userName, setUserName] = useState("")
    // const userNameValue = e => setUserName(e.target.value)

    // const [password, setPassword] = useState("")
    // const passwordValue = e => setPassword(e.target.value)

    // const [rePass, setRePass] = useState("")
    // const resPassValue = e => setRePass(e.target.value)


    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const inputObject = Object.fromEntries(formData)
        console.log(inputObject);

        const email = formData.get("email")
        const userName = formData.get("username")
        const phoneNumber = formData.get("PhoneNumber")
        const password = formData.get("password")
        const rePass = formData.get("Repass")

        const checkInputs = () => {
            const emailInput = document.getElementById("email")
            const userNameInput = document.getElementById("user")
            const passInput = document.getElementById("pass")
            const rePassInput = document.getElementById("repass")
            const phoneInput = document.getElementById("phoneNumber")



            if (email.trim() === "") {
                setError(emailInput, `Please enter a email`)
            } else {
                setSuccess(emailInput)
            }
            if (userName.trim() === "") {
                setError(userNameInput, `Please enter a username`)
            }
            else {
                setSuccess(userNameInput)
            }
            if (phoneNumber.length < 11 || phoneNumber.length < 11 && phoneNumber === "") {
                setError(phoneInput, `Enter a valid phone number`)
            }
            else {
                setSuccess(phoneInput)
            }
            if (password === "") {
                setError(passInput, `Please enter a password`)
            }
            else {
                setSuccess(passInput)
            }
            if (rePass === "") {
                setError(rePassInput, `Please enter repeat of password`)
            }
            else if (rePass !== password) {
                setError(rePassInput, `Password doesn't match!!`)
            }
            else {
                setSuccess(rePassInput)
            }
        }
        checkInputs(e.target)
    }

    const LoginForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const inputObject = Object.fromEntries(formData)
        console.log(inputObject);
        const email = formData.get("userEmail")
        const password = formData.get("userPassword")

        const checkInputs = () => {
            const emailInput = document.getElementById("emailLogin")
            const passInput = document.getElementById("userPass")

            if (email.trim() === "") {
                setError(emailInput, `Enter your email to login`)
            } else {
                setSuccess(emailInput)
            }
            if (password === "") {
                setError(passInput, `Enter your password to login`)
            }
            else {
                setSuccess(passInput)
            }
        }
        checkInputs()
    }

    const hideHandler = (e) => {
        setSignUp(false)
        rippleHandler(e)
    }

    const visibleHandler = (e) => {
        setSignUp(true)
        rippleHandler(e)
    }

    const rippleHandler = (e) => {
        const parentElement = e.target
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop
        let ripple = document.createElement("span")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        parentElement.appendChild(ripple)
        setTimeout(() => {
            ripple.remove()
        }, 600);
    }







    const setError = (input, message) => {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small")
        formControl.classList.add("error");
        formControl.classList.remove("success")
        small.innerText = message
    }
    const setSuccess = (input) => {
        const forInput = input.parentElement;
        forInput.classList.remove("error")
        forInput.classList.add("success")
    }

    return (
        <>
            <div className="container">
                <div className="dflex dflex-btn">
                    <button type="button" className="btn btn-signup" onClick={visibleHandler}>Sign up</button>
                    <button type="button" className="btn btn-login" onClick={hideHandler}>Login</button>
                </div>
                <form className={signUp ? `form show` : ` hide`} onSubmit={submitForm}>
                    <div className="dflex flexd-col px-1">
                        <div className="m-5">
                            <label htmlFor="email">Email</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="email" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faEnvelope} className="p-absolute icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="someone@something.com"
                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <div className="m-5">
                            <label htmlFor="user">Username</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="user" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faUser}
                                        className="p-absolute icon" />
                                    <input
                                        type="text"
                                        name="username"
                                        id="user"
                                        placeholder="Username"

                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <div className="m-5">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="phoneNumber" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faPhone}
                                        className="p-absolute icon" />
                                    <input
                                        type="number"
                                        name="PhoneNumber"
                                        id="phoneNumber"
                                        placeholder="123456789"

                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <div className="m-5">

                            <label htmlFor="pass">Password</label>
                            <div className="dflex jsc-spbt p-relative">

                                <label htmlFor="pass" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faLock} className="p-absolute icon" />
                                    <input
                                        type="password"
                                        name="password"
                                        id="pass"
                                        placeholder="Enter your password"

                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <div className="m-5">

                            <label htmlFor="repass">Repeat password</label>
                            <div className="dflex jsc-spbt p-relative">

                                <label htmlFor="repass" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faLock} className="p-absolute icon" />
                                    <input
                                        type="password"
                                        name="Repass"
                                        id="repass"
                                        placeholder="Repeat your password"
                                    // value={rePass}
                                    // onChange={resPassValue} 
                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-submit"
                            id="btn-submit"
                            onClick={rippleHandler}>
                            Get strated
                        </button>
                    </div>
                </form>
                <form className={signUp ? `hide` : `form login show w-100`} onSubmit={LoginForm}>
                    <div className="dflex flexd-col px-1">
                        <div className="m-5">
                            <label htmlFor="emailLogin">Email</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="emailLogin" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faEnvelope} className="p-absolute icon" />
                                    <input
                                        type="email"
                                        name="userEmail"
                                        id="emailLogin"
                                        placeholder="someone@something.com"
                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>
                        <div className="m-5">
                            <label htmlFor="userPass">password</label>
                            <div className="dflex jsc-spbt p-relative ">
                                <label htmlFor="userPass" className="w-100 p-relative">
                                    <FontAwesomeIcon icon={faLock} className="p-absolute icon" />
                                    <input
                                        type="password"
                                        name="userPassword"
                                        id="userPass"
                                        placeholder="someone@something.com"
                                    />
                                    <small className="small"></small>
                                </label>
                            </div>
                        </div>

                        <div className="new-user">
                            <p>Never been Here? <span onClick={() => setSignUp(true)}>Sign up</span></p>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-submit"
                            id="btn-submitLogin"
                            onClick={rippleHandler}>
                            Login
                        </button>
                    </div>
                </form>

            </div >
        </>
    )
}
export default LoginForm