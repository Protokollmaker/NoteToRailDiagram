import { writable } from 'svelte/store';
import {browser} from "$app/environment";
import type { Rail } from "$lib/functions/Rail/rail";

export const rails = writable<Array<Rail>>(
    browser && (JSON.parse(localStorage.getItem("rails") || "[]"))
);

rails.subscribe((val: any) => browser && localStorage.setItem("rails", JSON.stringify(val)))