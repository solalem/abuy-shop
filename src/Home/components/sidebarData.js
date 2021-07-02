import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Products",
	path: "#",
	icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
	iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
	iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

	subNav: [
	{
		title: "List",
		path: "/products",
		icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
		cName: "sub-nav",
	},
	{
		title: "New",
		path: "/products/new",
		icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
		cName: "sub-nav",
	}
	],
},
{
	title: "Support",
	path: "/support",
	icon: <FaIcons.FaHeart style={{ color:"#00a77d" }} />,
},
];
