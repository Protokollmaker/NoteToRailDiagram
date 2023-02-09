<script lang="ts">
    import {get} from 'svelte/store'
    import {login, logout} from "$lib/functions/firebase/authfirebase";
    import { user } from "$lib/stores/user";
    let email: string = "";
    let password: string = "";
</script>

<section>
  <a href="/debug/Display/Rail">Rails</a>
  <h1>email password</h1>
  <input type="email" id="email" placehoder="email" bind:value={email} />
  <input type="passord" id="password" placehoder="password" bind:value={password}/>
  <button type="button" on:click={login(email, password)}>login</button>
  {#if $user != undefined}
    <button type="button" on:click={logout}>logout</button>
  {/if}
</section>