import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
	return (
		<div className="table">
			<h2>To Do list</h2>
			<table>
				<thead>
					<tr>
						<th>Proyect</th>
						<th>Issue</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan="3">No data</td>
						</tr>
					) : (
						data.map((el) => (
							<CrudTableRow
								key={el.id}
								el={el}
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
