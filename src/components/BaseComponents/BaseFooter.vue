<template>
  <div
    style="background-color:var(--museum-blue); height:300px; width:100%; padding:0 1em;"
  >
    <v-row class="white--text justify-center">
      <v-col cols="4">
        <h4>Museum Hours</h4>
        <hr>
        <p>As per Provincila mandate, we are closed until further notice</p>
      </v-col>
      <v-col cols="4">
        <h4>Contact Us</h4>
        <hr>
        <p>Marine Museum of the Great Lakes</p>
      </v-col>
      <v-col cols="4">
        <h4>Quick Links</h4>
        <hr>
        <ul>
          <li><a href="#">Donate Now</a></li>
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
