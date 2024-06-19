<template>
  <h2>Usage</h2>
  <div>
    <pre>    
      <code class="lang-ts">
      import { handlePiwikPRO } from '@piwikpro/nuxt-piwik-pro/utils';
      
      ...

      const nuxtApp = useNuxtApp();
      handlePiwikPRO(nuxtApp,($piwikPRO)=>{
         // Safety use any of Piwik PRO service here. 
      });
    </code>
  </pre>
  </div>
  <UDivider label="OR" />
  <div>
    <pre>
    <code class="lang-ts"> 
      const {$piwikPRO} = useNuxtApp(); 
      if($piwikPRO){ 
        // Safety use any of Piwik PRO service here. 
      } 
    </code>
   </pre>
  </div>
</template>
