import React from 'react'
import './postLoginContainer.css'
import PostLoginRoutes from './PostLoginRoutes'
import SidebarNav from '../components/sidebar/SidebarNav'

function PostLoginContainer() {
    return (
        <div className='postLoginContainer'>
            <header className='postLoginContainerHeader'>
                This is Header
            </header>
            <section className='postLoginContainerSection'>
                <nav className='postLoginContainerSidebarNav'>
                    <SidebarNav />
                </nav>
                <div className='postLoginContainerContent'>
                <PostLoginRoutes />
                </div>
            </section>
            <footer className='postLoginContainerFooter'>
                <p className='postLoginContainerFooterText'>Footer</p>
            </footer>
        </div>
    )
}

export default PostLoginContainer