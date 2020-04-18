import getHost from '../../../utils/get-host';
import storage from '../../../helpers/storage';
const querystring = require('querystring');
const env = require('dotenv').config({path: './.env'});
import requireAuthEndpoint from '../../../utils/requireAuthEndpoint';

export default requireAuthEndpoint(async (req, res) => {
  let authenticatedUserId = req.authToken.userId;

  try {
    let userAccount = storage
      .get('users')
      .find({userId: authenticatedUserId})
      .value();

    let clientId = process.env.STRIPE_CLIENT_ID;

    // Pass UserAccount info along to Stripe
    let userEmail = userAccount.email;
    let userFirstName = userAccount.firstName;
    let userLastName = userAccount.lastName;

    const redirect_uri = getHost(req) + '/stripe/callback';

    let stripeConnectParams = {
      client_id: clientId,
      scope: 'read_write',
      response_type: 'code',
      'stripe_user[email]': userEmail,
      'stripe_user[first_name]': userFirstName,
      'stripe_user[last_name]': userLastName,
    };

    let reqQuery = querystring.stringify(stripeConnectParams);

    const location = `https://connect.stripe.com/oauth/authorize?${reqQuery}`;

    return res.status(200).json({
      location: location,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});
