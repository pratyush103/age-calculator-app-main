
function isValidForm(){
    const DDInput=document.getElementById('DD');
    const MMInput=document.getElementById('MM');
    const YYYYInput=document.getElementById('YYYY');
    const errorDay=document.getElementById('error-day');
    const errorMonth=document.getElementById('error-mon');
    const errorYear=document.getElementById('error-yrs');
    const resDay=document.getElementById('resDay');
    const resMonth=document.getElementById('resMonth');
    const resYear=document.getElementById('resYear');
    const daytxt=document.getElementById('day');
    const monthtxt=document.getElementById('month');
    const yeartxt=document.getElementById('year');
    const DD=parseInt(DDInput.value);
    const MM=parseInt(MMInput.value);
    const YYYY=parseInt(YYYYInput.value);
    const today=new Date();
    const currentYear=today.getFullYear();
    const currentMonth=today.getMonth()+1;
    const currentDay=today.getDate();
    
    if(DDInput.value==='' || MMInput.value==='' || YYYYInput.value==='' ||DD>31 || DD<1 || MM>12 || MM<1 || YYYY>currentYear || YYYY<1900){
        if(DDInput.value==='' ||DD>31 || DD<1){
            if(DDInput.value===''){
                errorDay.style.display='block';
                errorDay.innerText='Day is required';}
            else{
                errorDay.style.display='block';
                
                errorDay.innerText='Invalid Day';

            }
            daytxt.style.color='red';
            DDInput.style.border='1px solid red';
        }else{
            errorDay.innerText='';
            daytxt.style.color='#707070';
            DDInput.style.border='1px solid #ececec';
        }
        if(MMInput.value===''||MM>12 || MM<1){
            if(MMInput.value===''){
                errorMonth.style.display='block';
                errorMonth.innerText='Month is required';}
            else{
                errorMonth.style.display='block';
                errorMonth.innerText='Invalid Month';
            }
            

            
        }else{
            errorMonth.innerText='';
            monthtxt.style.color='#707070';
            MMInput.style.border='1px solid #ececec';
        }
        if(YYYYInput.value==='' || YYYY>currentYear || YYYY<0){
            if(YYYYInput.value===''){
                errorYear.style.display='block';
                errorYear.innerText='Year is required';}
            else{
                errorYear.style.display='block';
                errorYear.innerText='Invalid Year';
            }
            yeartxt.style.color='red';
            YYYYInput.style.border='1px solid red';
        }else{
            errorYear.innerText='';
            yeartxt.style.color='#707070';
            YYYYInput.style.border='1px solid #ececec';
        }

        resDay.innerText='- -';
        resMonth.innerText='- -';
        resYear.innerText='- -';
        return false;
    }
    
    else{
        errorDay.innerText='';
        errorMonth.innerText='';
        errorYear.innerText='';
        return true;
    }

    
}



function calculateAge(){
    const errorDay=document.getElementById('error-day');
    const errorMonth=document.getElementById('error-mon');
    const errorYear=document.getElementById('error-yrs');
    const DDInput=document.getElementById('DD');
    const MMInput=document.getElementById('MM');
    const YYYYInput=document.getElementById('YYYY');
    const resDay=document.getElementById('resDay');
    const resMonth=document.getElementById('resMonth');
    const resYear=document.getElementById('resYear');



    const DD=parseInt(DDInput.value);
    const MM=parseInt(MMInput.value);
    const YYYY=parseInt(YYYYInput.value);
    const today=new Date();
    const currentYear=today.getFullYear();
    const currentMonth=today.getMonth()+1;
    const currentDay=today.getDate();
    if(isValidForm()===false){
        return;
    }
    
    let ageYear=currentYear-YYYY;
    let ageMonth=currentMonth-MM;
    let ageDay=currentDay-DD;
    if(ageMonth<0){
        ageYear--;
        ageMonth=12+ageMonth;
    }
    if(ageDay<0){
        ageMonth--;
        ageDay=30+ageDay;
    }
    if(isNaN(ageYear)||isNaN(ageMonth)||isNaN(ageDay)){
        resDay.innerText='- -';
        resMonth.innerText='- -';
        resYear.innerText='- -';
        return;
    }

    resDay.innerText=ageDay;
    resMonth.innerText=ageMonth;
    resYear.innerText=ageYear;
}