'use strick';

const task = [
	{
		id: 1,
		taskName: 'Add Html',
	},
	{
		id: 2,
		taskName: 'Add Css',
	},
	{
		id: 3,
		taskName: 'Add script',
	},
	{
		id: 4,
		taskName: 'Add task',
	},
	{
		id: 5,
		taskName: 'Add vue',
	},
	{
		id: 6,
		taskName: 'Send Pechyrov',
	},
];

const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');

function createTask() {
	task.forEach(el => {
		const span = document.createElement('span');
		span.classList.add('task');
		span.textContent = `#${el.id} ${el.taskName}`;
		boxOne.append(span);
	});
}
createTask();

boxOne.addEventListener('click', function (e) {
	let content;
	let task;
	if (e.target.classList.contains('task')) {
		content = e.target.textContent;
		task = e.target;
		boxOne.removeChild(task);

		task.style.textDecoration = 'line-through';
		boxTwo.append(task);
	}
});
