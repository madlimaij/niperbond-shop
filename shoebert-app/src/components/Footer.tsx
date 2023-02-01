import { normalize } from "path";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
	footer: {
		display: "flex",
		justifyContent: "center",
		height: 70,
		bottom: 0,
		width: "100%",
		backgroundColor: theme.colors.lightBrown,
	},

	title: {
		fontFamily: theme.font.fontFamily,
		color: theme.colors.black,
		fontSize: theme.typography.body,
		fontWeight: "400px",
		textAlign: "center",
		display: "flex",
		alignItems: "center",
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<div className={classes.title}>
				&copy; Copyright by Madli, Merje, Hanna, Liisi ja Kairit
			</div>
		</div>
	);
};

//Teha css (pruun kast). Viimase asjana teha copyright asi. Teistel lehtedel footeri taust helepruun

export default Footer;
