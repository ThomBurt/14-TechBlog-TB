const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// FIND ALL PostS WITH THEIR COMMENTS
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       where: {
//         // use the ID from the session
//         user_id: req.session.user_id,
//       },
//       attributes: ['id', 'title', 'content', 'created_at'],
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             'id',
//             'comment_text',
//             'post_id',
//             'user_id',
//             'created_at'
//           ],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         },
//       ],
//     });

//     // Serialize data in array so the template can read it

//     const posts = postData.map(blog => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('dashboard', {
//       posts,
//       loggedIn: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // FIND A BLOG AND EDIT
// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ['id', 'title', 'created_at', 'content'],
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             'id',
//             'comment_text',
//             'post_id',
//             'user_id',
//             'created_at',
//           ],
//           include: {
//             model: User,
//             attributes: ['username'],
//           },
//         },
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });
//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }
//     // serialize
//     const blog = postData.get({ plain: true });
//     res.render('edit-blog', {
//       post,
//       loggedIn: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE post
// router.get('/create/', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       where: {
//         // use the ID from the session
//         user_id: req.session.user_id,
//       },
//       attributes: ['id', 'title', 'created_at', 'content'],
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             'id',
//             'comment_text',
//             'post_id',
//             'user_id',
//             'created_at',
//           ],
//           include: {
//             model: User,
//             attributes: ['username'],
//           },
//         },
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });
//     const posts = postData.map(post => post.get({ plain: true }));
//     res.render('create-blog', {
//       posts,
//       loggedIn: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      where: {
        user_id: req.session.user_id
      }
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
