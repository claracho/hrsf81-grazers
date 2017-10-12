module.exports = {
  bindings: {
    user: '<',
    group: '<',
    changeView: '<'
  },
  controller(groups) {
    this.event = 'Grazers Con';

    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue) {
        groups.getMembers(this.group.id)
          .then((members) => {
            this.members = members.filter(member => member.id !== this.user.id);
          })
          .catch(console.error);
      }
    };

    groups.get()
      .then((groupsData) => {
        this.groups = groupsData;
      })
      .catch(console.error);
  },
  templateUrl: 'controlPanel.template.html'
};
