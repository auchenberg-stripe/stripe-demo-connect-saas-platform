import storage from '../../../helpers/storage';
import requireAuthEndpoint from '../../../utils/requireAuthEndpoint';

export default requireAuthEndpoint(async (req, res) => {
  let authenticatedUserId = req.authToken.userId;
  let id = req.query.id;

  console.log('req.method', req.method);

  if (req.method !== 'PUT') {
    return res.status(400).json();
  }

  console.log('req.body', req.body);

  try {
    let list = storage
      .get('platforms')
      .find({platformId: id, ownerUserId: authenticatedUserId})
      .assign({...req.body})
      .write();

    //   .assign(req.body)
    //   .write();

    return res.status(200).json(list);
  } catch (err) {
    return res.status(400).json(err);
  }
});
