import "./globals.css";

type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
