import React, { useState, useEffect } from 'react'
import { LoggedIn, LoggedOut } from './stories/Header.stories'
import { Button } from './stories/Button'
import User from './lib/user'
import { ItemPreview } from './stories/ItemPreview'
import RequestService from './services/RequestService'

/**
 * TODO:
 * Fix your damn environment!!
 * Toggle more than just the header for loggedIn vs loggedOut state
 * Build Post or Listing object for each itemPreview that contains the relevant posting info
 * Build a posting page to show posting info
 * auth0 integration for logging in/out
 */

const Home: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<User | undefined>()
    const [posterList, setPosterList] = useState<User[]>([])

    const onLogin = () => {
        user? setLoggedIn(true) : alert("You must create an account first!")
    }

    const onLogout = () => {
        setLoggedIn(false)
    }

    const onCreateAccount = async () => {
        let requester = new RequestService(`https://randomuser.me/api/?nat=US`);
        await requester.getRequest()
        if (requester.response.results) {
            setUser(new User(requester.response.results[0]))
            setLoggedIn(true)
        }


    }

    const getPosterList = async (number: number) => {
        let requester = new RequestService(`https://randomuser.me/api/?nat=us&results=${number}`)
        await requester.getRequest()
        if (requester.response.results) {
            setPosterList([...posterList, ...requester.response.results.map(userData => new User(userData))])
        }
    }

    useEffect(() => {
        getPosterList(20)
    }, [])

    return (
        <div>
            {(loggedIn && !!user)? 
                <LoggedIn 
                    user={user} 
                    onLogin={onLogin}
                    onLogout={onLogout}
                    onCreateAccount={onCreateAccount}
                /> : 
                <LoggedOut
                    onLogin={onLogin}
                    onLogout={onLogout}
                    onCreateAccount={onCreateAccount} />
            }
            <main>
                <div className="hero">
                    <h1>{ (user && user.name)? `Hello, ${user.name} Welcome back!` : 'Hello and welcome!'}</h1>
                    <p>You've clicked the button {count} times</p>
                    <Button primary label={'Click Me'} onClick={() => setCount(count + 1)} />    
                </div>
                <div className="content">
                    {(loggedIn && posterList) ? 
                        posterList?.map((poster, idx) => (
                            <ItemPreview 
                                key={ poster.uuid }
                                image={ `https://picsum.photos/200?random=${idx}` } 
                                itemName={ `Item Name` }
                                itemDescription={ `Item Description` }
                                user={ poster }
                            />)
                        )
                    : 'Placeholder for content' }
                </div>
            </main>
        </div>
    )
} 

export default Home