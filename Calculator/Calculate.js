let haveint=false;
let haveope=false;
function calculating(olds,news,haveint,haveope){
    console.log(olds)
    if(news=="AC"){
        return "0"
        haveint=false;
        haveope=false;
    }
    else if(news=="="){
        
        if(["%","+","-","*","/"].includes(olds[-1])){return -1}
        else{
            const answer=eval(olds).toString();
            haveope=false;
            return answer;
        }
    }
    else if (news == ".") {
        let lastNumber = olds.split(/[%+\-*/]/).pop();
        if (lastNumber.includes(".")) { 
            return olds; 
        } 
        else {
            return olds + "."; 
        }
    }
    else{
        if(haveope==true && ["%","+","-","*","/"].includes(news) && haveint==true){return -1;}
        else if(["%","+","-","*","/"].includes(news)){
            let answer=eval(olds).toString();
            console.log(answer)
            answer=answer+news;
            return answer;
        }
        else{
            if(olds=="0"){
                return news;
            }
            if(["%","+","-","*","/"].includes(news)){
                haveint=false;
                haveope=true;
                console.log("Hello")
            }
            else{haveint=true;}
            olds=olds+news;
            
            return olds;
        }
    }
    return news
}
const curval=document.getElementById("value")
const curbutton=document.getElementById("takinginput")

curbutton.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.dataset.value;
        var answer=calculating(curval.textContent,buttonValue,haveint,haveope)
        if(answer!=-1){
            curval.textContent=`${answer}`
        }
    }
    
})