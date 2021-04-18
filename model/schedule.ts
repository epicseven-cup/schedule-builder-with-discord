class Block{
  dailyCare:{[key:number]:Tag} = {};
  constructor(input:{[key:number]:Tag}){
    this.dailyCare = input;
  }

}

abstract class Tag{
  task:string;
  color:string;
  constructor(message:string){
    this.task = message;
  }

}

class GreenTag extends Tag{
  constructor(message:string){
    super(message)
    this.color = "#00FF00";
  }
}

class RedTag extends Tag{
  constructor(message:string){
    super(message)
    this.color = "#FF0000";
  }
}

class BlueTag extends Tag{
  constructor(message:string){
    super(message)
    this.color = "#0000FF";
  }
}

class Yellowtag extends Tag{
  constructor(message:string){
    super(message)
    this.color = "#FFFF00";
  }
}

class BlackTag extends Tag{
  constructor(message:string){
    super(message)
    this.color = "#FFFFFF";
  }
}
//When webpage loads
const dates:Date = new Date();
const month:number = dates.getMonth();
const year:number = dates.getFullYear();

const numberofDays:number = new Date(year,month,0).getDate();
