import { useEffect, useState } from "react"
import app from '../../firebase.init'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const useFirebase = () => {
    const [user, setUser] = useState({})

    const signinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })



    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {

            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    return {
        user,
        setUser,
        handleSignOut,
        signinWithGoogle
    }

}
export default useFirebase