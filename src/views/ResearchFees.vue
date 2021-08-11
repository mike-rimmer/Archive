<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <v-container>
          <h3 class="mb-4">
            Research Service Support Fees
          </h3>
          <p>
            The Marine Museum offers physical and digital reproductions of its collection, as well as staff support for research and curatorial services. Please consult our table below for a break down of services and fees; including both reproduction and usage fees.
          </p>

          <p>
            In some cases, fees are evaluated on a case-by-case basis. If you have any
            questions, please contact <a href="mailto:marmus@marmuseum.ca">Marine Museum</a>
          </p>


          <div
            class="table-container"
          >
            <div class="flex-row-group header ">
              <p>TYPE</p>
              <p>FEE (plus HST)</p>
              <p>NOTES</p>
            </div>
            <div class="flex-row-group header">
              <p>Service and Reproduction Fees</p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Curatorial Services Fee(CSF)
              </p>
              <p class="flex-col">
                $25/hour
              </p>
              <p class="flex-col">
                This is our research and administration fee. It is charged <span style="   text-decoration: underline;"> after the first 1/2 hour </span>for tasks that require curatorial staff assistance
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Copies of documents (paper or digital)
              </p>
              <p class="flex-col">
                $0.50/page $0.25/page (student & member rate)
              </p>
              <p class="flex-col">
                Maximum page size is 11" x 17."  Copies will be black and white.
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Hard copy of an image
              </p>
              <p class="flex-col">
                $10.00/image + cost of print<br>
                4 x 6 - $0.59<br>
                5 x 7 - $2.79<br>
                8 x 10 - $11.19<br>
                8 x 12 - $11.19<br>
                10 x 15 - $20.99<br>
                11 x 14 - $27.99<br>
                16 x 24 - $42.00<br>
                20 x 30 - $30.00<br>
                24 x 36 - $70.00<br>
              </p>
              <p class="flex-col">
                This fee includes the print only. Images will be printed by a professional company on high quality photo paper. The image use fee is listed below
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Sound/video reproduction
              </p>
              <p class="flex-col">
                TBE
              </p>
              <p class="flex-col">
                To be evaluated on a case by case basis
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Ship plans/charts
              </p>
              <p class="flex-col">
                $10.00/plan
              </p>
              <p class="flex-col">
                Hard copy or digital
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Microfilm copies
              </p>
              <p class="flex-col">
                $0.75/page
              </p>
              <p class="flex-col">
                Copies can be made as paper printouts or PDFs
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Object Photography
              </p>
              <p class="flex-col">
                TBE
              </p>
              <p class="flex-col">
                To be evaluated on a case by case basis
              </p>
            </div>
            <div class="flex-row-group header">
              <p>Usage Fees</p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Private Use
              </p>
              <p class="flex-col">
                No Charge
              </p>
              <p class="flex-col">
                Research and private study, genealogy, gift/home display, personal and/or family website
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Museum Exhibitions
              </p>
              <p class="flex-col">
                No Charge
              </p>
              <p class="flex-col" />
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Student
              </p>
              <p class="flex-col">
                No Charge
              </p>
              <p class="flex-col">
                Academic thesis/papers, school projects
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Teaching Aid
              </p>
              <p class="flex-col">
                No Charge
              </p>
              <p class="flex-col">
                Professor/teacher presentations
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Publication
              </p>
              <p class="flex-col">
                $20.00/image
              </p>
              <p class="flex-col">
                1 print run of a catalogue book, journal, magazine, proceedings, newspaper, brochure, calendar, CD or DVD (cover liner notes), etc
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Decoration in a place of business
              </p>
              <p class="flex-col">
                $20.00/image
              </p>
              <p class="flex-col" />
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Commercial or Business website
              </p>
              <p class="flex-col">
                $20.00/image
              </p>
              <p class="flex-col" />
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Broadcast or film use
              </p>
              <p class="flex-col">
                TBE
              </p>
              <p class="flex-col">
                To be evaluated on a case by case basis
              </p>
            </div>
            <div class="flex-row-group">
              <p class="flex-col">
                Sound/video use
              </p>
              <p class="flex-col">
                TBE
              </p>
              <p class="flex-col">
                To be evaluated on a case by case basis
              </p>
            </div>
          </div>
          <div class="mt-4">
            <p><b>GENERAL NOTES:</b> There may be extra shipping charges for large size prints. Prices are subject to change.</p>
            <p>When crediting the Museum, please use our full name: Marine Museum of the Great Lakes at Kingston.</p>
          </div>
        </v-container>
      </template>
    </researchbase>
  </div>
</template>

<script>
import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
  export default {
    components:{
      ResearchBase
    },
  }
</script>

<style lang="css" scoped>
.table-container{
  display:flex;
  flex-direction:column;
  width:80%;
  margin:0 auto;
  justify-content:center;
}

.header{
  font-weight:bold;
}

.flex-row-group{
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:space-between;
  border-left-style: solid 1px black;
  border-right-style: solid 1px black;
  padding:.5em;
}

.flex-row-group:nth-child(2n){
  background-color:hsl(166, 56%,91%);
  color:black;
}

.flex-col{
  flex:1;
  border-right-style: solid .25px black;
  padding:.5em;
}



.flex-row{
display:flex;
flex-wrap:wrap
}


</style>
