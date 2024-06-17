<template>
  <h2>Usage</h2>
  <div>
    <pre>    
      <code class="lang-ts">
      import { usePiwikPro } from '@piwikpro/nuxt-piwik-pro/helpers';
      
      ...

      const nuxtApp = useNuxtApp();
      usePiwikPro(nuxtApp,($piwikPRO)=>{
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
