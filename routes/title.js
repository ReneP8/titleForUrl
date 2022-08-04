import axios from 'axios';
import { Router } from 'express';
const router = Router();

router.get('/title', async (req, res) => {
    const { url } = req.query;
    try {
        axios.get(url)
            .then((response) => {
                res.send({ title: parseTitle(response.data) });
            }).catch(error => {
                console.dir(error);
                res.status(500).send({ error: error });
            })
    } catch (error) {
        console.dir(error);
        res.status(500).send({ error: error.message });
    }
});

const parseTitle = (body) => {
    console.log(body);
    let match = body.match(/<title.*>(.*?)<\/title>/)
    if (!match || typeof match[1] !== 'string')
        throw new Error('Unable to parse the title tag')
    return match[1]
}

export default router;