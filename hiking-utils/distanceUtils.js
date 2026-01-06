export default function kmToMeters(km){
    if (typeof km != 'number' || km <=0){
        throw new Error("Invalid Number");
        
    }
    else{
    return km*1000;
    };
};

console.log(kmToMeters(5));
