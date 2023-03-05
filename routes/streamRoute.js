const express = require('express')
const streamController = require('../controllers/streamController')
const router = express.Router();



router.post('/:id/createComment',streamController.createComment)
router.post('/:id/createTag',streamController.createTag)
router.post('/create',streamController.createStreams)

router.get('/all',streamController.getStreams)
router.get('/:id',streamController.getStream)
router.get('/:id/views',streamController.getViews)
router.get(':id/comments',streamController.getComments)
router.get('/tags',streamController.getTags)


router.delete('/:id/delete',streamController.deleteStream)



module.exports = router;


// Add Later
// router.post('/:id/createLike',streamController.createLike)
// router.put('/:id/edit',streamController.updateStreams)

