<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <SectionHeading eyebrow="Privacy Policy" title="How we protect your data" subtitle="Your privacy and trust are important to us." align="left" />

      <div class="mt-12 prose prose-gray max-w-none">
        <p class="text-lg text-gray-700 mb-8">
          At Salutaris, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, make donations, or interact with our services.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Information We Collect</h2>
        <p class="text-gray-700 mb-4">We collect information you provide directly to us, such as when you:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Make a donation or contribution</li>
          <li>Sign up to volunteer</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us through our website</li>
          <li>Apply for partnership opportunities</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">How We Use Your Information</h2>
        <p class="text-gray-700 mb-4">We use the information we collect to:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Process and acknowledge your donations</li>
          <li>Communicate with you about our programs and impact</li>
          <li>Coordinate volunteer opportunities</li>
          <li>Improve our services and website</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Information Sharing</h2>
        <p class="text-gray-700 mb-8">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted partners who assist us in operating our website and serving our mission, always under strict confidentiality agreements.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Data Security</h2>
        <p class="text-gray-700 mb-8">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Your Rights</h2>
        <p class="text-gray-700 mb-4">You have the right to:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Access and review your personal information</li>
          <li>Request corrections to your data</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Contact Us</h2>
        <p class="text-gray-700 mb-8">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <div class="bg-gradient-to-br from-navy-50 to-gold-50 p-6 rounded-xl">
          <p class="text-gray-700 mb-2"><strong>Email:</strong> privacy@salutaris.ng</p>
          <p class="text-gray-700 mb-2"><strong>Phone:</strong> +234 000 000 0000</p>
          <p class="text-gray-700"><strong>Address:</strong> Salutaris, Lagos, Nigeria</p>
        </div>

        <div class="mt-12 p-6 bg-gray-50 rounded-xl">
          <p class="text-sm text-gray-600">
            <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}<br>
            This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new policy on this page.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
</script>
