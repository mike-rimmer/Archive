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
            src="../../assets/images/logo.svg"
            height="180"
            alt="Museum Logo"
            srcset=""
          >
        </div>
      </v-col>


      <v-col cols="4">
        <!-- <h4>MUSEUM HOURS</h4>
        <hr> -->

        <div class="layout-social-media">
          <span class="mt-1">Follow Us:</span>
          <div>
            <ShareNetwork
              network="facebook"
              url="https://www.facebook.com/marinemuseumkingston"
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
              url="https://twitter.com/MMGLK"
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
        <div class="layout-donate">
          <v-btn
            color="#3B928A"
            class="white--text pa-8 donate-btn"
            @click="$router.push('/support')"
          >
            Donate
          </v-btn>
        </div>
      </v-col>

      <v-col cols="4">
        <h4>QUICK LINKS</h4>
        <hr style="width:70%">
        <ul style="margin-top:0px;">
          <li
            @mouseover="showCollections = true"
            @mouseleave="showCollections = false"
          >
            <a href="#">Principle Collections</a>
            <span
              v-show="showCollections"
              style="color:lightBlue"
            >
              : Artifact, Archival, Biblio, DSerial, Pictorial)
            </span>
          </li>
          <li><a href="#">Maritime History Research Forum</a></li>
          <li><a href="#">Ask a Curator</a></li>
          <li><a href="#">Reproduction and Curatorial Service Fees</a></li>
          <li><a href="https://www.marmuseum.ca/news">Museum News</a></li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name:'BaseFooter',
  data(){
    return{
      showCollections:false,
    }
  }

}
</script>

<style scoped>
.footer-layout{
  margin-top:2em;
  /* background-color:var(--museum-blue); */
  background-color:#000D2B;
  height:250px;
  width:100%;
  padding:3em 1em;
  position:relative
}

.layout-social-media{
  display:flex;
  justify-content:space-between;
  width:40%;
  margin-top:1em;
}

.layout-donate{
  display:flex;
  justify-content:start;
  margin-top:2em;
  height:100px;
}

.donate-btn{
  font-size:17px;
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
text-decoration: none;

}

li{
  text-decoration: none;
  color:white;
}

.logo{
  margin-left:.1em;
}

hr{
  margin-bottom:.8em;
}
</style>

