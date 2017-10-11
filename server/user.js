const express = require('express');
const stub = require('./stubData.js');
const db = require('../database/index');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Handing /user routes');
  next();
});

router.route('/:userId')
  .get((req, res) => {
    const userId = Number(req.params.userId);
    let user;
    for (let i = 0; i < stub.users.length; i += 1) {
      if (stub.users[i].id === userId) {
        user = stub.users[i];
      }
    }
    res.status(200).send(user);
  })
  .put((req, res) => {
    const updatedUserObj = req.body;
    updatedUserObj.id = Number(req.params.userId);
    res.status(201).send(updatedUserObj);
  });

router.get('/:userId/group', (req, res) => {
  const userId = Number(req.params.userId);
  db.getGroupByUser(userId)
    .then(groupData => {
      res.status(200).send(groupData.rows[0]);
    });
});

module.exports = router;
