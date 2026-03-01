<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { products } from '$lib/config';
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
					<img
						src={product.logo}
						alt="{product.title} logo"
						class="mb-6 h-12 w-12 rounded-xl object-contain"
					/>

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
