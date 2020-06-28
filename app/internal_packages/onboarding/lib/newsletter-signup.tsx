import _ from 'underscore';
import React from 'react';
import PropTypes from 'prop-types';
import { RetinaImg, Flexbox } from 'mailspring-component-kit';
import { localized, MailspringAPIRequest } from 'mailspring-exports';

interface NewsletterSignupProps {
  name: string;
  emailAddress: string;
}

interface NewsletterSignupState {
  status: 'Pending' | 'Error' | 'Never Subscribed' | 'Subscribed';
}

export default class NewsletterSignup extends React.Component<
  NewsletterSignupProps,
  NewsletterSignupState
  > {
  static displayName = 'NewsletterSignup';
  static propTypes = {
    name: PropTypes.string,
    emailAddress: PropTypes.string,
  };

  _mounted: boolean = false;

  constructor(props) {
    super(props);
    this.state = { status: 'Pending' };
  }

  componentDidMount() {
    this._mounted = true;
    return this._onGetStatus();
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props, nextProps)) {
      this._onGetStatus(nextProps);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  _setState(state) {
    if (!this._mounted) {
      return;
    }
    this.setState(state);
  }

  _onGetStatus = async (props = this.props) => { };

  _renderControl() {
    return (
      <RetinaImg
        name="inline-loading-spinner.gif"
        mode={RetinaImg.Mode.ContentDark}
        style={{ width: 14, height: 14 }}
      />
    );
  }

  render() {
    return (
      <Flexbox direction="row" height="auto" style={{ textAlign: 'left' }}>
      </Flexbox>
    );
  }
}
