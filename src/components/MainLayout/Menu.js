import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import layout from './layout.less';

import { TabBar } from 'antd-mobile';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Life',
            hidden: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                {pageText}
            </div>
        );
    }

    selectedChange(v,dispatch){
        this.setState({
            selectedTab: v.title,
        });
        var a=sessionStorage.getItem('last')
        if(a==v.link){
            dispatch(routerRedux.replace({
                pathname: v.link,
                query: {}
            }));
        }else{
            dispatch(routerRedux.push({
                pathname: v.link,
                query: {}
            }));
        }
        sessionStorage.setItem('last',v.link)
    }

    render() {
        const { menu,dispatch } = this.props
        
        return (
            <div className={layout.tabbar}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {menu.menuList.length>0&&menu.menuList.map(v=>(
                        <TabBar.Item
                            title={v.title}
                            key={v.key}
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+v.icon+') center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+v.selectedIcon+') center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === v.title}
                            onPress={() => this.selectedChange(v,dispatch)}
                        ></TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}

function mapStateToProps({ menu }) {
    return { menu };
}

export default connect(mapStateToProps)(Menu)