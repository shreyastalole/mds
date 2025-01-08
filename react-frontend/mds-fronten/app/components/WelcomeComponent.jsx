"use client";
import Link from 'next/link';
import { useState } from 'react'



function WelcomeComponent() {

    // const {username } = useParams()

    // const authContext = useAuth()

    const [message, setMessage] = useState(null)

    // function callHelloWorldRestApi(){
    //     console.log('called')
              
    //     retrieveHelloWorldPathVariable('Kaif', authContext.token)
    //         .then( (response) => successfulResponse(response) )
    //         .catch ( (error) => errorResponse(error) )
    //         .finally ( () => console.log('cleanup') )

    // }

    // function successfulResponse(response) {
    //     console.log(response)
    //     //setMessage(response.data)
    //     setMessage(response.data.message)
    // }

    // function errorResponse(error) {
    //     console.log(error)
    // }


    return (
        <div className="WelcomeComponent">
            <h1>Welcome To Our App</h1>
            <div>
                Manage your Shopping List - <Link href="/products">Go here</Link>
            </div>
            {/* <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div> */}
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent