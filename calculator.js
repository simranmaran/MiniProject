let store= ' '


let call=(value)=>{
    let show=document.querySelector("#display")
    store=store+value

    show.innerHTML=store

}

let result=()=>{
    let show=document.querySelector("#display")
      store=eval(store)
      store.toString()       //yeh num ko string m  convert krta he
    show.innerHTML=store

    
}

let del=()=>{
    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store

}

let allclear=()=>{
    let show=document.querySelector("#display")
    
    show.innerHTML=' '



    
}