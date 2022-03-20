import React, { useState, useEffect } from "react";

const initialForm = {
	id: null,
	proyect: "",
	issue: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.proyect || !form.issue) {
			alert("Datos incompletos");
			return;
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<h3>{dataToEdit ? "Edit" : "Add"}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="proyect"
					placeholder="Proyect"
					onChange={handleChange}
					value={form.proyect}
				/>
				<input
					type="text"
					name="issue"
					placeholder="Issue"
					onChange={handleChange}
					value={form.issue}
				/>
				<button type="submit">Submit</button>
				<button type="reset" onClick={handleReset}>
					Reset
				</button>
			</form>
		</div>
	);
};

export default CrudForm;
