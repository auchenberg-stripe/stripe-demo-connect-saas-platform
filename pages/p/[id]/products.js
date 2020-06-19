import React from 'react';
import Link from 'next/link';
import PlatformLayout from '../../../components/platformLayout';
import PlatformNav from '../../../components/platformNav';

export default class PlatformHome extends React.Component {
  render() {
    return (
      <PlatformLayout
        isAuthenticated={this.props.isAuthenticated}
        userProfile={this.props.userProfile}
        title="Products"
      >
        <div className="platform-products">
          <div className="row full-height">
            <div className="col-12">
              <h1>Our wholesale products</h1>
              Product GRID HERE
            </div>
          </div>
        </div>
        <style jsx>{`
          .platform-products {
            width: 100%;
            height: 100%;
          }

          h1 {
            font-size: 40px;
            font-weight: 600;
            color: #202020;
            width: 70%;
            padding: 0;
            margin: 0 0 30px 0;

            text-align: center;
          }
        `}</style>
      </PlatformLayout>
    );
  }
}
