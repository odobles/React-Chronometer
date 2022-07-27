import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-solid-svg-icons'

//create your first component
const Timer = () => {

	const [seconds,setSeconds]=useState(0);
	const [minutes,setMinutes]=useState(0);
	const [hours,setHours]=useState(0);
	const [days,setDays]=useState(0);

	var timer;

	useEffect(() => {
		timer=setInterval(()=>{

			setSeconds(seconds+1);

			 if (seconds === 59){
				setMinutes(minutes+1);
				setSeconds(0);
			 }
			 if (minutes === 59 && seconds === 59){
				setHours(hours+1)
				setMinutes(0);
				setSeconds(0);
			 }

			 if (hours === 23 && minutes === 59 && seconds === 59){
				setDays(days+1)
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			 }
		},1000)

	return ()=>clearInterval(timer);

	})

	return(
		<div className="timer">
			<div className="d-flex flex-row justify-content-center bg-dark text-light p-4">
				<div className="p-2 my-4">
					<div className="card-body">
						<p className="card-text py-3 px-lg-4"><FontAwesomeIcon icon={faClockFour} size="5x" /></p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">0</p>
					</div>
				</div>

				<div className="p-2 px-sm-0 mt-5">
					<div className="card-body px-sm-0">
						<p className="card-colon display-6">:</p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">0</p>
					</div>
				</div>
				
				<div className="p-2 px-sm-0 mt-5">
					<div className="card-body px-sm-0">
						<p className="card-colon display-6">:</p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">{days}</p>
					</div>
					<p className="card-foot text-center">Days</p>
				</div>
				
				<div className="p-2 px-sm-0 mt-5">
					<div className="card-body px-sm-0">
						<p className="card-colon display-6">:</p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">{hours}</p>
					</div>
					<p className="card-foot text-center">Hours</p>
				</div>
				
				<div className="p-2 px-sm-0 mt-5">
					<div className="card-body px-sm-0">
						<p className="card-colon display-6">:</p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">{minutes}</p>
					</div>
					<p className="card-foot text-center">Minutes</p>
				</div>
				
				<div className="p-2 px-sm-0 mt-5">
					<div className="card-body px-sm-0">
						<p className="card-colon display-6">:</p>
					</div>
				</div>

				<div className="p-2 bg-secondary py-3 px-lg-4 m-3 rounded border border-light">
					<div className="card-body">
						<p className="card-text display-6 py-4 px-3">{seconds}</p>
					</div>
					<p className="card-foot text-center">Seconds</p>
				</div>
			</div>
		</div>
	)
};

export default Timer;
