import { useState, useEffect } from "react";
import MockyTableComponent from "./MockyTableComponent";
import { fetchMockies } from "../service";

const MockyTableContainer = () => {
	const [mockies, setMockies] = useState([]);

	useEffect(() => {
		fetchMockies("admin")
			.then(data => {
				setMockies(data);
			})
			.then(() => console.log(mockies));
	}, []);

	return (
		<>
			<MockyTableComponent mockies={mockies} />
		</>
	);
};

export default MockyTableContainer;
