<script>
    import { rails } from "$lib/stores/rail";
    import { foo } from "$lib/functions/Rail/railMenager";
    import { browser } from "$app/environment";
    
    let railname = "";
    let terminalnummber = "";
    function addRail(){
        const RailAlreadyExists = browser && foo.getRailindex(railname);
        if (RailAlreadyExists != undefined)
            return;
        foo.addRail(railname, terminalnummber);
    }
    function delRail(t_index){
        console.log("test");
        foo.delRail(t_index);
    }
</script>

<section>
    <h1>This page is to display and create new rails and change names</h1>
    {#each $rails as rail,i}
        <div>
            <span>index: {i}  :  </span>
            <a href="/debug/Display/Rail/{rail.m_name}">{rail.m_name}</a>
            <span>{rail.m_terminalcount}</span>
            <button on:click={() => delRail(i)}>🗑️</button>
        </div>
    {/each}
    <input type="name" id="name" placehoder="Schinen name" bind:value={railname} />
    <input type="name" id="name" placehoder="Klemmenanzahl" bind:value={terminalnummber} />
    <button type="button" on:click={addRail}>add</button>
</section>