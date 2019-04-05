function sumaMatriz(){
  var matriz=[[0,1,1,2],[0,5,0,0],[2,1,1,3]];
  var suma=0;
  for(var i=0; i<3; i++){
    for(var j=0; j<4; j++){
      if(matriz[i][j] !=0){
        if(i==0)
        suma=suma+matriz[i][j];
      }
    }
  }

}
console.log sumaMatriz
