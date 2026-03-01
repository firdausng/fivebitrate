export const site = {
	name: 'FiveBitRate',
	tagline: 'Building software that simplifies your businesses',
	description:
		'We develop and operate software products that help individuals and small businesses manage their financial lives with clarity and ease.',
	url: 'https://fivebitrate.com',
	contact: {
		email: 'support@fivebitrate.com'
	}
} as const;

export type Product = {
	title: string;
	tagline: string;
	description: string;
	url: string;
	logo: string;
};

export const products: Product[] = [
	{
		title: 'DuitGee',
		tagline: 'Track Money, Not Drama',
		description:
			'Group expense tracking made simple. Create shared vaults, log expenses in real-time, and settle up with ease — perfect for roommates, travel groups, and families.',
		url: 'https://duitgee.com',
		logo: 'https://duitgee.com/favicon.svg'
	},
	{
		title: 'Gee Ledger',
		tagline: 'Your finances, clearly organised',
		description:
			'A multi-business accounting platform for freelancers and entrepreneurs. Manage income, invoicing, products, and team access across all your ventures from one dashboard.',
		url: 'https://geeledger.com',
		logo: 'https://geeledger.com/favicon.svg'
	},
	{
		title: 'BikeSynergy',
		tagline: 'Mountain bike equipment, maintenance & coaching',
		description:
			'Specialist mountain bike supplier with over 20 years of experience. Offering discounted bikes, on-campus maintenance services, and professional coaching.',
		url: 'https://bikesynergy.com',
		logo: 'https://bikesynergy.com/favicon.ico'
	}
];
