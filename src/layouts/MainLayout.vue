<template>
  <q-layout view="lHh Lpr lFf">
      <!-- <div class="q-pa-md">
    <div class="q-gutter-y-md" style="width: 100%">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey-4"
          active-color="white"
          indicator-color="lime-10"
          align="justify"
        >

          <q-tab class="tab" name="mails" label="Mails" />
          <q-tab class="tab" name="alarms" label="Alarms" />

        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated
         transition-prev="fade"
         transition-next="fade"
        >
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
      </div> -->



      <Sample />


    <!-- <q-drawer


    >
      <q-list>


      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from 'vue'
  import Sample from 'components/sample.vue'

export default {
  components:{
    Sample
  },
  setup () {
    return {
      tab: ref('mails')
    }
  }
}
</script>


<style lang="scss">

   .tab {
      background-color: #71bf8d;
     width:100%;
   }
   .indicate {
     width:100%;
   }
</style>
