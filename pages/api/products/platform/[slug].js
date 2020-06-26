import storage from '../../../../helpers/storage';
import stripe from '../../../../helpers/stripe';

export default async (req, res) => {
  let slug = req.query.slug;

  try {
    let platform = storage.get('platforms').find({slug: slug}).value();

    if (!platform) {
      throw new Error('platform not found');
    }

    console.log('platform', platform);

    let stripeUserId = platform.stripe.stripeUserId;

    let products = await stripe.products.list(
      {},
      {
        stripe_account: stripeUserId,
      },
    );

    return res.status(200).json(products.data);
  } catch (err) {
    console.log('err', err);
    return res.status(400).json({error: err.message});
  }
};
