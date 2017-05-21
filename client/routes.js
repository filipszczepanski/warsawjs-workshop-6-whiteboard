FlowRouter.route('/', {
  action() {
    Meteor.call('createBoard', (error, boardId) => {
      if (error) {
        alert(error.message);
      }
      else if (boardId) {
        FlowRouter.go(`/boards/${boardId}`);
      }
    });
  }
});

FlowRouter.route('/boards/:id', {
  action() {
    BlazeLayout.render('Board', {
      content: 'main'
    });
  }
});
