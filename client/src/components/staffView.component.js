module.exports = {
  bindings: {
    user: '<'
  },
  controller(groups) {
    this.$onInit = function init() {
      groups.getGroup(this.user.id)
        .then((group) => {
          this.group = group;
        })
        .catch(console.error);
    };
  },
  template: `
    <group-membership user="$ctrl.user" group="$ctrl.group"></group-membership>
    <group-updates user="$ctrl.user" group="$ctrl.group"></group-updates>
    <event-information></event-information>
  `
};
