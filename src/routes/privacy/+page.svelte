<script lang="ts">
	import { site } from '$lib/config';
</script>

<svelte:head>
	<title>Privacy Policy — {site.name}</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 pt-32 pb-16">
	<div class="prose prose-invert prose-slate max-w-none prose-headings:font-heading prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline">
		<h1>Privacy Policy</h1>
		<p class="text-slate-400">Last updated: March 1, 2026</p>

		<p>
			{site.name} ("we", "us", or "our") operates software products and services. This Privacy
			Policy explains how we collect, use, and protect your personal information when you use our
			products and visit our website.
		</p>

		<h2>Information We Collect</h2>
		<p>We may collect the following types of information:</p>
		<ul>
			<li>
				<strong>Account Information:</strong> When you create an account, we collect your name, email
				address, and other information you provide during registration.
			</li>
			<li>
				<strong>Usage Data:</strong> We collect information about how you interact with our products,
				including features used, actions taken, and time spent.
			</li>
			<li>
				<strong>Financial Data:</strong> If you use our financial tracking products, we process the
				transaction and expense data you enter. This data is yours and is stored securely.
			</li>
			<li>
				<strong>Device Information:</strong> We may collect information about the device and browser
				you use to access our services, including IP address, browser type, and operating system.
			</li>
		</ul>

		<h2>How We Use Your Information</h2>
		<p>We use the information we collect to:</p>
		<ul>
			<li>Provide, maintain, and improve our products and services</li>
			<li>Process your transactions and manage your account</li>
			<li>Send you important updates about our services</li>
			<li>Respond to your requests and provide customer support</li>
			<li>Analyze usage patterns to improve the user experience</li>
		</ul>

		<h2>Data Storage and Security</h2>
		<p>
			We implement appropriate technical and organizational measures to protect your personal data
			against unauthorized access, alteration, disclosure, or destruction. Your data is stored on
			secure servers and encrypted in transit and at rest.
		</p>

		<h2>Third-Party Services</h2>
		<p>
			We may use third-party services for analytics, payment processing, and infrastructure. These
			providers have access only to the information necessary to perform their functions and are
			obligated to protect your data in accordance with applicable laws.
		</p>

		<h2>Cookies</h2>
		<p>
			We use essential cookies to maintain your session and preferences. We may also use analytics
			cookies to understand how our products are used. You can control cookie settings through your
			browser preferences.
		</p>

		<h2>Your Rights</h2>
		<p>You have the right to:</p>
		<ul>
			<li>Access the personal data we hold about you</li>
			<li>Request correction of inaccurate data</li>
			<li>Request deletion of your data</li>
			<li>Export your data in a portable format</li>
			<li>Opt out of non-essential communications</li>
		</ul>

		<h2>Changes to This Policy</h2>
		<p>
			We may update this Privacy Policy from time to time. We will notify you of significant changes
			by posting the new policy on our website and updating the "Last updated" date.
		</p>

		<h2>Contact Us</h2>
		<p>
			If you have questions about this Privacy Policy or how we handle your data, please contact us
			at <a href="mailto:{site.contact.email}">{site.contact.email}</a>.
		</p>
	</div>
</div>
