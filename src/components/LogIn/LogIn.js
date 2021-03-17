import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { auth } from "./firebase";
import "./LogIn.css";

function LogIn() {
    const [user, setUser] = useState([
        {
            isSignedIn: false,
            displayName: "",
            email: "",
            password: "",
        },
    ]);
    const [error, setError] = useState("");

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignInHandler = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                console.log(res);
                const { displayName, email } = res.user;
                const newUser = {
                    isSignedIn: true,
                    displayName,
                    email,
                };
                setUser(newUser);
            })
            .catch((error) => console.log(error));
    };

    function googleSignOutHandler(e) {
        auth.signOut();
        setUser({
            isSignedIn: false,
            displayName: "",
            email: "",
            password: "",
        });
    }

    function updateProfile(name) {
        const user = auth.currentUser;

        user.updateProfile({
            displayName: name,
        })
            .then(function () {})
            .catch(function (error) {});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    updateProfile(user.displayName);
                    const newUser = { ...user };
                    newUser.isSignedIn = true;
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    history.replace(from);
                })
                .catch((error) => setError(error.message));
        } else {
            setError("Please follow the instructions!");
        }
    }
    function handleSignIn(e) {
        e.preventDefault();
        if (user.email && user.password) {
            auth.signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const user = auth.currentUser;
                    const newUser = { ...user };
                    newUser.isSignedIn = true;
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    history.replace(from);
                })
                .catch((error) => setError(error.message));
        } else {
            setError("Please follow the instructions!");
        }
    }

    function handleBlur(e) {
        let invalid = false;
        const otherEmails = ["a@a.com", "b@b.com"];
        if (e.target.name === "email") {
            const email = e.target.value;
            if (!/\S+@\S+\.\S+/.test(email)) {
                invalid = true;
                setError("use your brain and enter a valid email *-*");
            } else if (otherEmails.includes(email)) {
                invalid = true;
                setError("Email already exists!");
            } else setError("");
        } else if (e.target.name === "password") {
            const password = e.target.value;
            if (password.length < 6) {
                invalid = true;
                setError("At least 6 character");
            } else if (!/^(?=.*\d)(?=.*[a-z]).{6,}$/.test(password)) {
                invalid = true;
                setError("At least one number and one character");
            } else setError("");
        }

        if (!invalid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div className="log-in-box">
            <h2>Please log in</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {user.isSignedIn ? (
                <button onClick={googleSignOutHandler} className="order-btn">
                    Sign out
                </button>
            ) : (
                <button onClick={googleSignInHandler} className="order-btn">
                    Sign in with google
                </button>
            )}
            <br />

            <form onSubmit={handleSignIn}>
                <input type="text" name="email" required onBlur={handleBlur} placeholder="Email" />
                <br />
                <input
                    type="password"
                    name="password"
                    required
                    onBlur={handleBlur}
                    placeholder="password"
                />
                <br />
                <input type="submit" value="Sign in here" className="order-btn" />
            </form>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    required
                    onBlur={handleBlur}
                    placeholder="Your Name"
                />
                <br />
                <input type="text" name="email" required onBlur={handleBlur} placeholder="Email" />
                <br />
                <input
                    type="password"
                    name="password"
                    required
                    onBlur={handleBlur}
                    placeholder="password"
                />
                <br />
                <input type="submit" value="Or sign up here" className="order-btn" />
            </form>

            {user.isSignedIn && (
                <div>
                    <h2>{user.email}</h2>
                    <h2>{user.name || user.displayName}</h2>
                    <img src={user.photoURL} alt="" />
                    <p style={{ color: "green" }}>Successfully signed in</p>
                </div>
            )}
        </div>
    );
}

export default LogIn;
