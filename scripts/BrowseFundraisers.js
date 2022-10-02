let url = 'https://odd-pig-button.cyclic.app/api';
fetch(`${url}/allCategory`).then((res)=>{
    return (res.json());
}).then((data)=>{
    display(data)
}).catch(function(err){
    console.log(err)
})

let display = (data) => {
   let container =  document.getElementById("appendData");
   container.innerHTML = null;
   let containerB = document.getElementById("appendBData");
   
   data.forEach(({image,title,by,amount,dayleft,status,support},inu) => {
       
    let div = document.createElement("div");
        div.setAttribute("class","data")

        let i = document.createElement("img");
        i.src = image;

        let t = document.createElement("h3");
        t.innerText = title;
        t.style.padding = "0% 4% 4% 4%"

        let b = document.createElement("p");
        b.innerHTML = `<p style="display: inline;color: blue;">FF</p>   ${by}`;
        b.style.padding = "0% 4% 4% 4%"
        
        let a = document.createElement("h2");
        a.innerHTML = `R ${amount}`
        a.setAttribute("class","raised")
        
        let s = document.createElement("p");
        s.innerText = status;
        s.setAttribute("class","last_d")
        
        let d_b = document.createElement("div");
        d_b.setAttribute("class","wid-foot")
        let sp1 = document.createElement("span");
        sp1.setAttribute("class","bbbox")
        let sp2 = document.createElement("span");
        sp1.setAttribute("class","bbbox")
        
        sp1.innerText = dayleft;
        sp2.innerText = support;
        
        d_b.append(sp1,sp2);
        div.append(i,t,b,a,s,d_b);
        container.append(div)
    });

}

let category = (n) => {
            if(n==1){main("allCategory")}
            else if(n==2){main("eduaction")}
            else if(n==3){main("medical")}
            else if(n==4){main("womanNman")}
            else if(n==5){main("animals")}
            else if(n==6){main("creative")}
            else if(n==7){main("foodAndHunger")}
            else if(n==8){main("environment")}
            else if(n==9){main("children")}
            else if(n==10){main("memorial")}
            else if(n==11){main("communityDevelopment")}
            else if(n==12){main("others")}
}

let main = (q) => {
    fetch(`${url}/${q}`).then((res)=>{
        return (res.json());
    }).then((data)=>{
        display(data)
    }).catch(function(err){
        console.log(err)
    })
}

let enter = (e) => {
    if (e.key === "Enter") {
      let q = document.getElementById('search__input').value;
    main(q);
    }
} 