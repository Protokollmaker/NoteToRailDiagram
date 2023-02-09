// @ts-nocheck
export async function load({params}) {
    const railname = params.railname;
    return {
        data: {
            railname
        }
    };
}