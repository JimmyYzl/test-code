
// function getEl(user) {
	// 	if(user) {
		// 		return <h1>Hello {user}</h1>
		// 	}else{
			// 		return <h1>Hello World!</h1>
			// 	}
			// }
			
			// let el = React.createElement(
				// 	'h1',
				// 	{className: 'colorText'},
				// 	"Hello world"
				// )
				
				
setInterval(() => {	
	let el = (
		<div>
			<h1>现在时间是：</h1>
			<p>{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
		</div>
	);
	ReactDOM.render(el, document.getElementById('root'));
}, 1000)
