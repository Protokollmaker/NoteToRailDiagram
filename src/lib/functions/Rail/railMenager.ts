// @ts-nocheck
import { Rail } from "$lib/functions/Rail/rail";
import { rails } from "$lib/stores/rail";
import { get } from 'svelte/store';
import {browser} from "$app/environment";

class railMenager {
    constructor() {
        
    }

    addRail(t_name: string, t_terminalcount:number) {
        if (t_name == "") return;
        let rail = new Rail(t_name, t_terminalcount)
        rails.set([...get(rails), rail]);
        console.log(t_name, get(rails));
    }
    getRail(t_name:string){
        for (let rail of get(rails)){
            if (t_name == rail.m_name)
                return rail;
        }
        return undefined;
    }

    getRailindex(t_name: string):number | undefined{
        if (get(rails).length == 0)
            return undefined;
        for (let index in get(rails)){
            if (t_name == get(rails)[index].m_name)
                return index;
        }
        return undefined;
    }

    delRail(index: number){
        let rails1 = get(rails);
        if (index > -1) {
            rails1.splice(index, 1);
        }
        rails.set(rails1);
    }
}

export const foo = browser && new railMenager();