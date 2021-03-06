import React, { Component } from 'react';
import { Header } from 'components';
// import redux dependencies
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';

class HeaderContainer extends Component {
  handleLoginButtonClick = () => {
    console.log('login button clicked')
      /*
    const { BaseActions, AuthActions } = this.props;
    BaseActions.setScreenMaskVisibility(true);
    AuthActions.toggleLoginModal();
    AuthActions.setModalMode('login');
    */
  }

  render() {
    const { 
        handleLoginButtonClick
    } = this;
    const { 
        user, 
        solid,
    } = this.props;

    return (
      <Header 
        onLoginButtonClick={handleLoginButtonClick}
        user={user}
        solid={solid}
      />
    );
  }
}

export default connect(
    (state) => ({
      result: state.sample.get('result'),
      user: state.user.get('user')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(baseActions, dispatch),
        BaseActions: bindActionCreators(authActions, dispatch),
    })
)(HeaderContainer);
