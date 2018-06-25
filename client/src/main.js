import App from './App.html';

const app = new App({
	target: document.body,
	data: {filename: 'client/src/App.html', source: ''}
});

app.load();

export default app;