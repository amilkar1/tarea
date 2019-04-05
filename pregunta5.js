function sumaDigitos(p,n){
    n+=1;
    var suma= p;
    while(n--!= 0){
      suma*= 10;
    }
    suma+=p;
    suma=Math.pow(suma,2);
    p= 0;
    while(suma> 0){
      p+= suma% 10;
      suma= parseInt(suma/=10);
    }


    return p;
}
console.log(sumaDigitos(5,1));
