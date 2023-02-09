<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  import { rails } from "$lib/stores/rail";
  import { foo } from "$lib/functions/Rail/railMenager";
  import { browser } from "$app/environment";
  import { onMount } from 'svelte';
  let railIndex = browser && foo.getRailindex(data.data.railname);
  if (railIndex == undefined){ // no valed Rail
      window.location.href = "/debug/Display/Rail/";
    }

  let hydrate = false; // this is only hire to delay displaing untile check if data is hire or handel error
  onMount(async () => {hydrate = true;});
</script>
{#if hydrate}
  <h1><a href="/debug/Display/Rail/">{$rails[railIndex].m_name}</a></h1>
  <div>index: {railIndex}</div>
  <div>terminalcount: {$rails[railIndex].m_terminalcount}</div>
{/if}