<template>
    <div class="q-pa-md" style="height:80vh">


      <div class="q-gutter-y-md" style="width: 100%">
        <q-card flat class="" >
          <q-tabs
            v-model="label"
            class=" text-secondary bg-cyan-2 q-pa-none text-white "
            align="justify"
            indicator-color="black"
            v-ripple="false"
          >
            <div class="col-6">
              <q-tab name="inbox"  @click="selected = 1"  :ripple="false"  class="q-mx-auto q-px-none q-py-md" style="width:100%; " > <p  :class="{highlight:selected == 1}" style="border-radius: 15px" class="hello q-px-xl q-py-sm q-my-auto " >Active</p> </q-tab>
            </div>

            <div class="col-6">
              <q-tab name="outbox" @click="selected = 2"  :ripple="false" class="q-mx-auto q-px-none q-py-md " style="width:100%; " > <p  :class="{highlight:selected == 2}" style="border-radius: 15px" class="  q-px-xl q-py-sm q-my-auto " >History</p> </q-tab>
            </div>
          </q-tabs>

          <q-tab-panels v-model="label" animated class="text-white q-pt-lg"  transition-prev="fade"
         transition-next="fade" style="width: 100%; height: 100%;">
            <q-tab-panel name="inbox">
                <p>Inbox</p>
            </q-tab-panel>

            <q-tab-panel name="outbox">
                <p>Outbox</p>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>


  </div>
</template>

<script>
import { ref } from 'vue'


export default {

  data () {
    return {
      label: ref('inbox'),
      bar: ref(false),
      selected: 1,
    }
  }
}


</script>

<style scoped>

p{
  background: rgb(16, 17, 17);
}
.highlight{

  background-color: black !important;
  color: rgb(197, 226, 245);


}
</style>
