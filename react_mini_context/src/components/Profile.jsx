import React, { useContext } from "react";

import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);
	if (!user)
		return (
			<div>
				<h1>Please Login</h1>
			</div>
		);

	return (
		<div>
			<h1>
				Welcome {user.username} your password is {user.password}
			</h1>
		</div>
	);
}

export default Profile;
