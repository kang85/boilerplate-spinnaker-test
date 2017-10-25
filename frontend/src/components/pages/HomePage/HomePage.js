import React from 'react';
import { PageTemplate, Block } from 'components';
import {HeaderContainer} from 'containers';
import logo from 'static/images/logo.svg';

import classNames from 'classnames/bind';
import styles from 'static/css/App.css';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate header={<HeaderContainer />} >
        <Block center shadow>
            <img className={cx('App-logo')} src={logo} alt="logo" />
            <h2 className={cx('App-intro')}>
                TEST Repository
                Welcome to React Coolsms Microservice Boilerplate
                TEST Repository
            </h2>
            <h5> composed & organized by Billy Kang </h5>
        </Block>
    </PageTemplate>
  );
};

export default HomePage;