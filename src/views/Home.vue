<template>
  <div>

    <section class="Intro">
      <div class="row">
      <div class="col-sm-8">
        <h2>Welcome</h2>
        <p>Have you ever wondered what it would be like if a local taxi company had an app just as good as uber? Or a local deli had an online shop that rivals any major super markets?</p>
        <p>We're on a mission of empowering small businesses to deliver amazing customer experiences through the use of business focused technology.</p>
      </div>
      <div class="col-sm-4">
        <div class="in-img"><img src="../assets/rocket-laptop.svg" alt="" /></div>
      </div>
      </div>
    </section>

    <section class="Features">
      <div class="row">
        <h2>Why us?</h2>
        <div class="col-sm-6">
          <div class="Feature-Item">
            <div class="f-img"><img src="../assets/entrapenuerial.png" alt="" /></div>
            <div class="f-info">
              <span>entrapenuerial at our heart</span>
              <p>We wouldn't be very useful if we were just 'the tech guys'. So we know a thing or two about business as well.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Feature-Item">
            <div class="f-img"><img src="../assets/business.png" alt="" /></div>
            <div class="f-info">
              <span>entrapenuerial at our heart</span>
              <p>We wouldn't be very useful if we were just 'the tech guys'. So we know a thing or two about business as well.</p>
              </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Feature-Item">
            <div class="f-img"><img src="../assets/technology.png" alt="" /></div>
            <div class="f-info">
              <span>entrapenuerial at our heart</span>
              <p>We wouldn't be very useful if we were just 'the tech guys'. So we know a thing or two about business as well.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Feature-Item">
            <div class="f-img"><img src="../assets/vision.png" alt="" /></div>
            <div class="f-info">
              <span>entrapenuerial at our heart</span>
              <p>We wouldn't be very useful if we were just 'the tech guys'. So we know a thing or two about business as well.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Pricing">
      <div class="row">
        <h2>Our Pricing</h2>
        <div class="col-sm-6">
          <div class="Pricing-Item">
            <div class="p-info">
              <span>Fixed monthly cost</span>
              <p>We'll agree a fixed monthly cost with you - so you can budget your finances with ease.</p>
            </div>
            <div class="p-img"><img src="../assets/idea.svg" alt="" /></div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Pricing-Item">
            <div class="p-info">
              <span>Low up front costs</span>
              <p>We keep our initial costs low so that our key technology is accessible to everyone.    </p>
            </div>
            <div class="p-img"><img src="../assets/rocket-laptop.svg" alt="" /></div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Pricing-Item">
            <div class="p-info">
              <span>Short contract periods</span>
              <p>We don't believe in long contracts as we believe our systems will deliver value to our clients.</p>
            </div>
            <div class="p-img"><img src="../assets/agreement.svg" alt="" /></div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="Pricing-Item">
            <div class="p-info">
              <span>Flexibility in mind</span>
              <p>Any unexpected peaks can be handled with ease and doesn't mean you'll have to pay more in the following months.</p>
            </div>
            <div class="p-img"><img src="../assets/click.svg" alt="" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="Contact">
      <div class="row">
        <div class="col-sm-8">
          <h2>Contact us</h2>
          <p>No matter the need, we can cover it.</p>
          <p>If you'd like to work with us give us a call on <a href="tel:07855555555">+447855555555</a></p>
          <p>Or use our handy contact form <a href="/contact">here</a></p>
        </div>
        <div class="col-sm-4">
          <div class="in-img"><img src="../assets/contact.svg" alt="" /></div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'App',
  components: { Footer }
}
</script>

<style>
.header {
  background: #333;
  padding: 0.5em;
}
h2 {
  padding-top: 2em;
  margin: 0;
}
.row {
    --bs-gutter-x: 2.5rem;
    --bs-gutter-y: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: var(--bs-gutter-y);
}
.col-sm-4 {
    flex: 0 0 auto;
    width: 25%;
    padding: 1em 0;
}
.col-sm-6 {
    flex: 0 0 auto;
    width: 49%;
}
.col-sm-8 {
    flex: 0 0 auto;
    width: 75%;
    padding: 1em 0;
}
.mr-40 {
  margin-right: 40px;;
}
p {
  line-height: 28px;
}
.in-img {
  padding: 2em;
}

.Features {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.Feature-Item {
  border: 1px solid #eee;
  border-radius: 10px;
}
.f-info span {
  padding: 0 1em;
  font-size: 19px;
}
.f-info p {
  padding: 0 1em;
  font-size: 14px;
}
.f-img {
  padding-bottom: 1em;;
}
.f-img img {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
}

.Pricing {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.Pricing-Item {
    display: flex;
    border: 1px solid #eee;
    border-radius: 10px;
    align-items: center;
}
.p-info {
  padding: 1em;
}
.p-info span {
  font-size: 19px;
}
.p-info p {
  font-size: 14px;
  line-height: 18px;
}
.p-img img {
    width: 50%;
    padding: 1em;
    text-align: center;
}
</style>
