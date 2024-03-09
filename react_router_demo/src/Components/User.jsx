import React from "react";
import { useParams } from "react-router-dom";

function User() {
	const { userID } = useParams();

	return (
		<div
			className="component p-4"
			style={{ backgroundColor: "purple", minHeight: "80vh" }}>
			user : {userID}
		</div>
	);
}

export default User;
