import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
        const response = await getRedirectResult(auth)
        
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user)
            console.log(userDocRef)
        }
    }

    fetchData()
  }, [])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
        <p>Sign In Page</p>
        <button onClick={logGoogleUser}>
            Signin with Google Popup
        </button>
        <button onClick={signInWithGoogleRedirect}>
            Signin with Google Redirect
        </button>
    </div>
  );
}

export default SignIn
