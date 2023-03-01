function CreateCard() {
	return (
		<>
			<button onClick={() => console.log('card created')}>card</button>
		</>
	);
}

function App() {
	const repairAcc = () => {
		const acc = 'acc';
		const newAcc = 'newAcc';
		return newAcc;
	};
	return (
		<div onClick={repairAcc} className='App'>
			작업 환경 김혜준,fdss
			<CreateCard />
		</div>
	);
}

export default App;
