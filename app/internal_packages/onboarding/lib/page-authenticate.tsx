import React from 'react';
import { PropTypes, MailspringAPIRequest } from 'mailspring-exports';
import { Webview } from 'mailspring-component-kit';
import * as OnboardingActions from './onboarding-actions';

export default class AuthenticatePage extends React.Component {
  static displayName = 'AuthenticatePage';

  static propTypes = {
    account: PropTypes.object,
  };

  render() {
    OnboardingActions.identityJSONReceived({
      id: '00000000-0000-0000-0000-000000000000',
      token: '00000000-0000-0000-0000-000000000000',
      firstName: '',
      lastName: '',
      emailAddress: '',
      object: 'identity',
      createdAt: '2020-01-01T00:00:00.000Z',
      stripePlan: 'Basic',
      stripeCustomerId: '000000000000000000',
      featureUsage: null
    });
    return `data:text/html,<div></div>`;
  }
}
