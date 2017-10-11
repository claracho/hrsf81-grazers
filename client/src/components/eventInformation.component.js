module.exports = {
  bindings: {
    eventId: '<',
    group: '<'
  },
  controller($http) {
    this.displayedSchedule = 'event';

    this.getSchedule = scheduleId =>
      $http({
        method: 'GET',
        url: `/schedule/${scheduleId}`
      })
        .then(response => response.data)
        .catch(console.error);

    this.$onChanges = (changesObj) => {
      $http({
        method: 'GET',
        url: `/event/${this.eventId}`
      })
        .then(response => {
          return response.data;
        })
        .then((event) => {
          this.event = event;
          return event.scheduleId;
        })
        .then(this.getSchedule)
        .then((schedule) => {
          this.eventSchedule = schedule;
        })
        .catch(console.error);

      if (changesObj.group.currentValue) {
        this.getSchedule(this.group.scheduleId)
          .then((schedule) => {
            this.groupSchedule = schedule;
            this.displayedSchedule = schedule ? 'group' : 'event';
          })
          .catch(console.error);
      }
    };

    this.showSchedule = (scheduleType) => {
      this.displayedSchedule = scheduleType;
    };
  },
  templateUrl: 'eventInformation.template.html'
};
