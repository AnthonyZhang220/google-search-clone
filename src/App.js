import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Catogories } from "./components/Catogories";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-[#ffffff] dark:bg-[#202124] dark:text-gray-200 min-h-screen">
				<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<Catogories darkTheme={darkTheme}/>
				<Footer />
			</div>
		</div>
	);
};

export default App;
