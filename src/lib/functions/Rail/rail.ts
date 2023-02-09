export type railTerminal = { 
    from: Contact,
    to: Contact,
    terminal: number
};

export class Rail{
    m_name: string;
    m_terminalcount: number;
    m_extraData: Array<Raildata>;
    m_terminals: Array<railTerminal>;
    constructor(t_name:string, t_terminalcount:number){
        this.m_name = t_name;
        this.m_terminalcount = t_terminalcount;
        this.m_extraData = [];
        this.m_terminals = [];
    }
}

export class Raildata {
    m_terminal_restriction: Array<string> = ["none"];
    m_prioität: string = "assigned";
    m_note: number | undefined = undefined;
    m_optimization: boolean = true;
}

export class Contact {
    m_contact: number;
    m_terminal: string;
    constructor(t_terminal: string, t_contact: number){
        this.m_contact = t_contact;
        this.m_terminal = t_terminal;
    }
}