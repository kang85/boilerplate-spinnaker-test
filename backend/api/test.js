import express from 'express'

const router = express.Router();

// api/test/
router.get('/', (req, res) => {
    console.log('api/test/ called')

    res.json({
        "test": "test api successfully called(from test repo)"
    });

})

// api/test/another
router.get('/another', (req, res) => {
    console.log('api/test/another called')

    res.json({
        "another": "another api successfully called(from test repo)"
    });

})

export default router