import "./globals.css";

export const metadata = {
	title: "Khana Khazana",
	description: "Your favorite food stop!",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}

