import React from "react";

const DarkRoundedButton = () => {
	return (
		<button className="bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 inline-flex items-center justify-center rounded-full border px-7 py-3 text-center text-base font-medium text-white">
			Get Started
		</button>
	);
};

export default DarkRoundedButton;
