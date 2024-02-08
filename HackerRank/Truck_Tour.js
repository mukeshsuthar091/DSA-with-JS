let petrolPumps = [[1,5],[10,3],[3,4]];

function truckTour(petrolPumps){
    let currPetrol = 0;
    let index = 0;
    
    for(let i=0; i<petrolPumps.length; i++){

        // petrol at the pump
        currPetrol = currPetrol + petrolPumps[i][0];
        
        // petrol at arrival to the next petrol station
        currPetrol = currPetrol - petrolPumps[i][1];

        if(currPetrol < 0){
            currPetrol = 0;
            index = i+1;
        }
    }

    return index;
}

console.log(truckTour(petrolPumps))