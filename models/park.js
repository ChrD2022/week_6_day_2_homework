const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
    this.dietRequirements = {
        'carnivore': 0,
        'herbivore': 0,
        'omnivore': 0
    }
};

Park.prototype.dinoCount = function(){
    return this.dinosaurCollection.length;
};

Park.prototype.addNewDino = function(dinosaur){
    this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDino = function(dinosaur){
    let dinoToRemove;
    for (const dino of this.dinosaurCollection){
        if (dino === dinosaur){
            dinoToRemove = this.dinosaurCollection.indexOf(dino);
            break;
        }
    }this.dinosaurCollection.splice(dinoToRemove, 1);
};

Park.prototype.mostVisitedDino = function(){
    let  mostVisited = this.dinosaurCollection[0];

    for (const dino of this.dinosaurCollection){
        if (dino.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay){
            mostVisitedDino = dino
        }
    }
    return mostVisitedDino;
};

Park.prototype.findSpecies = function(species){
    let dinoSpecies = [];

    for (const dino of this.dinosaurCollection){
        if (dino.species === species){
            dinoSpecies.push(dino)
        }
    }
    return dinoSpecies;
};

Park.prototype.totalDailyVisitors = function(){
    let totalVisitors = 0;

    for (const visitors of this.dinosaurCollection){
        totalVisitors += visitors.guestsAttractedPerDay
    };
    return totalVisitors
};

Park.prototype.totalAnnualVisitors = function(park){
    return park.totalDailyVisitors() * 365;
};

Park.prototype.totalAnnualRevenue = function(park){
    return park.totalAnnualVisitors(park) * (park.ticketPrice);
};

Park.prototype.extinctionProtocol = function(species){
    let target;
    for (const dino of this.dinosaurCollection){
        if (dino.species === species){
            target = this.dinosaurCollection.indexOf(dino);
            break;
        } this.dinosaurCollection.splice(target, 1);
    }; 
};

Park.prototype.dietPlan = function(){
    for (const dino of this.dinosaurCollection){
        if(dino.diet === 'carnivore'){
            this.dietRequirements['carnivore'] += 1;
        }else if(dino.diet === 'herbivore'){
            this.dietRequirements['herbivore'] += 1;
        }else{
            this.dietRequirements['omnivore'] += 1;
        };
        }return this.dietRequirements
    };    


module.exports = Park;