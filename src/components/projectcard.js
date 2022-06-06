import React from "react";

import { NewsHeaderCard, ProductCard } from "react-ui-cards";

export const Example = (props) => (
	<NewsHeaderCard
		href='https://github.com/nekonee'
		thumbnail='https://i.imgur.com/rLFk5nd.jpg'
		title='Polish mountaineers on the top'
		author='Daily Sport'
		date='Feb 2, 2018'
		tags={["nature", "photo", () => <i>component</i>]}
	/>
);
