export interface Passenger {
    name: string,
    children?: string[],

}

const passenger1: Passenger = {
    name: "Alejita"
}

const passenger2: Passenger = {
    name: 'Jhoan',
    children: ['Angusti', 'Gata']
}

const printChildren = ( passenger: Passenger) => {

    // const howManyChildren = passenger.children!.length;
    const howManyChildren = passenger.children?.length || 0;


    console.log(passenger.name, howManyChildren);
}

printChildren( passenger2 );