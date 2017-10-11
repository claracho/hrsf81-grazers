module.exports = {
  bindings: {
    eventId: '<',
    group: '<'
  },
  controller($http) {
    this.displayedSchedule = 'event';

    this.getSchedule = eventId =>
      $http({
        method: 'GET',
        url: `/schedule/${eventId}`
      })
        .then(response => response.data)
        .catch(console.error);

    this.$onInit = function init() {
      $http({
        method: 'GET',
        url: `/event/${this.eventId}`
      })
        .then(response => {
          this.event = response.data;
          return this.getSchedule(this.eventId);
        })
        .then((schedules) => {
          this.eventSchedule = schedules;
        })
        .catch(console.error);
    };

    this.$onChanges = (changesObj) => {
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
