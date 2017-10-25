import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = () => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/trade">
        item1
      </NavItem>
      <NavItem>
        item2
      </NavItem>
      <NavItem>
        item3
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;