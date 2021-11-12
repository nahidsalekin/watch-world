import { useEffect, useState } from "react"
import initializeAuthentication from "../components/Login/Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                console.log(newUser)

                //send data to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch(() => {

                });

                history.replace('/');
                //save user to db
                saveUser(email, name, 'POST');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                console.log(destination)
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/';
                console.log(destination)
                history.replace(destination);
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    //user presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
            return () => unsubscribe;
        });
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        loginUser,
        googleSignIn,
        authError,
        logout,
    }
}
export default useFirebase;