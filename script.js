
let ሊንኮችህ = []
const inputEl = document.getElementById("input_el")
const inputBtn = document.getElementById("input_btn")
const delEl = document.getElementById("del_btn")
const tabEL = document.getElementById("tab_btn")
const olEl = document.getElementById("ol_el")
let tabs

    // locaStorage ላይ ሊንክ ካለ በ constant variable ተቀብሎ በ parameter ለሊስት አድራጊው function መስጠት
    
    const ሊንክአለ = JSON.parse(localStorage.getItem("leads"))
    if(ሊንክአለ){
        ሊንኮችህ = ሊንክአለ
        render (ሊንኮችህ)
    }
    
    // "አስቀምጥ" button ሲነካ የተጻፈውን ሊንክ አሬ ላይ ፑሽ በማድረግ local storage ላይ በstring ማስቀመጥ እና ፔጅ ላይ ሊስት ኢንዲደረግ ...
    // በ parameter ለሊስት አድራጊው function መስጠት
    
    inputBtn.addEventListener("click", function () {
        ሊንኮችህ.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem("leads",JSON.stringify(ሊንኮችህ))
        render (ሊንኮችህ)
    })

    //"አጥፋ" button double click ሲደረግ localStorage ላይ save የተደረገ ካለ በመደለት በ parameter ለሊስት አድራጊው function መስጠት

    delEl.addEventListener("click", function () {
        localStorage.clear()
        ሊንኮችህ = []
        render (ሊንኮችህ)
    })

    //"ያለሁበትን አስቀምጥ" button ሲነካ ያለበት ፔጅ ላይ ያለውን ሊንክ localStorage ላይ በማስቀመጥ በ parameter ለሊስት አድራጊው function መስጠት

    tabEL.addEventListener("click",function(){

        //chrome tab ላይ ያለውን ሊንክ ለመቀበል የተጠቀምኩት API
        chrome.tabs.query({active: true , currentWindow: true},function(tabs) {

                ሊንኮችህ.push(tabs[0].url)
                localStorage.setItem("leads",JSON.stringify(ሊንኮችህ))
                render(ሊንኮችህ)
        })

    })

    // በሚጠራበት ጊዜ አሬ ስር ያሉትን ሊንኮች መዘርዘር
    
    function render (ዝርዝር){
        let list = ""
        for(let i = 0; i< ዝርዝር.length; i++){
        list += `
            <li>
                <a href ='${ዝርዝር[i]}' target = '_blank'> ${ዝርዝር[i]} </a>
            </li>
        `
        
    } 
    olEl.innerHTML = list
}
