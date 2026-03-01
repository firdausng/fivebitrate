<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { site } from '$lib/config';
</script>

<section id="contact" class="px-6 py-24">
	<div use:inview class="animate-on-scroll mx-auto max-w-4xl text-center">
		<h2 class="font-heading text-3xl font-bold text-white md:text-4xl">Get in Touch</h2>
		<div class="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500"></div>
		<p class="mx-auto mt-4 max-w-xl text-slate-400">
			Have a question or want to learn more about what we're building? We'd love to hear from you.
		</p>

		<a
			href="mailto:{site.contact.email}"
			class="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-700 px-6 py-3 text-lg text-teal-400 transition-all hover:border-teal-500/50 hover:bg-teal-500/5 hover:text-teal-300"
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
				/>
			</svg>
			{site.contact.email}
		</a>
	</div>
</section>
