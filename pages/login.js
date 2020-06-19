import React from 'react';
import Layout from '../components/layout';

import LoginComponent from '../components/login';

class Login extends React.Component {
  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        isSplashPage="true"
      >
        <div className="login-page center-center">
            <div className="container">
              <div className="box popover">
                <h1>Sign in</h1>
                <LoginComponent />
              </div>
          </div>
        </div>
        <style jsx>{`
          .login-page {

          }
        `}</style>
      </Layout>
    );
  }
}

export default Login;
