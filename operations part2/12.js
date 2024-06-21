const a = 30.5, b = 220, c = 30, d = 31;
if(a > b){
    if(a > c){
        if(a > d){
            if(b > c){
                if(b > d){
                    console.log("b")
                }
                if(d > b){
                    console.log("d")
                }
            }
            if(c > b){
                if(c > d){
                    console.log("c")
                }
                if(d > c){
                    console.log("d")
                }
            }
        }
        if(d > a){
            console.log("a")
        }
    }
    if(c > a){
        if(c > d){
            if(a > d){
                console.log("a")
            }
            if(d > a){
                console.log("d")
            }
        }
        if(d > c){
            console.log("c")
        }
    }
}

if(b > a){
    if(b > c){
        if(b > d){
            if(a > c){
                if(a > d){
                    console.log("a")
                }
                if(d > a){
                    console.log("d")
                }
            }
            if(c > a){
                if(c > d){
                    console.log("c")
                }
                if(d > c){
                    console.log("d")
                }
            }
        }
        if(d > b){
            console.log("b")
        }
    }
    if(c > b){
        if(c > d){
            if(b > d){
                console.log("b")
            }
            if(d > b){
                console.log("d")
            }
        }
        if(d > c){
            console.log("c")
        }
    }
}

