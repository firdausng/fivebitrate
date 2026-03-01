<script lang="ts">
	import { site } from '$lib/config';
</script>

<svelte:head>
	<title>Terms of Service — {site.name}</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 pt-32 pb-16">
	<div class="prose prose-invert prose-slate max-w-none prose-headings:font-heading prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline">
		<h1>Terms of Service</h1>
		<p class="text-slate-400">Last updated: March 1, 2026</p>

		<p>
			These Terms of Service ("Terms") govern your use of the products and services provided by
			{site.name} ("we", "us", or "our"). By accessing or using our services, you agree to be bound
			by these Terms.
		</p>

		<h2>Acceptance of Terms</h2>
		<p>
			By creating an account or using any of our products, you acknowledge that you have read,
			understood, and agree to be bound by these Terms. If you do not agree, please do not use our
			services.
		</p>

		<h2>Description of Services</h2>
		<p>
			{site.name} provides software products focused on financial management, including personal
			expense tracking and small business transaction management tools. We may add, modify, or
			discontinue features at any time with reasonable notice.
		</p>

		<h2>User Accounts</h2>
		<p>
			You are responsible for maintaining the confidentiality of your account credentials and for all
			activities that occur under your account. You agree to provide accurate and complete
			information when creating your account and to keep it up to date.
		</p>

		<h2>User Responsibilities</h2>
		<p>When using our services, you agree to:</p>
		<ul>
			<li>Use the services only for lawful purposes</li>
			<li>Not attempt to gain unauthorized access to our systems or other users' accounts</li>
			<li>Not use our services to transmit malicious software or harmful content</li>
			<li>Not interfere with or disrupt the operation of our services</li>
			<li>Comply with all applicable laws and regulations</li>
		</ul>

		<h2>Intellectual Property</h2>
		<p>
			All content, features, and functionality of our products — including but not limited to text,
			graphics, logos, software, and design — are owned by {site.name} and are protected by
			intellectual property laws. You retain ownership of any data you enter into our products.
		</p>

		<h2>Payment Terms</h2>
		<p>
			Certain features of our products may require a paid subscription. Pricing and payment terms
			will be presented to you before purchase. All fees are non-refundable unless otherwise stated
			or required by applicable law.
		</p>

		<h2>Limitation of Liability</h2>
		<p>
			To the fullest extent permitted by law, {site.name} shall not be liable for any indirect,
			incidental, special, consequential, or punitive damages arising from your use of our services.
			Our total liability shall not exceed the amount you paid us in the twelve months preceding the
			claim.
		</p>

		<h2>Disclaimer of Warranties</h2>
		<p>
			Our services are provided "as is" and "as available" without warranties of any kind, whether
			express or implied. We do not guarantee that our services will be uninterrupted, error-free, or
			completely secure.
		</p>

		<h2>Termination</h2>
		<p>
			We may suspend or terminate your access to our services if you violate these Terms or for any
			other reason with reasonable notice. You may terminate your account at any time by contacting
			us. Upon termination, your right to use the services ceases, but provisions that by their
			nature should survive will remain in effect.
		</p>

		<h2>Governing Law</h2>
		<p>
			These Terms shall be governed by and construed in accordance with applicable laws. Any disputes
			arising from these Terms or your use of our services shall be resolved through good faith
			negotiation and, if necessary, binding arbitration.
		</p>

		<h2>Changes to Terms</h2>
		<p>
			We may update these Terms from time to time. We will notify you of material changes by posting
			the updated Terms on our website and updating the "Last updated" date. Continued use of our
			services after changes constitutes acceptance of the revised Terms.
		</p>

		<h2>Contact Us</h2>
		<p>
			If you have questions about these Terms, please contact us at
			<a href="mailto:{site.contact.email}">{site.contact.email}</a>.
		</p>
	</div>
</div>
