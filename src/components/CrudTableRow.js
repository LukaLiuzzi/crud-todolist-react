import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
	const { proyect, issue, id } = el;
	return (
		<tr>
			<td>{proyect}</td>
			<td>{issue}</td>
			<td>
				<button onClick={() => setDataToEdit(el)}>Editar</button>
				<button onClick={() => deleteData(id)}>Eliminar</button>
			</td>
		</tr>
	);
};

export default CrudTableRow;
