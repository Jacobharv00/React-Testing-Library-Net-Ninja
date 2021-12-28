import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom'

export default function FollowersList () {

    const [ followers, setFollowers ] = useState( [] )

<<<<<<< HEAD
    useEffect(() => {

        const fetchFollowers = async () => {
            const { data } = await axios.get("https://randomuser.me/api/?results=5")
            setFollowers(data.results)
        }

=======
    useEffect( () => {
>>>>>>> 01-Starter-Project
        fetchFollowers()
    }, [] )

<<<<<<< HEAD

=======
    const fetchFollowers = async () => {
        const { data } = await axios.get( "https://randomuser.me/api/?results=5" )
        setFollowers( data.results )
    }
>>>>>>> 01-Starter-Project

    return (
        <div className="followerslist-container">
            <div>
<<<<<<< HEAD
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
=======
                { followers.map( follower => (
                    <div className="follower-item">
                        <img src={ follower.picture.large } alt='follower' />
>>>>>>> 01-Starter-Project
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{ follower.name.first }</h4> <h4>{ follower.name.last }</h4>
                            </div>
                            <p>{ follower.login.username }</p>
                        </div>
                    </div>
                ) ) }
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
