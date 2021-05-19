<template>
  <div
    class="footer-layout"
  >
    <v-row class="white--text justify-center">
      <v-col cols="4">
        <!-- <h4>Museum Logo </h4>
        <hr> -->
        <div class="logo">
          <img
            src="../../assets/images/museumfooterlogo.svg"
            height="180"
            alt="Museum Logo"
            srcset=""
          >
        </div>
      </v-col>


      <v-col cols="4">
        <!-- <h4>MUSEUM HOURS</h4>
        <hr> -->

        <div class="center-layout-social-media">
          <div>
            <ShareNetwork
              network="facebook"
              url="https://marmuseum.ca/shiplists2"
              title="Kingston Marine Museum announces our new Research Portal."
              description="The Marine Museum of Kinston has completing Phase One of a 'Five' Phase implementation of our new Research Portal. When completed the public will have access to over 3,500 linear feet of historial records including 50,000 ship plans. The Artifact's collection includes over 4,000 objects and art. Our Photograph collection alone contains over 31,000 images and finally our Library holdings will offer over 12,000 titles."
              quote="We are looking forward to offering our community even greater access to our Museum from the comfort of their home. - Michelle Clarabut"
              hashtags="Marmuseum,vite,javascript"
              twitter-user=""
            >
              <v-icon color="white">
                mdi-facebook
              </v-icon>
              <!-- <span>Share on Facebook</span> -->
            </ShareNetwork>
          </div>
          <div>
            <ShareNetwork
              network="twitter"
              url="https://marmuseum.ca/shiplists2"
              title="Kingston Marine Museum announces new Research Portal."
              description="The Marine Museum of Kinston has completing Phase One of a 'Five' Phase implementation of our new Research Portal. When completed the public will have access to over 3,500 linear feet of historial records including 50,000 ship plans. The Artifact's collection includes over 4,000 objects and art. Our Photograph collection alone contains over 31,000 images and finally our Library holdings will offer over 12,000 titles."
              quote="We are looking forward to offering our community even greater access to our Museum from the comfort of their home. - Michelle Clarabut"
              hashtags="vuejs,vite,javascript"
              twitter-user=""
            >
              <v-icon color="white">
                mdi-twitter
              </v-icon>
              <!-- <span>Share on Twitter</span> -->
            </ShareNetwork>
          </div>
          <div>
            <ShareNetwork
              network="messenger"
              url="https://marmuseum.ca/shiplists2"
              title="Kingston Marine Museum announces new Research Portal."
              description="The Marine Museum of Kinston has completing Phase One of a 'Five' Phase implementation of our new Research Portal. When completed the public will have access to over 3,500 linear feet of historial records including 50,000 ship plans. The Artifact's collection includes over 4,000 objects and art. Our Photograph collection alone contains over 31,000 images and finally our Library holdings will offer over 12,000 titles."
              quote="We are looking forward to offering our community even greater access to our Museum from the comfort of their home. - Michelle Clarabut"
              hashtags="vuejs,vite,javascript"
              twitter-user=""
            >
              <v-icon color="white">
                mdi-facebook-messenger
              </v-icon>
              <!-- <span>Share on Messenger</span> -->
            </ShareNetwork>
          </div>
        </div>
        <div class="center-layout-donate">
          <v-btn>
            Donate
          </v-btn>
        </div>
      </v-col>

      <v-col cols="4">
        <h4>QUICK LINKS</h4>
        <hr>
        <ul style="margin-top:0px;">
          <li><a href="#">Principle Collections Now</a></li>
          <li><a href="#">Maritime History Research Forum</a></li>
          <li><a href="#">Ask a Curatory</a></li>
          <li><a href="#">Reproduction and Curatorial Service Fees</a></li>
          <li><a href="#">Museum News</a></li>
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
.footer-layout{
  margin-top:2em;
  /* background-color:var(--museum-blue); */
  background-color:#000D2B;
  height:300px;
  width:100%;
  padding:3em 1em;
  position:relative
}

.center-layout-social-media{
  display:flex;
  justify-content:space-around;
  margin-top:2em;
}

.center-layout-donate{
  display:flex;
  justify-content:center;
  margin-top:3em;
  height:100px;
}

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

a{
color:white;
}

li{
  text-decoration: none;
}

.logo{
  margin-left:.1em;
}

hr{
  margin-bottom:.8em;
}
</style>

