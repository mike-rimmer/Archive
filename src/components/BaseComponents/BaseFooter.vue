<template>
  <div
    style="margin-top:2em; background-color:var(--museum-blue); height:300px; width:100%; padding:0 1em;"
  >
    <v-row class="white--text justify-center">
      <v-col cols="4">
        <h4>MUSEUM HOURS</h4>
        <hr>
        <div class="hours-text">
          <p>As per Provincila mandate, we are closed until further notice</p>
          <p>Monday - 10am-4pm</p>
          <p>Tuesday - 10am-4pm</p>
          <p>Wednesday - 10am-4pm</p>
          <p>Thursday - 10am-4pm</p>
          <p>Friday - 10am-4pm</p>
          <p>Saturday & Sunday - closed</p>
          <p>
            We ask that you please respect our COVID-19 <em>Visitor Protocols</em>
            poster at our <br>
          </p>
          <p>
            entry and found <a href="http://">here</a>
          </p>
        </div>
      </v-col>
      <v-col cols="4">
        <h4>CONTACT US</h4>
        <hr>
        <div class="contact-text">
          <p>Marine Museum of the Great Lakes at Kingston</p>
          <p>53 young Street</p>
          <p>Kingston, Ontario</p>
          <p>K7M 6G4</p>
          <p>613 542 2261</p>
          <p>Email Us</p>
        </div>
      </v-col>
      <v-col cols="4">
        <h4>QUICK LINKS</h4>
        <hr>
        <ul style="margin-top:0px;">
          <li>
            <a href="#">Donate Now</a>
          </li>
          <li><a href="#">Explore at Home</a></li>
          <li><a href="#">Membership</a></li>
          <li><a href="#">Museum Hours</a></li>
          <li><a href="#">Job Opportunties</a></li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name:'BaseFooter'
}
</script>

<style scoped>
/* div{
 font-family:'Roboto-Light', 'San-Serif';
 font-weight:100;
} */

h4{
  font-family:'Roboto-Regular', 'San-Serif';
  font-weight:100;
  font-size:19.04px;
}

ul{
  padding-left:0px;
  padding-top:0px;
  margin-top:0px;
  list-style: none;
}

.contact-text, .hours-text, .hours-text a, li a{
  font-family:'Lora', 'San-Serif';
  font-size:13.6px;
  color:white;
  line-height: .5em;
  margin-bottom:.5em;
}

hr{
  margin-bottom:.8em;
}
</style>

