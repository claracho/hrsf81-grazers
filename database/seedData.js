module.exports = {

  events: [
    {
      name: 'Grazers Con',
      location: '944 Market Street, 8th floor, San Francisco, CA 94102',
      organizerId: 1,
      scheduleId: 1
    }
  ],

  schedules: [
    {
      date: 'October 9, 2017',
      eventId: 1
    },
    {
      date: 'October 10, 2017',
      eventId: 1
    }
  ],

  activities: [
    {
      time: '8:00 AM to 10:00 AM',
      activity: 'Registration',
      location: 'Front Lobby',
      scheduleId: 1
    },
    {
      time: '10:00 AM to 11:00 AM',
      activity: 'Keynote Speaker',
      location: 'Main Auditorium',
      scheduleId: 1
    },
    {
      time: '12:00 PM to 1:30 PM',
      activity: 'Lunch',
      location: 'Grand Ballroom',
      scheduleId: 1
    },
    {
      time: '2:00 PM to 4:00 PM',
      activity: 'Breakout Sessions I',
      location: 'Blue, Green and Yellow Rooms',
      scheduleId: 1
    },
    {
      time: '4:30 PM to 6:30 PM',
      activity: 'Breakout Sessions II',
      location: 'Blue, Green and Yellow Rooms',
      scheduleId: 1
    },
    {
      time: '6:30 PM to 8:30 PM',
      activity: 'Dinner',
      location: 'Grand Ballroom',
      scheduleId: 1
    },
    {
      time: '9:00 PM to 11:30 PM',
      activity: 'Movies Under the Stars',
      location: 'Center Gardens',
      scheduleId: 1
    },
    {
      time: '9:00 AM to 10:00 AM',
      activity: 'Continental Breakfast',
      location: 'Grand Ballroom',
      scheduleId: 2
    },
    {
      time: '10:00 AM to 11:30 AM',
      activity: 'Panel: Famous People',
      location: 'Main Auditorium',
      scheduleId: 2
    },
    {
      time: '12:00 PM to 1:00 PM',
      activity: 'Lunch',
      location: 'Grand Ballroom',
      scheduleId: 2
    },
    {
      time: '2:00 PM to 6:00 PM',
      activity: 'Art Exhibition',
      location: 'Center Gardens',
      scheduleId: 2
    },
    {
      time: '3:00 PM to 4:30 PM',
      activity: 'Tea Time',
      location: 'Grand Ballroom',
      scheduleId: 2
    },
    {
      time: '6:00 PM to 8:00 PM',
      activity: 'Dinner',
      location: 'Grand Ballroom',
      scheduleId: 2
    },
    {
      time: '8:00 PM to 9:30 PM',
      activity: 'Awards Ceremony',
      location: 'Main Auditorium',
      scheduleId: 2
    }
  ],

  groups: [
    {
      name: 'Greeters',
      type: 'staff',
      eventId: 1,
    },
    {
      name: 'Volunteers',
      type: 'staff',
      eventId: 1,
    },
    {
      name: 'Tech Support',
      type: 'staff',
      eventId: 1,
    },
    {
      name: 'General Admissions',
      type: 'attendee',
      eventId: 1,
    }
  ],

  groupActivity: [
    {
      groupId: 1,
      activityId: 1
    },
    {
      groupId: 2,
      activityId: 1
    },
    {
      groupId: 3,
      activityId: 1
    },
    {
      groupId: 4,
      activityId: 2
    },
    {
      groupId: 2,
      activityId: 3
    },
    {
      groupId: 1,
      activityId: 4
    },
    {
      groupId: 1,
      activityId: 5
    },
    {
      groupId: 3,
      activityId: 6
    },
    {
      groupId: 3,
      activityId: 7
    },
    {
      groupId: 2,
      activityId: 7
    },
    {
      groupId: 1,
      activityId: 8
    },
    {
      groupId: 4,
      activityId: 8
    },
    {
      groupId: 3,
      activityId: 8
    },
    {
      groupId: 2,
      activityId: 9
    },
    {
      groupId: 3,
      activityId: 10
    },
    {
      groupId: 2,
      activityId: 11
    },
    {
      groupId: 2,
      activityId: 12
    },
    {
      groupId: 1,
      activityId: 12
    },
    {
      groupId: 4,
      activityId: 13
    },
    {
      groupId: 4,
      activityId: 14
    },
    {
      groupId: 3,
      activityId: 14
    }
  ],

  organizer: {
    role: 'organizer',
    firstname: 'Laurent',
    lastname: 'Frazier',
    email: 'laurent@grazerscon.com',
    phone: '555-235-9802'
  },

  users: [
    {
      role: 'staff',
      firstname: 'David',
      lastname: 'Friedman',
      email: 'david@grazerscon.com',
      phone: '555-492-1763'
    },
    {
      role: 'staff',
      firstname: 'Austin',
      lastname: 'Sloane',
      email: 'austin@grazerscon.com',
      phone: '555-687-9321'
    },
    {
      role: 'staff',
      firstname: 'Haruki',
      lastname: 'Dante',
      email: 'haruki@grazerscon.com',
      phone: '555-234-0745'
    },
    {
      role: 'attendee',
      firstname: 'Christine',
      lastname: 'Wong',
      email: 'christine@randomperson.com',
      phone: '555-299-4236'
    },
    {
      role: 'staff',
      firstname: 'Rafiqa',
      lastname: 'Chukwudi',
      email: 'rafiqa@grazerscon.com',
      phone: '555-596-4104'
    }
  ],

  userGroups: [
    {
      groupId: 2,
      userId: 3
    },
    {
      groupId: 2,
      userId: 4
    },
    {
      groupId: 3,
      userId: 2
    },
    {
      groupId: 1,
      userId: 5
    },
    {
      groupId: 2,
      userId: 6
    }
  ],

  messages: [
    {
      fromId: 3,
      toIds: [2],
      title: '',
      text: 'I just signed in for lemonade stand duty and we are out of lemons!',
      eventId: 1,
      timestamp: new Date(),
      msgGroupId: 1
    },
    {
      fromId: 1,
      toIds: [1, 2],
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1,
      timestamp: new Date(),
      msgGroupId: 2
    },
    {
      fromId: 1,
      toIds: [3],
      title: 'Room Change',
      text: 'The "Guilt-Free Grazing" seminar has moved from the Grand Ballroom to the Autumm room.',
      eventId: 1,
      timestamp: new Date(),
      msgGroupId: 2
    },
    {
      fromId: 1,
      toIds: [4],
      title: 'Welcome!',
      text: 'Post your memories to Instagram with hashtag #GrazerCon2017. Daily prizes for best photo!',
      eventId: 1,
      timestamp: new Date(),
      msgGroupId: 3
    }
  ]
};
