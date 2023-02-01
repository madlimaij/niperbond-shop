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

type FooterProps={
	cname?:any;
}

const Footer: React.FC<FooterProps> = (props) => {
	const classes = useStyles();
	const currentYear = new Date().getFullYear();
	return (
		<div className={`${classes.footer} ${props.cname}`}>
			<div className={classes.title}>
				&copy; {new Date().getFullYear()} Niperbond by Madli, Merje, Hanna, Liisi, Edith ja Kairit
			</div>
		</div>
	);
};


export default Footer;
