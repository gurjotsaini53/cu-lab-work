let Brand=["Maruti","Toyota","Mahindra","Audi"]
Brand.splice(2,1,"BMW")
Brand.splice(3,0,"Mercedes")
console.log(Brand);
var count=Brand.length;
for(let i=0;i<Brand.length;i++){
  for(let j=i;j<Brand.length;j++){
    if(Brand[i]>Brand[j]){
      let temp=Brand[i];
      Brand[i]=Brand[j];
      Brand[j]=temp;
    }
  }
}
console.log(Brand)
let Models=["Dzire","Innova","XUV","X6"];
for(let i=0;i<Models.length;i++){
  Brand.push(Models[i]);
}

console.log(Brand);