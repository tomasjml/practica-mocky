import { useState, useEffect } from "react";
import MockyTableComponent from "./MockyTableComponent";
import { fetchMockies, deleteMockies } from "../service";

const MockyTableContainer = () => {
	const [mockies, setMockies] = useState([]);

	const fetchData = () => {
		fetchMockies("admin")
			.then(data => {
				setMockies(data);
			})
			.then(() => console.log(mockies));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onDelete = id => {
		deleteMockies(id).then(response => {
			console.log(response);
			fetchData();
		});
	};

	return (
		<>
			<MockyTableComponent mockies={mockies} onDelete={onDelete} fetchData={fetchData} />
		</>
	);
};

export default MockyTableContainer;
