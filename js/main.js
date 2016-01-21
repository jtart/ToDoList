var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodoText = '';
  $scope.todos =
  [
    {id:1,text:'Make a todo list',done:false},
    {id:2,text:'Eat a mahoosive bowl of weetos',done:true}
  ];

  $scope.delete = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };

  $scope.add = function(e) {
    if ((e.which && e.which === 13) && $scope.newTodoText.length > 0) {
      var newId = $scope.todos[$scope.todos.length - 1].id + 1;
      $scope.todos.push({id:newId, text:$scope.newTodoText, done:false});
      $scope.newTodoText = '';
    }  
  };

  $scope.getTotalTodos = function () {
    var x = 0;
    angular.forEach($scope.todos, function(item) {
      if (item.done === false) {x++;}
    });
    return x;
  };
});