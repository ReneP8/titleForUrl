import { Router } from 'express';
import request from 'request';
const router = Router();

router.get('/title', async (req, res) => {
    const { url } = req.query;
    try {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(parseTitle(body));
            }
            res.status(500).send({ error: error.message });
        })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const parseTitle = (body) => {
    let match = body.match(/<title>([^<]*)<\/title>/)
    if (!match || typeof match[1] !== 'string')
      throw new Error('Unable to parse the title tag')
    return match[1]
  }

export default router;