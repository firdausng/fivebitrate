<script lang="ts">
	import { page } from '$app/stores';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	const navLinks = [
		{ label: 'About', href: '/#about' },
		{ label: 'Products', href: '/#products' },
		{ label: 'Contact', href: '/#contact' }
	];

	function handleNavClick(e: MouseEvent, href: string) {
		if ($page.url.pathname === '/' && href.startsWith('/#')) {
			e.preventDefault();
			const id = href.slice(2);
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
			menuOpen = false;
		}
	}

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-[#0a0a12]/80 shadow-lg backdrop-blur-xl'
		: ''}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-3 font-heading text-xl font-bold text-white">
			<svg viewBox="0 0 34 24" fill="currentColor" class="h-6 w-8 text-teal-400">
				<rect x="0" y="16" width="4" height="8" rx="1" opacity="0.35" />
				<rect x="7.5" y="11" width="4" height="13" rx="1" opacity="0.5" />
				<rect x="15" y="5" width="4" height="19" rx="1" opacity="0.65" />
				<rect x="22.5" y="9" width="4" height="15" rx="1" opacity="0.8" />
				<rect x="30" y="1" width="4" height="23" rx="1" />
			</svg>
			FiveBitRate
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={(e: MouseEvent) => handleNavClick(e, link.href)}
					class="text-sm font-medium text-slate-300 transition-colors hover:text-teal-400"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="text-slate-300 hover:text-white md:hidden"
			aria-label="Toggle menu"
		>
			{#if menuOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	{#if menuOpen}
		<div class="border-t border-slate-800 bg-[#0a0a12]/95 px-6 py-4 backdrop-blur-xl md:hidden">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={(e: MouseEvent) => handleNavClick(e, link.href)}
					class="block py-3 text-slate-300 transition-colors hover:text-teal-400"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
