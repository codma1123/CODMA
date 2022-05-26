<template>
  <v-sheet     
    color="#000"
    height="5000"
    class="d-flex justify-center align-center"
  >    
    <v-card      
      class="d-flex justify-center align-center target"            
      height="400"
      width="400"
      :rounded="vCardTheme.rounded"
      v-motion
      :initial="{ opacity: 0, y: 100}"
      :visible="{ opacity: 1, y: 0}"
    >               
     CODMA
    </v-card>  
  </v-sheet>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: 'HelloWorld',

  setup() {
    const person1 = ref({ name: 'codma', age: 25})
    const clicked = ref({ enable: false})    

    const vCardTheme = {
      color: '#111',
      rounded: 'xl',
    }

    onMounted (() => {
      console.log(vCardTheme.color, vCardTheme.rounded)
    })
    
    const handleClick = () => {
      clicked.value.enable = !clicked.value.enable      
    }

    return { person1, handleClick , clicked, vCardTheme}
  }
  
}
</script>

<style>
#card-title {
  color: black;
  font-weight: 1000;
  font-size: 50px;  
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-tarck {
  background: #dddddd;
}

::-webkit-scrollbar-thumb {
  background: #777;
}

</style>
