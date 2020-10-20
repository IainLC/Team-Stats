const team = {
    _players: [  
      {
      firstName: 'jim',
      lastName: 'Sanchez',
      age: 11
      },
      {
      firstName: 'Pablo',
      lastName: 'escobar',
      age: 12
      },
      {
      firstName: 'rivera',
      lastName: 'gomes',
      age: 13
          }
        ],
    
    get players() {
      return this._players;
    },
    
    _games: [
    {
      opponent: 'pistons',
      teamPoints: 64,
      opponentPoints: 47
    },
    {
      opponent: 'Broncos',
      teamPoints: 21,
      opponentPoints: 17
    },
    {
      opponent: 'spurs',
      teamPoints: 44,
      opponentPoints: 37
    }
    ],
    
    get games()
    {
      return this._games;
      },
    
    addPlayer (firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age:age
      };
      this.players.push(player); 
    },
    
    addGame (oppenent, tP, oP){
      const game = {
        opponent: oppenent,
        teamPoints: tP,
        opponentPoints:oP
      };
      this.games.push(game);
    
    }
    };
    
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer("Lisa", 'Leslie',  44);
    team.addPlayer('Bugs', 'Bunny', 76);
    
    team.addGame('Killers',3,5);
    
    console.log(team.players);
    console.log(team.games);
    
    