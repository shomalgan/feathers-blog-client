import React from 'react';
import Navigation from '../../components/Navigation/NavigationItems';

import { Layout, Icon } from 'antd';

const { Sider } = Layout;
const navItems = [
  {
    title: 'Dashboard',
    icon: 'bar-chart',
    link: '/admin',
    show: 'authenticated'
  },
  {
    title: 'Posts',
    icon: 'file-text',
    link: '/admin/posts',
    show: 'authenticated',
    subMenu: [
      {
        title: 'Posts',
        icon: 'file-text',
        link: '/admin/posts',
        show: 'authenticated'
      },
      {
        title: 'Write',
        icon: 'file-text',
        link: '/admin/posts/write',
        show: 'authenticated'
      },
      {
        title: 'Comments',
        icon: 'message',
        link: '/admin/comments',
        show: 'authenticated'
      }
    ]
  },
  {
    title: 'Users',
    icon: 'user',
    link: '/admin/users',
    show: 'authenticated',
    subMenu: [
      {
        title: 'Users',
        icon: 'user',
        link: '/admin/users',
        show: 'authenticated'
      },
      {
        title: 'Create',
        icon: 'user-add',
        link: '/admin/users/create',
        show: 'authenticated'
      }
    ]
  },
  {
    title: 'Files',
    icon: 'user',
    link: '/admin/files',
    show: 'authenticated',
    subMenu: [
      {
        title: 'Files',
        icon: 'user',
        link: '/admin/files',
        show: 'authenticated'
      },
      {
        title: 'Upload',
        icon: 'user-add',
        link: '/admin/files/upload',
        show: 'authenticated'
      }
    ]
  },
  {
    title: 'Logout!',
    icon: 'poweroff',
    link: '/logout',
    show: 'authenticated'
  }
];
const Sidebar = props => (
  <Sider
    className={'sidbar'}
    width={400}
    trigger={null}
    collapsible
    collapsed={props.collapsed}
  >
    <Icon
      className="hamburger"
      type={props.collapsed ? 'right' : 'left'}
      onClick={props.toggle}
    />
    <div className={'admin-navigation'}>
      <Navigation
        navData={navItems}
        isAuthenticated={props.isAuthenticated}
        navMode="inline"
        navTheme="dark"
      />
    </div>
  </Sider>
);

export default Sidebar;
