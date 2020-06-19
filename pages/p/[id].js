import React from 'react';
import Link from 'next/link';
import PlatformLayout from '../../components/platformLayout';
import PlatformNav from '../../components/platformNav';

export default class PlatformHome extends React.Component {
  render() {
    return (
      <PlatformLayout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Welcome"
        hideNavigation={true}
      >
        <div className="platform-home">
          <div className="row full-height">
            <div className="col-6 no-spacer">
              <div className="platform-image"></div>
            </div>

            <div className="col-6 no-spacer">
              <PlatformNav />

              <div className="text-wrap">
                <div className="text">
                  <h1>Coffee roasted by hand.️</h1>
                  <Link href="/products">
                    <a className="btn btn-primary">Shop now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .platform-home {
            width: 100%;
            height: 100%;
          }

          .platform-image {
            height: 100%;
            width: 100%;

            background: url(/static/platform_splash.png) no-repeat;
            background-size: cover;
            background-position: center center;
          }

          h1 {
            font-size: 70px;
            font-weight: 600;
            color: #202020;
            width: 70%;
            padding: 0;
            margin: 0 0 30px 0;
          }

          .text-wrap {
            display: flex;
            align-content: center;
            align-items: center;
            height: 100%;
            margin-top: -100px;
          }

          .text {
            max-width: 500px;
            margin: 0 auto;
          }

          .no-spacer {
            padding: 0;
          }

          @media (min-width: 768px) {
            .popover {
              padding: 40px;
              width: 500px;
              max-width: 500px;
            }
          }
        `}</style>
      </PlatformLayout>
    );
  }
}
