const pathStart = '/projectImages/';
const projects = [
	{
		title: 'Financial Education Discord Bot',
		technologies: ['Node.js', 'MongoDB', 'TypeScript'],
		// preview: pathStart + 'imageprocess-speed.gif',
		description:
			'The is a quiz bot that allows users to quiz themselves on basic financial concepts and earn points for solving questions correctly. Keep track of your financial knowledge and compete with your friends on the leaderboard!',
		url: 'https://github.com/satm-24/Financial-Education-Discord-Bot'
	},
	{
		title: 'Cryptocurrency Price Tracker',
		technologies: ['React'],
		preview: pathStart + 'crypto.jpg',
		description:
			'A simple cryptocurrency price tracker making use of the CoinGecko API to fetch price and market data for various cryptocurrencies.',
		url: 'https://github.com/satm-24/crypto-tracker'
	},
	{
		title: 'Image Processing Software',
		technologies: ['Java', 'Swing GUI'],
		preview: pathStart + 'imageprocess-speed.gif',
		description:
			'A simple image processing software that allows users to generate images and apply various filters (sharpening, blurring) and color transformations (sepia, greyscale, custom matrix) to them.',
		url: 'https://github.com/satm-24/Image-Manipulator'
	},
	{
		title: 'Maze Solving with Algorithms',
		technologies: ['Java'],
		preview: pathStart + 'maze.gif',
		description:
			'This is a simple maze solving application that uses various algorithms, such as Depth First Search (DFS) and Breadth First Search (BFS) to solve randomly generated mazes.',
		url: 'https://github.com/satm-24/Maze-Solver'
	}
];

export default projects;
