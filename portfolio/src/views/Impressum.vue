<template>
    <div class="impressum">
      <h1>Impressum</h1>
  
      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>{{ fullName }}</p>
        <p>{{ streetAddress }}</p>
        <p>{{ city }}</p>
      </section>
  
      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a :href="`mailto:${email}`">{{ email }}</a></p>
        <p>Telefon: <a :href="`tel:${phone}`">{{ phone }}</a></p>
      </section>
  
      <!-- <section v-if="vatId">
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: {{ vatId }}</p>
      </section>
  
      <section v-if="regulatoryAuthority">
        <h2>Aufsichtsbehörde</h2>
        <p>{{ regulatoryAuthority }}</p>
      </section> -->
  
      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>
  
      <section>
        <h2>Haftung für Links</h2>
        <p>
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
        </p>
      </section>
  
      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  // Replace these values with your real information
  const fullName = ref('Erik Matschke')
  const streetAddress = ref('Lohestraße 5')
  const city = ref('33649 Bielefeld')
  const email = ref('gawerimax@gmail.com')
  const phone = ref('+49 15259612600')
//   const vatId = ref('DE123456789') // Optional
//   const regulatoryAuthority = ref('IHK Musterstadt') // Optional
  </script>
  
  <style scoped>
  .impressum {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  .impressum h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .impressum h2 {
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: #111;
  }
  
  .impressum a {
    color: #0056b3;
    text-decoration: none;
  }
  
  .impressum a:hover {
    text-decoration: underline;
  }
  </style>
  