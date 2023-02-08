<script lang="ts">
    import {get} from 'svelte/store'
    import {login, logout} from "$lib/functions/firebase/authfirebase";
    import { user } from "$lib/stores/user";
    let email: string = "";
    let password: string = "";
    user.subscribe(value => {
		console.log("fds",value);
	});
</script>

<section>
  <h1>email password</h1>
  <input type="email" id="email" placehoder="email" bind:value={email} />
  <input type="passord" id="password" placehoder="password" bind:value={password}/>
  <button type="button" on:click={login(email, password)}>login</button>
  <button type="button" on:click={logout}>logout</button>
</section>