'use strick';

const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');

boxOne.addEventListener('click', function (e) {
	let content;
	let task;
	if (e.target.classList.contains('task')) {
		content = e.target.textContent;
		task = e.target;
		boxOne.removeChild(task);
	}
	task.style.textDecoration = 'line-through';
	boxTwo.append(task);
	console.log(task);
});
