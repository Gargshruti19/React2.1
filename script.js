import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
	"h1",
	{
		id: "title",
	},
	"Hellow Everyone !"
);

const heading2 = React.createElement(
	"h2",
	{ id: "title2" },
	"Hellow Everyone 2 !"
);
const heading3 = React.createElement(
	"h3",
	{ id: "title3" },
	"Hellow Everyone 3!"
);

const heading4 = React.createElement(
	"h4",
	{ id: "title4" },
	"Hellow Everyone 4 !"
);

const container = React.createElement(
	"div",
	{
		id: "container",
	},
	[heading, heading2, heading3, heading4]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
