<template>
  <div class="gridlayout">
    <div class="cart">
      <Cart :cart-data="selectionData" />
    </div>


    <div
      class="card"
    >
      <Card
        :imgsrc="image"
      />
    </div>
  </div>
</template>

<script>
import cayuga from "../../assets/images/cayuga.jpg"
import Card from '@/components/BaseComponents/BaseDetailMultiCard.vue'
import Cart from '@/components/BaseComponents/BaseCart.vue'
import {mapActions} from 'vuex'

  export default {
    name:'CSLDetailStoreCard',

    components:{
   Card,
   Cart
    },

    props:{
      selectionData:{
        type :Array,
        required: true,
        default: ()=> []
    }
    },

    data(){
      return {
       image:cayuga,
       record:'',
       testrecord: {Notis:"(CaOKQ)AAD4928","MarNum":"N/A","Owner":"CSL Fleet Record","Category":"Fleet List","SectionA":" BASIC SHIP PARTICULARS","Name":"","Official Num":" 129479","Type":" C1 (Bulk Carrier)","YearBuilt":"1910","Builder":" Clyde Shipbuilding and Engineering Co. Ltd.","BuildCountry":"Scotland","LBP":" 249.25","Beam":" 43","MouldedDepth":" 23.6","GrossTonnage":"2301","Tonnage":"1434","SectionB":"OWNERSHIP/NAME CHANGES/DISPOSAL","OwnerShipDate":"CSL OWNERSHIP DATES:","DateFrom":" 1914","DateTo":" 1917","vesselOtherName":"","chronology":"CHRONOLOGY:","Comments":"|1910-12 D.A. Gordon International SS Co. Ltd. Glasgow Br.|1912-14 D.A. Gordon Canada Interlake Line Ltd.|(J.W. Norcross) Glasgow Br.|1914-17 D.A. Gordon C.S.L.|December 11, 1917 Torpedoed and sunk 1.25 miles ESE of Cabo de Las|Huertas by U64|SECTION C: CONSTRUCTION|SHIPYARD: Clyde Shipbuilding and Engineering Co. Ltd.|","ShipyardLocation":" Port Glasgow","HullNumber":"289","dateOfLaunch":"1910","dateOfDelivery":"1910","hullType":": Steel Rivetted","superstructure":"","sectionE":"ENGINE AND MECHANICAL","engineType":"SR (T.E.)","cylinders":"3 (18x30x50)","stroke":"36","turbines":"Not Applicable","atRpm":"","yearEngineBuilt":"1910","engineBuilder":"Clyde Shipbuilding and Engineering Co. Ltd.","placeEngineBuilt":"t Glasgow, Scotland","numberOfBoilers":"2","boilerType":"","engineSize":"","boilerBuilder":"","bowThruster":"Nil","sternThruster":"Nil"},

      //   {Notis:"(CaOKQ)AAD4865","MarNum":"N/A","Owner":"CSL Fleet Record","Category":"Fleet List","SectionA":" BASIC SHIP PARTICULARS","Name":" Acadian","Official Num":" 133533","Type":" C1 (Canaller Bulk)","YearBuilt":"1913","Builder":" North of Ireland SB. Co.","BuildCountry":"Ireland","LBP":" 250","Beam":" 42.5","MouldedDepth":" 20","GrossTonnage":"1686","Tonnage":"1055","SectionB":"OWNERSHIP/NAME CHANGES/DISPOSAL","OwnerShipDate":"CSL OWNERSHIP DATES:","DateFrom":" 1926","DateTo":" 1959","vesselOtherName":" Glenmavis","chronology":"CHRONOLOGY:","Comments":"|1913-25 Glenmavis Great Lakes Transportation Co., Ltd.|(J. Playfair) Midland Ont. Ca.|1925-26 Glenmavis Geo. Hall Coal & Shipping Corp.|Montreal Que. Ca.|1926-59 Acadian C.S.L.|III-1959 B.U. Kingston, Ont., Canada.|This vessel had the parallel body part of the hull built on a|patented system of arched frames giving this part of the ship somewhat|the appearance of whaleback, for example, the frames all curved in at|the top to meet the deck stringer plates, resulting in an narrow deck|and narrow hatches. It was not repeated on any other laker. There was|a rumour that this ship had been used as a \"Q\" ship in WWI. Certianly|the add-stiffening for an Naval gun mounting was still there at the|aft end of the ship. Because of the huge hatch over #3 hold the Acadian|was used to transport, one at a time the eight huge four Furnace|Scotch Boilers for the ice breaker D'Iberville building at DSL from the|builders Can. Vickers, Montreal. These were the biggest boilers of this|type ever built in Canada. Mr McKinley who recently retired as Commdre.|Ch. Engr. of CSL told me he was Ch. Engr. of the Acadian on her last|voyage to Kingston Shipbuilding Co. for scrapping in 1959. He said|that as the ship was going for scrap he would try the engines at full|power for the last time. The engines and boilers behaved beautifully and|drove the old ship down to Kingston in record time.|This ship had the most melodious chime whistle. On wild November|nights to hear the Acadian blowing for a pilot at Kingston had a|nostaglic note, it was the end of the steam era.|SECTION C: CONSTRUCTION|SHIPYARD: North of Ireland SB. Co.|","ShipyardLocation":" Londonderry","HullNumber":"55","dateOfLaunch":"1913","dateOfDelivery":"1913","hullType":": Steel, pl. stem, counter stern 3 WT bulkheads. 1 big hatch to","superstructure":"Steel, texas and wheelhouse for'd, 2 masts and booms","sectionE":"ENGINE AND MECHANICAL","engineType":"SR (T.E.)","cylinders":"3 (16x26x44)","stroke":"30","turbines":"Not Applicable","atRpm":"AT (RPM): 96","yearEngineBuilt":"1913","engineBuilder":"Richardsons Westgarth & Co.","placeEngineBuilt":"dlesborough, England","numberOfBoilers":"2","boilerType":": Cyl SE 2 furnaces each WP 180|","engineSize":"12.5x10.5","boilerBuilder":"Richardsons Westgarth & Co.","bowThruster":"","sternThruster":""},

      //    {Notis:"(CaOKQ)AAD4871","MarNum":"N/A","Owner":"CSL Fleet Record","Category":"Fleet List","SectionA":" BASIC SHIP PARTICULARS","Name":" Ashcroft","Official Num":" 152641","Type":" U1 (Bulk Upper Laker)","YearBuilt":"1925","Builder":" Midland SB. Co. Ltd.","BuildCountry":"Canada","LBP":" 546","Beam":" 60","MouldedDepth":" 32","GrossTonnage":"7726","Tonnage":"4439","SectionB":"OWNERSHIP/NAME CHANGES/DISPOSAL","OwnerShipDate":"CSL OWNERSHIP DATES:","DateFrom":" 1926","DateTo":" 1969","vesselOtherName":" Gleniffer","chronology":"CHRONOLOGY:","Comments":"|1925-26 Gleniffer Great Lakes Transportation Co. Ltd.|Midland Ca.|1926-69 Ashcroft C.S.L.|III-1969 B.U. Castellon, Spain Arr. Castellon 9 Aug. 1969.|A nice looking ship, designed by Mr. J. MacLaughlin N.A. at Playflair's|Co.|This ship had another Hog Island Engine, left over after the frantic|activity there from 1918 to 1922 and purchased, new unused by Mr. J.S.|Leitch GM Collship for 2.5 cents/lb.|The Ashcroft had a long trouble free life.|SECTION C: CONSTRUCTION|SHIPYARD: Midland SB. Co. Ltd.|","ShipyardLocation":" Midland","HullNumber":"12","dateOfLaunch":"","dateOfDelivery":"1925","hullType":": Steel 4 WT Bhds Pl. stem counter stern good proportions.","superstructure":"Steel, Texas with Wheelhouse over on Foc'sle two","sectionE":"ENGINE AND MECHANICAL","engineType":"SR (T.E.)","cylinders":"3 (24.5x41.5x72)","stroke":"48","turbines":"Not Applicable","atRpm":"AT (RPM): 85","yearEngineBuilt":"1925","engineBuilder":"Hooven, Owens & Rentschler Corp.","placeEngineBuilt":"ilton, Ohio, U.S.A.","numberOfBoilers":"3","boilerType":": Cyl SE 3 furnaces each WP 190|","engineSize":"15.25x11.5","boilerBuilder":"Collingwood Shipbuilding Co. Ltd.","bowThruster":"Nil","sternThruster":"Nil"}
      // ]
    }
    },

    computed:{
      ...mapActions("CSL",['CSLDetailCart'] ),


    cartContentsLength(){
      return this.testData.length
    },

    // cartData(){
    //   return this.testData
    // },


    detailsAreAvailable(){
      return this.CSLDetailCart
    }

    },
    methods:{
      showCard(id){
        this.record = this.CSLDetailCart.record.filter((ele)=>{
          return ele.Notis == id
        })
        // console.log(`%c The id: is  ${id} `,'background-color:green; color: white')
        this.cardVisible=true
      }
    }
  }
</script>

<style scoped>
.gridlayout{
  display:grid;
  margin-top:2em;
  /* background-color:red; */
  grid-template-columns: 2vw 35vw 3vw 70vw;
  grid-template-rows: auto;
  grid-template-areas:
  " . crt . crd";
}

.cart{
  grid-area:crt;
}

.card{
  grid-area: crd;
}


li.no-bullets{
  display:flex;
  justify-content: space-between;
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  cursor: pointer;
}

</style>
