//square pattern
for(let i=1;i<=5;i++){
    let pattern = " ";
    for(let j=1;j<=5;j++){
        pattern+="*";
    }
    console.log(pattern);
    }

    //rigth triangle
    for(let i=1;i<=5;i++){
    let pattern = " ";
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
    }
    

    //inverted triangle
    for(let i=5;i>=1;i--){
    let pattern = " ";
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
    }

    