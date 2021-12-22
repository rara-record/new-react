import { useState } from "react";

function Panel() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const path = process.env.PUBLIC_URL;
	const deg = 360 / arr.length;

	/*
		useState Hook을 이용하면 state로 자주 변경되는 값의 관리가 가능하다.
		state값이 변경되면 해당 state값의 영향을 받는 모든 JSX가 자동으로 재 랜더링 된다.
		useState()함수에 관리 할 값을 인수로 넣어서 실행하면,
		리턴으로 배열값이 반환되는데,
		첫번째 배열 반환값에는 state,
		두번째 배열 반환값에는 해당 state를 변경할 수 있는 함수가 반환된다.

		state의 값 변경은 무조건 state변경 함수로만 변경이 가능하다.

	*/

	// useState함수에 arr배열을 인수로 넣어서, names란 변수에는 state값을 받고, setNames변수에는 수정 함수값을 저장한다.
	let [names, setNames] = useState(arr);

	return (
		<>
			{
				names.map((data, index) => {
					let style = { transform: `rotate(${deg * index}deg) translateY(-100vh)` }
					let imgSrc = `${path}/img/${data}.jpg`

					return (
						<article key={index} style={style}>
							<div className="inner">
								<div className="pic">
									<img src={imgSrc} alt="" />
								</div>

								<h2>{data}</h2>
							</div>
						</article>
					)
				})
			}
		</>
	)
}

export default Panel;