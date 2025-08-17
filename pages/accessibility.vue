<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <SectionHeading eyebrow="Accessibility" title="Our commitment to accessibility" subtitle="We believe everyone should have equal access to information and services." align="left" />

      <div class="mt-12 prose prose-gray max-w-none">
        <p class="text-lg text-gray-700 mb-8">
          Salutaris is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Our Accessibility Standards</h2>
        <p class="text-gray-700 mb-4">We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our website includes the following accessibility features:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Semantic HTML structure for screen readers</li>
          <li>Alternative text for images and graphics</li>
          <li>Keyboard navigation support</li>
          <li>High contrast color schemes</li>
          <li>Resizable text and zoom functionality</li>
          <li>Clear and consistent navigation</li>
          <li>Descriptive link text</li>
          <li>Form labels and error messages</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Assistive Technologies</h2>
        <p class="text-gray-700 mb-8">
          Our website is designed to work with various assistive technologies including screen readers, voice recognition software, and other accessibility tools. We regularly test our site with these technologies to ensure compatibility.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Ongoing Improvements</h2>
        <p class="text-gray-700 mb-4">We are committed to continuously improving the accessibility of our website. Our ongoing efforts include:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Regular accessibility audits and testing</li>
          <li>User feedback integration</li>
          <li>Staff training on accessibility best practices</li>
          <li>Monitoring and updating accessibility features</li>
          <li>Collaboration with accessibility experts</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Feedback and Support</h2>
        <p class="text-gray-700 mb-8">
          We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us. We are committed to responding to accessibility feedback within 5 business days.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Alternative Formats</h2>
        <p class="text-gray-700 mb-4">If you need information from our website in an alternative format, we can provide:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Large print documents</li>
          <li>Audio recordings</li>
          <li>Braille materials (upon request)</li>
          <li>Electronic text formats</li>
          <li>Assistance over the phone</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Contact Us</h2>
        <p class="text-gray-700 mb-8">
          For accessibility-related questions, feedback, or to request alternative formats, please contact us:
        </p>
        <div class="bg-gradient-to-br from-navy-50 to-gold-50 p-6 rounded-xl">
          <p class="text-gray-700 mb-2"><strong>Email:</strong> accessibility@salutaris.ng</p>
          <p class="text-gray-700 mb-2"><strong>Phone:</strong> +234 000 000 0000</p>
          <p class="text-gray-700 mb-2"><strong>TTY:</strong> +234 000 000 0001</p>
          <p class="text-gray-700"><strong>Address:</strong> Salutaris, Lagos, Nigeria</p>
        </div>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Accessibility Statement</h2>
        <p class="text-gray-700 mb-8">
          This accessibility statement applies to the Salutaris website. We recognize that accessibility is an ongoing effort and we are committed to making our digital content accessible to all users. We will continue to work towards improving the accessibility of our website and welcome feedback from users.
        </p>

        <div class="mt-12 p-6 bg-gray-50 rounded-xl">
          <p class="text-sm text-gray-600">
            <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}<br>
            This accessibility statement may be updated as we continue to improve our accessibility features.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
</script>
