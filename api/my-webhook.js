import { get } from 'axios';

module.exports = async (req, res) => {
  const body = JSON.parse(req.body); // can't just use const { body } = req because AK's SQS erroneously does not send content-type:application/json
  if (body.Type === 'SubscriptionConfirmation') {
    const resp = await get(body.SubscribeURL);
    res.send(resp.body);
    return;
  } 
}
