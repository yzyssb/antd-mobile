import React, { Component } from 'react'
// import styles from './MainLayout.css'
import Menu from './Menu'
import layout from './layout.less';

class MainLayout extends Component {
    render() {
        const { children, location } = this.props
        return (
            <div className={layout.html}>
                <div className={layout.main}>
                    <div className={layout.child}>
                        {children}
                    </div>
                </div>
                <Menu location={location} />
            </div>
        )
    }
}

export default MainLayout