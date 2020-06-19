import React from 'react';
import {redirect} from '../../utils/redirect';

import Layout from '../../components/layout';
import API from '../../helpers/api';
import DashboardProductsList from '../../components/dashboardProductsList';
import DashboardHeader from '../../components/dashboardHeader';
import NewButton from '../../components/newButton';

class Dashboard extends React.Component {
  constructor(props) {
    super();
  }

  static async getInitialProps(context) {
    let userProfile = await API.makeRequest('get', '/api/profile');
    let userPlatform = await API.makeRequest('get', '/api/profile/platform');
    let products = await API.makeRequest('get', '/api/products');

    return {
      profile: userProfile,
      platform: userPlatform,
      products: products,
      dashboardType: 'products',
    };
  }

  componentDidMount() {
    // TODO: Move this to a server side check
    if (!this.props.isAuthenticated) {
      redirect('/login');
    }
  }

  render() {
    return (
      <Layout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Dashboard"
        isDashboard="true"
      >
        <div className="dashboard">
          <DashboardHeader
            profile={this.props.profile}
            platform={this.props.platform}
            dashboardType={this.props.dashboardType}
          />

          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-8">
                  <div className="clearfix">
                    <h4>Your products</h4>
                  </div>
                </div>
                <div className="col-4">
                  <NewButton
                    label="Add new on Stripe"
                    link="https://dashboard.stripe.com/test/products"
                  />
                </div>
              </div>
              <DashboardProductsList list={this.props.products} />
            </div>
          </div>
        </div>
        <style jsx>{`
          .dashboard h4 {
            font-size: 100%;
            font-weight: bold;
            margin-bottom: 30px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Dashboard;
