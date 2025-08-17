<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <SectionHeading eyebrow="Terms of Service" title="Terms and conditions" subtitle="Please read these terms carefully before using our services." align="left" />

      <div class="mt-12 prose prose-gray max-w-none">
        <p class="text-lg text-gray-700 mb-8">
          By accessing and using the Salutaris website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">1. Use License</h2>
        <p class="text-gray-700 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Salutaris's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">2. Donations and Contributions</h2>
        <p class="text-gray-700 mb-8">
          All donations made through our website are voluntary and non-refundable. We are committed to using your donations responsibly and transparently. You may request information about how your donation is being used by contacting us directly.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">3. Volunteer Participation</h2>
        <p class="text-gray-700 mb-4">By volunteering with Salutaris, you agree to:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Follow all safety guidelines and instructions provided</li>
          <li>Respect the communities and individuals we serve</li>
          <li>Maintain confidentiality of sensitive information</li>
          <li>Represent Salutaris in a professional and ethical manner</li>
        </ul>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">4. Disclaimer</h2>
        <p class="text-gray-700 mb-8">
          The materials on Salutaris's website are provided on an 'as is' basis. Salutaris makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">5. Limitations</h2>
        <p class="text-gray-700 mb-8">
          In no event shall Salutaris or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Salutaris's website, even if Salutaris or a Salutaris authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">6. Accuracy of Materials</h2>
        <p class="text-gray-700 mb-8">
          The materials appearing on Salutaris's website could include technical, typographical, or photographic errors. Salutaris does not warrant that any of the materials on its website are accurate, complete or current. Salutaris may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">7. Links</h2>
        <p class="text-gray-700 mb-8">
          Salutaris has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Salutaris of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">8. Modifications</h2>
        <p class="text-gray-700 mb-8">
          Salutaris may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
        </p>

        <h2 class="text-2xl font-display font-bold text-navy-900 mt-12 mb-6">Contact Information</h2>
        <p class="text-gray-700 mb-8">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div class="bg-gradient-to-br from-navy-50 to-gold-50 p-6 rounded-xl">
          <p class="text-gray-700 mb-2"><strong>Email:</strong> legal@salutaris.ng</p>
          <p class="text-gray-700 mb-2"><strong>Phone:</strong> +234 000 000 0000</p>
          <p class="text-gray-700"><strong>Address:</strong> Salutaris, Lagos, Nigeria</p>
        </div>

        <div class="mt-12 p-6 bg-gray-50 rounded-xl">
          <p class="text-sm text-gray-600">
            <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}<br>
            These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new terms on this page.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
</script>
