const express = require('express');
const stub = require('./stubData.js');
const db = require('../database/index');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/:eventId', (req, res) => {
  const eventId = Number(req.params.eventId);
  // db.getSchedulesByEvent(eventId)
  //   .then((schedulesData) => res.status(200).send(schedulesData.rows));
  db.getSchedulesByEvent(eventId)
    .then((schedulesData) => {
      return Promise.all(schedulesData.rows.map((schedule) => {
        const date = schedule.date;
        return db.getActivitiesByDay(schedule.id)
          .then(activitiesData => activitiesData.rows)
          .then((timetable) => {
            return { date, timetable };
          });
      }));
    })
    .then((results) => {
      res.status(200).send(results);
    });
});

router.get('/:scheduleId', (req, res) => {
  const scheduleId = Number(req.params.scheduleId);
  let schedule;
  for (let i = 0; i < stub.schedules.length; i += 1) {
    if (stub.schedules[i].id === scheduleId) {
      schedule = stub.schedules[i];
      break;
    }
  }
  res.status(200).send(schedule);
});

module.exports = router;
