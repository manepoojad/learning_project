import React from 'react'
import './Dashboard.css'
import { useLocation } from 'react-router-dom'

function Dashboard() {
    const location = useLocation()
    console.log(location)
    return (
        <div style={{ height: "100vh" }}>
            <header className='header'>
                Dashboard Page
                <span className='loginUserName'>
                    <img className='avatarImg' src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' />
                    {location.state.name}
                </span>
            </header>
            <section className='mainSection'>
                <nav className='sidebar'>
                </nav>
                <article className='sectionArticle'>
                    Welcome
                </article>
            </section>
            <footer className='footer'>
                <p style={{ margin: "0px" }}>Footer</p>
            </footer>
        </div>

    )
}

export default Dashboard