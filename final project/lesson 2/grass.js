class Grass extends KendaniEak {
    bazmanal(){
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if(exanak=="dzmer" || exanak=="ashun"){
        if(this.multiply >= 20   && this.direction ){
            statistika.achacxot++;
            var newGrass = new Grass(this.direction[0],this.direction[1],this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
    else{
         if(this.multiply >= 4 && this.direction ){
                statistika.achacxot++;
            var newGrass = new Grass(this.direction[0],this.direction[1],this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }


    }
}
