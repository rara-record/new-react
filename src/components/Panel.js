/* eslint-disable array-callback-return */
import React from 'react'

function Panel(props) {
	return (
		<>
			{
				props.names.map((data, index) => {
					let imgSrc = `${props.path}/img/${data}.jpg`
					let style = { transform: `rotate(${props.deg * index}deg) translateY(-100vh)` }

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

export default Panel
