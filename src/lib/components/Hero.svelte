<script lang="ts">
	import { site } from '$lib/config';
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Decorative gradient orbs -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
		style="background: radial-gradient(circle, rgba(20,184,166,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)"
	></div>
	<div
		class="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
		style="background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
	></div>

	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
		<h1 class="animate-fade-in-up font-heading text-5xl font-bold tracking-tight text-white md:text-7xl">
			Five<span class="text-teal-400">Bit</span>Rate
		</h1>

		<p class="animate-fade-in-up-slow mt-6 text-xl text-slate-300 md:text-2xl">
			{site.tagline}
		</p>

		<p class="animate-fade-in-up-slower mx-auto mt-6 max-w-xl text-slate-400">
			{site.description}
		</p>

		<div class="animate-fade-in-up-slower mt-10">
			<a
				href="/#products"
				class="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-400"
			>
				Explore Our Products
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</a>
		</div>
	</div>
</section>
