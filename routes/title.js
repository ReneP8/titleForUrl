import { Router } from 'express';
import request from 'request';
const router = Router();

router.get('/title', async (req, res) => {
    const { url } = req.query;
    try {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
            res.status(500).send({ error: error.message });
        })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;