import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import { Home, About, Contact, User } from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "user/:userID",
				element: <User />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
