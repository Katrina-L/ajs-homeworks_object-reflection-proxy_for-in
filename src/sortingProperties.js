export default function orderByProps(obj, sortOrder) {
    const arrRestProp = [];
    for (const prop in obj) {
        if ( !sortOrder.includes(prop) ) {
            arrRestProp.push(prop);
        };
    }
    arrRestProp.sort();
    sortOrder.push(...arrRestProp);

    //  ---------  С .помощью map  ---------
    return sortOrder.map( elem => {
        return { key: elem, value: obj[elem] }; 
    });

    // //  ---------  С помощью .reduce  ---------
    // return sortOrder.reduce( (acc, prop) => {
    //     acc.push({key: prop, value: obj[prop]});
    //     return acc;
    // }, [] );
};

// ------------  Другой вариант  ---------------
// export default function orderByProps(obj, [param1, param2]) {
//     const arrOrdered = [];
//     typeof obj[param1] === "number" ? arrOrdered.push({ key: `${param1}`, value: +`${obj[param1]}` }) : arrOrdered.push({ key: `${param1}`, value: `${obj[param1]}` });
//     typeof obj[param2] === "number" ? arrOrdered.push({ key: `${param2}`, value: +`${obj[param2]}` }) : arrOrdered.push({ key: `${param2}`, value: `${obj[param2]}` });
    
//     const arrRestProp = [];
//     for ( const restProp in obj ) {
//         if (restProp !== param1 && restProp !== param2) {
//             arrRestProp.push(restProp);
//         }
//     }
//     arrRestProp.sort().forEach( elem => arrOrdered.push({key: elem, value: obj[elem]}) );
//     return arrOrdered;
// };