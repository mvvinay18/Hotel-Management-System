a = [1, 2, 3, 9, 13, 15, 21];
j = 0;
console.log(a.length);
let i=0

for ( i; i < 100; i++) {
  if (j < a.length) {
    if (i == a[j]) {
        j++;
      continue;

    }
    if(i<a[j]){
        console.log(i)
     
    }

  }
 
}
j=a[j-1]
console.log(j,"kjnwkbcwkjdjckj");
for(let k=j+1;k<30;k++){
    console.log(k);
}

