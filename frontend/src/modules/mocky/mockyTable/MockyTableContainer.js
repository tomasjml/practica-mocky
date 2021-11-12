import { useState, useEffect } from "react";
import MockyTableComponent from "./MockyTableComponent";
import { fetchMockies, deleteMockies } from "../service";
import NavBarContainer from "../../NavBar/NavBarContainer";

const MockyTableContainer = () => {
	const [mockies, setMockies] = useState([]);

	const fetchData = () => {
		fetchMockies("admin@mocky.com").then(data => {
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
			<NavBarContainer />
			<MockyTableComponent mockies={mockies} onDelete={onDelete} />
		</>
	);
};

export default MockyTableContainer;
