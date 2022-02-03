<template>
  <div class="contact">
    <section class="Contact">
      <div class="row">
        <div class="col-sm-8">
          <h2>Contact us</h2>
          <p>If you'd like to work with us give us a call on <a href="tel:07855555555">+447855555555</a></p>
          <p>Or use our handy contact form below:</p>
        </div>
        <div class="col-sm-4">
          <div class="in-img"><img src="../assets/contact.svg" alt="" /></div>
        </div>
      </div>
    </section>
    <ContactForm/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ContactForm from '../components/Contact-form.vue'

export default {
  name: 'App',
  components: { Footer, ContactForm }
}
</script>

<style>

</style>