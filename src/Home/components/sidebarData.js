import React from "react";
import * as FaIcons from "react-icons/fa";

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
		title: "Department",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/departments",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/departments/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "Category",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/categories",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/categories/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "Commodity",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/commodities",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/commodities/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "BusinessTemplate",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/business-templates",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/business-templates/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "Seller",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/sellers",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/sellers/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "Item",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/items",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/items/new",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			}
		],
	},
        
    {
		title: "Bundle",
		path: "#",
		icon: <FaIcons.FaCircle style={{ color:"#00a77d" }} />,
		iconClosed: <FaIcons.FaChevronDown style={{ color:"#00a77d" }} />,
		iconOpened: <FaIcons.FaChevronUp style={{ color:"#00a77d" }} />,

		subNav: [
			{
				title: "List",
				path: "/bundles",
				icon: <FaIcons.FaCircleNotch style={{ color:"#00a77d" }} />,
				cName: "sub-nav",
			},
			{
				title: "New",
				path: "/bundles/new",
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
