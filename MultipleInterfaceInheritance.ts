interface IParent1{

    v1:number;
}

interface IParent2{
    v2:number;
}

interface Child extends IParent1, IParent2 {}
    var Iobj:Child = {v1:12, v2: 13};
    console.log("value1 " +this.v1+ " value2 " +this.v2);