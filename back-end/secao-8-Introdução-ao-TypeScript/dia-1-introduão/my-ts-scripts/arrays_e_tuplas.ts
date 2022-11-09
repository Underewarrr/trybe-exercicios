const statusCodes1: number[] = [200, 201, 404, 500];

const statusCodes2: Array<number> = [200, 201, 404, 500];

const statusCodes3: (number | string)[] = [200, 201, 404, 500, 'NOT_FOUND'];

const statusCodes4: Array<number | string> = [];

function calculaDobro(numbers: (number | string)[]) {
    return numbers.map((n) => Number(n) * 2);
}


let statusCodes5: [number, string] = [200, 'OK'];


calculaDobro(statusCodes1);
calculaDobro(statusCodes2);
calculaDobro(statusCodes3);

const n = 10;



console.log(statusCodes1);
console.log(statusCodes2);
console.log(statusCodes3);