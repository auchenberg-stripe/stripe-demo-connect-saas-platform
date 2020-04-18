import React from 'react';
import {redirect} from '../../utils/redirect';

import Layout from '../../components/layout';
import API from '../../helpers/api';
import DashboardPlatformSettings from '../../components/dashboardPlatformSettings';
import DashboardHeader from '../../components/dashboardHeader';


class Dashboard extends React.Component {
  constructor(props) {
    super();
  }

  static async getInitialProps(context) {
    let userProfile = await API.makeRequest('get', '/api/profile');
    let userPlatform = await API.makeRequest('get', '/api/profile/platform');

    return {
      profile: userProfile,
      platform: userPlatform,
      dashboardType: 'settings',
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
      >
        <div className="dashboard">
          <DashboardHeader
            profile={this.props.profile}
            dashboardType={this.props.dashboardType}
          />

          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <div className="clearfix">
                    <h4>Settings</h4>
                  </div>
                </div>
              </div>
              <DashboardPlatformSettings platform={this.props.platform} />
            </div>
          </div>
        </div>
        <style jsx>{`
          .dashboard h4 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Dashboard;
