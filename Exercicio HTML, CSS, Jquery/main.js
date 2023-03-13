$(document).ready(function() {
	// Adicionar nova tarefa
	$('#add-task').click(function() {
		var newTask = $('#new-task').val();
		if (newTask !== '') {
			$('#task-list').append('<li class="task">' + newTask + '</li>');
			$('#new-task').val('');
		}
	});

	// Riscar tarefa concluída
	$('#task-list').on('click', '.task', function() {
		$(this).toggleClass('completed');
	});
});