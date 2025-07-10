import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//include images into your bundle
import { SecondsCounter } from "./SecondsCounter";

//create your first component
const Home = ({ counter, userTime }) => {

	let counterDigits = counter.toString().split('').reverse();

	userTime = userTime.toString().split('').reverse();

	if (JSON.stringify(counterDigits) === JSON.stringify(userTime)) {
		setTimeout(() => {
			alert("Se ha alcanzado el tiempo solicitado. Pulse aceptar para reanudar el contador.");
		}, 100);
	}

	if (counterDigits.length === 7) {
		setTimeout(() => {
			alert("Se ha alcanzado el límite de tiempo permitido. Gracias por su visita.");
		}, 100);
	}

	return (
		<div className="row px-5 py-3 m-3 bg-black d-flex justify-content-center align-items-center">
			<div className="col bg-dark m-2 px-4 border border-secondary border-2 border-opacity-25 rounded d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
				<p className="text-white fw-bold" style={{ fontSize: "70px" }}>{<FontAwesomeIcon icon={faClock} />}</p>
			</div>
			< SecondsCounter counter={counterDigits.length == 6 ? counterDigits[5] : 0} />
			< SecondsCounter counter={counterDigits.length >= 5 ? counterDigits[4] : 0} />
			< SecondsCounter counter={counterDigits.length >= 4 ? counterDigits[3] : 0} />
			< SecondsCounter counter={counterDigits.length >= 3 ? counterDigits[2] : 0} />
			< SecondsCounter counter={counterDigits.length >= 2 ? counterDigits[1] : 0} />
			< SecondsCounter counter={counterDigits[0]} />
		</div>
	);
};

export default Home;