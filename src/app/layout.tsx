import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Header />

					<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
