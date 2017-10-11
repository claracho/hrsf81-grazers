const express = require('express');
const stub = require('./stubData.js');
const db = require('../database/index');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.route('/:eventId')
  .get((req, res) => {
    const eventId = Number(req.params.eventId);
    db.getEvent(eventId)
      .then(eventData => res.status(200).send(eventData.rows[0]));
  })
  .put((req, res) => {
    const updatedEventObj = req.body;
    updatedEventObj.id = Number(req.params.eventId);
    res.status(200).send(updatedEventObj);
  });

router.route('/:eventId/groups')
  .get((req, res) => {
    const eventId = Number(req.params.eventId);
    db.getGroupsByEvent(eventId)
      .then(groupsData => res.status(200).send(groupsData.rows));
  })
  .post((req, res) => {
    const newGroupObj = req.body;
    newGroupObj.eventId = Number(req.params.eventId);
    res.status(201).send(newGroupObj);
  });

router.get('/:eventId/messages', (req, res) => {
  res.status(200).send(stub.messages);
});

router.get('/:eventId/users', (req, res) => {
  res.status(200).send(stub.users);
});

router.get('/:eventId/schedule', (req, res) => {
  const eventId = Number(req.params.eventId);
  let event;
  for (let i = 0; i < stub.events.length; i += 1) {
    if (stub.events[i].id === eventId) {
      event = stub.events[i];
      break;
    }
  }
  let schedule;
  for (let i = 0; i < stub.schedules.length; i += 1) {
    if (stub.schedules[i].id === event.scheduleId) {
      schedule = stub.schedules[i];
      break;
    }
  }
  res.status(200).send(schedule);
});

module.exports = router;
