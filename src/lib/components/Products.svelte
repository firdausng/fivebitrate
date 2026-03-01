<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const products = [
		{
			title: 'DuitGee',
			tagline: 'Track Money, Not Drama',
			description:
				'Group expense tracking made simple. Create shared vaults, log expenses in real-time, and settle up with ease — perfect for roommates, travel groups, and families.',
			url: 'https://duitgee.com',
			icon: 'users'
		},
		{
			title: 'Gee Ledger',
			tagline: 'Your finances, clearly organised',
			description:
				'A multi-business accounting platform for freelancers and entrepreneurs. Manage income, invoicing, products, and team access across all your ventures from one dashboard.',
			url: 'https://geeledger.com',
			icon: 'ledger'
		},
		{
			title: 'BikeSynergy',
			tagline: 'Mountain bike equipment, maintenance & coaching',
			description:
				'Specialist mountain bike supplier with over 20 years of experience. Offering discounted bikes, on-campus maintenance services, and professional coaching.',
			url: 'https://bikesynergy.com',
			icon: 'bike'
		}
	];
</script>

<section id="products" class="bg-slate-900/40 px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<div use:inview class="animate-on-scroll text-center">
			<h2 class="font-heading text-3xl font-bold text-white md:text-4xl">Our Products</h2>
			<div
				class="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500"
			></div>
			<p class="mx-auto mt-4 max-w-2xl text-slate-400">
				From financial tools to specialist services, we build and manage products that solve real
				problems.
			</p>
		</div>

		<div class="mt-14 grid gap-8 md:grid-cols-3">
			{#each products as product, i}
				<a
					href={product.url}
					target="_blank"
					rel="noopener noreferrer"
					use:inview
					class="animate-on-scroll group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5"
					style="transition-delay: {i * 0.1}s"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400"
					>
						{#if product.icon === 'users'}
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						{:else if product.icon === 'ledger'}
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
								/>
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<circle cx="5.5" cy="17.5" r="3" />
								<circle cx="18.5" cy="17.5" r="3" />
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.5 17.5h7M8.5 17.5l2-7h5l2 7M10.5 10.5L12 4l4.5 2.5"
								/>
							</svg>
						{/if}
					</div>

					<h3 class="font-heading text-xl font-semibold text-white">{product.title}</h3>
					<p class="mt-1 text-sm font-medium text-teal-400">{product.tagline}</p>
					<p class="mt-3 text-slate-400">{product.description}</p>

					<span
						class="mt-5 inline-flex items-center gap-1 text-sm text-slate-500 transition-colors group-hover:text-teal-400"
					>
						Visit site
						<svg
							class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>
