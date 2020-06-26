import React from 'react';
import Head from '../components/head';
import PlatformNav from '../components/platformNav';
import NProgress from '../components/nprogress';
import getConfig from 'next/config';

class PlatformLayout extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <Head title={this.props.title || 'Home'} />
        <NProgress />

        <div className={'app-platform container-fluid'}>
          {this.props.hideNavigation && this.props.hideNavigation === true ? (
            ''
          ) : (
            <PlatformNav platform={this.props.platform} />
          )}

          {this.props.children}
        </div>

        <style jsx>{`
      :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue,
          sans-serif;
        line-height: 1.75em !important;
        color: #484848 !important;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #F2F6F5;
      }

      :global(html) {
        height: 100%;
      }

      :global(body) {
        height: 100%;
      }

      :global(#__next) {
        height: 100%;
        overflow: auto;
      }

      :global(.btn) {
        line-height: 100%;
        font-weight: 600;
        border-radius: 4px !important;
        padding: 10px 20px;

        border: 0;
        color: #000;
      }

      :global(.btn-primary) {
        background: #7CBFBB;;
        color: #fff;
      }      

      :global(.btn-primary:hover) {
        background: #63707E;
      }        

      :global(button) {
        background-color: #0055ff;
        color: white;
        width: 100%;
        height: 44px;
        font-weight: 500;
        font-size: 17px;
        border-radius: 4px;
        border: 0;
      }

      :global(button:hover) {
        background-color: #0242c3;
        cursor: pointer;
      }

      :global(.full-height) {
        height: 100%;
      }

      :global(h1) {
        font-size: 28px;
        font-weight: 600;
        color: #202020;
        width: 70%;
        margin-bottom: 8px;
      }

      .app-platform {
        overflow: hidden;
        height: 100%;
      }

      .
    `}</style>
      </>
    );
  }
}

export default PlatformLayout;
