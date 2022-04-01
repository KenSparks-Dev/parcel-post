const submitGist = document.querySelector('button');

const submitResult = submitGist.addEventListener('click', function() {
	const gistTitle = document.querySelector('input').value;
	const gistContent = document.querySelector('textarea').value;
	fetch('https://api.github.com/gists', {
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
	const form = document.getElementById('my_form');
	form.reset();
});
