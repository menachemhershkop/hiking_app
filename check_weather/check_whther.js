export default function checker(temp, wind){
    if (typeof temp != 'number' || typeof wind != 'number'){
        throw new Error("Invalid input");
        
    }
    if (temp < 0 || temp > 35){
        return {
  "safe": false,
  "message": "Too windy to hike!"
}

    }
    else if (wind > 50)
        return {
  "safe": false,
  "message": "Too windy to hike!"
}

    else{
        return {"safe": true,"message": "All conditions are good for hiking!"}
    };
};
