<template>
  <div>
    <ResearchBase :isgray="noGray">
      <template v-slot:intro>
        <h3 style="margin-bottom:15px;">
          SUPPORT THE COLLECTION
        </h3>
        <p>Thank you for your interest in supporting the Museum’s collections. There are a number of ways you can support the collection; including monetary contributions.  Donations to our General Fund supports collections and exhibit work, along with other Museum projects; while donations to the Digital Collections Fund will provide funds for the digitising of the collection - namely ship plans and photographs. If you would like to contribute to either of the funds, please use the form below.</p>

        <p><span style="font-weight:bold;">Why digitise the collection? </span>Digital collections provide greater access for educational and research purposes, allowing individuals to access the collections remotely. A digital collection also facilitates virtual educational programs with local schools and the community.</p>

        <p>If you are interested in donating material to the Museum, such as photographs or artefacts, please contact our Museum Manager <a href="mailto:marmus@marmuseum.ca">Email Maritime Museum</a>.</p>

        <script
          id="ch_cdn_embed"
          type="application/javascript"
          defer
          src="https://www.canadahelps.org/secure/js/cdf_embed.js"
          charset="utf-8"
          data-language="en"
          data-page-id="60975"
          data-root-url="https://www.canadahelps.org"
          data-formtype="0"
          data-cfasync="false"
        />
      </template>
    </ResearchBase>
  </div>
</template>



<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
//  import Donations from '@/components/Donations'
export default {
  name: 'Support',
  components:{
  ResearchBase,
  // Donations
},
data(){
  return{
    noGray:false,
  }
}



}
</script>
