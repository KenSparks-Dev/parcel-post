//Loading Animation
const loader = document.querySelector('#loading');
function displayLoading() {
	loader.classList.add('display')
	setTimeout(() => {
		loader.classList.remove('display')
	}, 2000)
}
async function postToGist() {
	const gistTitle = document.querySelector('input').value;
	const gistContent = document.querySelector('textarea').value;
	const postSubmission = await fetch('https://api.github.com/gists', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `token ${process.env.GITHUB_AUTH}`
		},
		body: JSON.stringify({
			description: gistTitle,
			public: true,
			files: {
				'testing-API.md': {
					content: gistContent
				}
			}
		})
	});
	displayLoading()
}

const submitGist = document.querySelector('button');
submitGist.addEventListener('click', postToGist);


function hideLoading(){
	loader.classList.remove('display');
}
submitGist.addEventListener('click', function() {
	setTimeout(() => {
		thankyou.style.display = 'flex';
	}, 3000);
});


//Thank You
const thankyou = document.getElementById('thankyou');
const resetForm = document.getElementById('my_form')
console.log(thankyou)
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function() {
	let thankyou = document.getElementById('thankyou');
	thankyou.style.display = 'none';
	resetForm.reset()
});


