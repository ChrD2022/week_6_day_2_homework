const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;
  let park;

  beforeEach(function () {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    park = new Park('Jurassic Park', 20);
  });

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurCollection, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.deepStrictEqual(park.dinoCount(), 7)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    park.removeDino(trex3);
    assert.deepStrictEqual(park.dinoCount(), 6)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.strictEqual(park.mostVisitedDino(), trex3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.deepStrictEqual(park.findSpecies('velociraptor'), [velociraptor1, velociraptor2])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.strictEqual(park.totalDailyVisitors(), 229);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.strictEqual(park.totalAnnualVisitors(park), 83585);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.strictEqual(park.totalAnnualRevenue(park), 1671700)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    park.extinctionProtocol('velociraptor');
    assert.deepStrictEqual(park.dinoCount(), 5);
  })

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    park.addNewDino(trex1);
    park.addNewDino(trex2);
    park.addNewDino(trex3);
    park.addNewDino(velociraptor1);
    park.addNewDino(velociraptor2);
    park.addNewDino(diplodocus);
    park.addNewDino(gallimimus);
    assert.deepStrictEqual(park.dietPlan(),{
      'carnivore': 5,
      'herbivore': 1, 
      'omnivore': 1
    });
  })
  
});
