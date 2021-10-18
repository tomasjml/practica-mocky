import { useState, useEffect } from "react";
import MockyTableComponent from "./MockyTableComponent";
import { fetchMockies, deleteMockies } from "../service";

const MockyTableContainer = () => {
	const [mockies, setMockies] = useState([]);

	const fetchData = () => {
		fetchMockies("admin").then(data => {
			setMockies(data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onDelete = id => {
		deleteMockies(id).then(() => {
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
