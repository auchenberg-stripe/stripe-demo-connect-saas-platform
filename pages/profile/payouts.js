import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import PayoutSetup from '../../components/payoutSetup';
import API from '../../helpers/api';

class ProfilePayouts extends React.Component {
  constructor() {
    super();
  }

  static async getInitialProps(context) {
    API.setContext(context);
    console.log('ProfilePayouts.getInitialProps');

    let userProfile = await API.makeRequest('get', '/api/profile');

    return {
      profile: userProfile,
    };
  }

  async handleDashboardLink() {
    let req = await API.makeRequest('get', '/api/payouts/link');
    window.open(req.url);
  }

  render() {
    let hasPayoutSetup =
      this.props.profile.stripe != null &&
      this.props.profile.stripe.stripeUserId;

    API.setToken(this.props.token);

    return (
      <Layout
        width="full"
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
      >
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="wrapper">
                {hasPayoutSetup ? (
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={this.handleDashboardLink}
                  >
                    Go to Stripe Dashboard
                  </a>
                ) : (
                  <PayoutSetup />
                )}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            width: 100%;
            height: 600px;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </Layout>
    );
  }
}

export default ProfilePayouts;