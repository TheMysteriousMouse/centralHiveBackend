const express = require('express');
const userController= require('../controllers/userController');

const router = express.Router()

router.post('/create',userController.createUser)

router.get('/search',userController.searchUser)
router.get('/:id/streams',userController.getUserStreams)

router.delete('/delete',userController.deleteUser)

// Add Later
// router.get('/:id/followers/:followerId',userController)
// router.get('/:id/following/following:Id',userController)
// router.get('/:id/followers',userController.getUserFollowers)
// router.get('/:id/following',userController.getUserFollowing)
// router.post('/follow',userController.follow)
// router.put('/unfollow',userController.unfollow)
// router.get('/account',userController.getAccount)




module.exports = router