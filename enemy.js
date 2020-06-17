class Enemy{
  constructor(x,y) {
    this.enemy= createSprite(x, y, 25, 25);
    this.enemy.shapeColor="lime"
    this.enemy.velocityX=3;
    this.enemy.velocityY=3;
    
    
   
  } 

  bounce(){
    if(this.enemy.isTouching(maze.wall)){
      this.enemy.bounceOff(maze.wall);
    
    }
    if(this.enemy.isTouching(maze.wall2)){
      this.enemy.bounceOff(maze.wall2);
    
    }

    if(this.enemy.isTouching(maze.wall3)){
      this.enemy.bounceOff(maze.wall3);
    
    }
    if(this.enemy.isTouching(maze.wall4)){
      this.enemy.bounceOff(maze.wall4);
    
    }

    if(this.enemy.isTouching(maze.wall5)){
      this.enemy.bounceOff(maze.wall5);
    
    }

     if(this.enemy.isTouching(maze.wall6)){
      this.enemy.bounceOff(maze.wall6);
    
    }
     if(this.enemy.isTouching(maze.wall7)){
      this.enemy.bounceOff(maze.wall7);
    
    }
     if(this.enemy.isTouching(maze.wall8)){
      this.enemy.bounceOff(maze.wall8);
    
    }
     if(this.enemy.isTouching(maze.wall9)){
      this.enemy.bounceOff(maze.wall9);
    
    }
     if(this.enemy.isTouching(maze.wall10)){
      this.enemy.bounceOff(maze.wall10);
    
    }
     if(this.enemy.isTouching(maze.wall11)){
      this.enemy.bounceOff(maze.wall11);
    
    } if(this.enemy.isTouching(maze.wall12)){
      this.enemy.bounceOff(maze.wall12);
    
    }

     if(this.enemy.isTouching(maze.wall13)){
      this.enemy.bounceOff(maze.wall13);
    
    }
     if(this.enemy.isTouching(maze.wall14)){
      this.enemy.bounceOff(maze.wall14);
    
    }
     if(this.enemy.isTouching(maze.wall15)){
      this.enemy.bounceOff(maze.wall15);
    
    }
    if(this.enemy.isTouching(maze.wall16)){
      this.enemy.bounceOff(maze.wall16);
    
    }
    if(this.enemy.isTouching(maze.wall17)){
      this.enemy.bounceOff(maze.wall17);
    
    }
     if(this.enemy.isTouching(maze.wall18)){
      this.enemy.bounceOff(maze.wall18);
    
    }
     if(this.enemy.isTouching(maze.wall19)){
      this.enemy.bounceOff(maze.wall19);
    
    }
     if(this.enemy.isTouching(maze.wall20)){
      this.enemy.bounceOff(maze.wall20);
    
    }
    if(this.enemy.isTouching(maze.wall21)){
      this.enemy.bounceOff(maze.wall21);
    
    }
     if(this.enemy.isTouching(maze.wall22)){
      this.enemy.bounceOff(maze.wall22);
    
    }
    if(this.enemy.isTouching(maze.wall23)){
      this.enemy.bounceOff(maze.wall23);
    
    }
     if(this.enemy.isTouching(maze.wall24)){
      this.enemy.bounceOff(maze.wall24);
    
    }
     if(this.enemy.isTouching(maze.wall25)){
      this.enemy.bounceOff(maze.wall25);
    
    }
    if(this.enemy.isTouching(maze.wall26)){
      this.enemy.bounceOff(maze.wall26);
    
    }
    if(this.enemy.isTouching(maze.wall27)){
      this.enemy.bounceOff(maze.wall27);
    
    } 
   

    
    
  }
}