export default function caloriesBurned(weightInKg, distanceInKm){
    if (typeof weightInKg != 'number' || typeof distanceInKm != 'number'){
        throw new Error("Invalid input");
    }
    else if (weightInKg <=5 || distanceInKm <=1){
        throw new Error("Incourrect KG or KM");
        
    }
    else{
    return weightInKg*distanceInKm*1.036
    };
};

console.log(caloriesBurned(15,5.5));
