import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Purpose</FooterLink>
			<FooterLink href="#">Goals</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="https://www.medicare.gov/">Medical bill Assistance </FooterLink>
			<FooterLink href="https://enroll.rhc.care/cdpap/?">At Home Medical Assistnce </FooterLink>
			<FooterLink href="https://new.mta.info/accessibility/paratransit">Transportation </FooterLink>
			<FooterLink href="https://www.masbia.org">Food assistance </FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="Mailto:mail@mail.com">PR </FooterLink>
			<FooterLink href="Mailto:Doctor@doctor.org">Doctor</FooterLink>
			<FooterLink href="Mailto:Frontdesk@Doctor.org">Front Desk</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
