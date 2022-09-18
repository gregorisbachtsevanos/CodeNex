import React, { useState, useEffect, useCallback } from "react";
import "./TripList.css";

const TripList = () => {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState("http://localhost:3000/trips");

	const fetchTtrips = useCallback(async () => {
		const res = await fetch(url);
		const json = await res.json();
		setTrips(json);
	}, [url]);

	console.log(trips);
	useEffect(() => {
		fetchTtrips();
	}, [fetchTtrips]);

	return (
		<div className="trip-list">
			<ul>
				{trips.map((trip) => {
					return (
						<li key={trip.id}>
							<h3>{trip.title}</h3>
							<p>{trip.price}</p>
						</li>
					);
				})}
			</ul>
			<div className="filter">
				<button
					onClick={() =>
						setUrl("http://localhost:3000/trips?loc=europe")
					}
				>
					Euporean Trips
				</button>
				<button onClick={() => setUrl("http://localhost:3000/trips")}>
					All Trips
				</button>
			</div>
		</div>
	);
};

export default TripList;
