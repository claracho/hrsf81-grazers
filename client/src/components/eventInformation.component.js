module.exports = {
  bindings: {
    eventId: '<',
    group: '<'
  },
  controller($http) {
    this.displayedSchedule = 'event';

    this.getSchedule = (eventId, groupId) => {
      const options = groupId
        ? { method: 'GET', url: `/schedule/${eventId}/${groupId}` }
        : { method: 'GET', url: `/schedule/${eventId}` };
      return $http(options)
        .then(response => response.data)
        .catch(console.error);
    };

    this.$onInit = function init() {
      $http({
        method: 'GET',
        url: `/event/${this.eventId}`
      })
        .then((response) => {
          this.event = response.data;
          return this.getSchedule(this.eventId);
        })
        .then((schedule) => {
          this.eventSchedule = schedule;
        })
        .catch(console.error);
    };

    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue) {
        this.getSchedule(this.eventId, this.group.id)
          .then((schedule) => {
            console.log('client side group schedule', schedule);
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
