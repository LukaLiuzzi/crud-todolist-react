import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp = () => {
	const [db, setDb] = useState([]);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {
		data.id = Date.now();
		setDb([...db, data]);
	};
	const updateData = (data) => {
		const newData = db.map((el) => (el.id === data.id ? data : el));
		setDb(newData);
	};

	const deleteData = (id) => {
		const isDelete = window.confirm(
			"Are you sure you want to delete the record?"
		);

		if (isDelete) {
			const newData = db.filter((el) => el.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div>
			<h1>Crud App</h1>
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable
				data={db}
				setDataToEdit={setDataToEdit}
				deleteData={deleteData}
			/>
		</div>
	);
};

export default CrudApp;
