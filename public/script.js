// MADE BY AMAN & SAKSHAM 
var dots;
var running=0;
var time=0;
const DAY_LIST = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTH_LIST = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// window.onload=function ()
{
    printTime();
    setInterval(printTime, 1000);
    
    ////////////////////////////////        UNIT CONVERTER START     ////////////////////////////////
    const area_unit= ["Km Sq","M Sq","Ft Sq","Inch Sq"];
    var length_unit = new Array("Km","Meter","Cm","mm","Ft","Inch","Mile");
    var mass_unit = new Array("Kg","Gram","Pound","Tonne");
    var speed_unit = new Array("M/s","km/hr","Mile/hr");
    var temp_unit = new Array("Celsius","Fahrenheit","Kelvin");
    var freq_unit = new Array("Hz","Khz","Mhz","Ghz"); 
    document.getElementById("uc-property").onchange=function(){
        var property=document.getElementById("uc-property").value;
        property=property[0];
        switch (property){
          case 'a':{inj_units(area_unit); break;}
          case 'l':{inj_units(length_unit); break;}
          case 'm':{inj_units(mass_unit); break;}
          case 's':{inj_units(speed_unit); break;}
          case 't':{inj_units(temp_unit); break;}
          case 'f':{inj_units(freq_unit); break;}         
        }
        function inj_units(units){
          document.getElementById("unit-1").innerHTML="";
          document.getElementById("unit-2").innerHTML="";
          for(let j=0;j<units.length;j++){
            let option=document.createElement("option");
            option.append(units[j]);
            option.className="unit-opt";
            option.value=units[j].toLowerCase();
            
            document.getElementById("unit-2").appendChild(option);
          }
          for(let j=0;j<units.length;j++){
            let option=document.createElement("option");
            option.append(units[j]);
            option.className="unit-opt";
            option.value=units[j].toLowerCase();
            
            document.getElementById("unit-1").appendChild(option);
          }
        }
    }
      ////////////////////////////////   UNIT CONVERETER MAIN FUNCTIONING ///////////////////////////
    document.getElementById("input_box").onchange = () => {
      var unit1value=document.getElementById("unit-1").value;
      var unit2value=document.getElementById("unit-2").value;
      let opb_value=document.getElementById("output_box").value;
      let ipb_value=document.getElementById("input_box").value;
      let result;
                              ////////////////////////   AREA   START   /////////////////////////
      if(unit1value==unit2value){result=ipb_value;}
      else if (unit1value=="km sq" && unit2value=="m sq"){result=ipb_value*(10**6);}
      else if(unit1value=="km sq" && unit2value=="ft sq"){result=ipb_value*(1.0764262648*(10**7));}
      else if(unit1value=="km sq" && unit2value=="inch sq"){result=ipb_value*(0.1549907005579*(10**10));}
      else if(unit1value=="m sq" && unit2value=="km sq"){result=ipb_value*(10**(-6));}
      else if(unit1value=="m sq" && unit2value=="ft sq"){result=ipb_value*(10.764);}
      else if(unit1value=="m sq" && unit2value=="inch sq"){result=ipb_value*(1550.003);}
      else if(unit1value=="ft sq" && unit2value=="km sq"){result=ipb_value*(9.290304*(10**(-6)))/100;}
      else if(unit1value=="ft sq" && unit2value=="m sq"){result=ipb_value/10.764;}
      else if(unit1value=="ft sq" && unit2value=="inch sq"){result=ipb_value*144;}
      else if(unit1value=="inch sq" && unit2value=="km sq"){result=(ipb_value/(1.55*(10**5)))/(10**4);}
      else if(unit1value=="inch sq" && unit2value=="m sq"){result=ipb_value/1550.003;}
      else if(unit1value=="inch sq" && unit2value=="ft sq"){result=ipb_value/144;}
                              ////////////////////////    AREA    ENDS   //////////////////////
                              ////////////////////////    LENGTH STARTS  //////////////////////
      else if(unit1value=="km" && unit2value=="meter"){result=ipb_value*1000;}
      else if(unit1value=="km" && unit2value=="cm"){result=ipb_value*1000*100;}
      else if(unit1value=="km" && unit2value=="mm"){result=ipb_value*1000*100*10;}
      else if(unit1value=="km" && unit2value=="ft"){result=ipb_value*3280.84;}
      else if(unit1value=="km" && unit2value=="inch"){result=ipb_value*39370.079;}
      else if(unit1value=="km" && unit2value=="mile"){result=ipb_value/1.609;}
      else if(unit1value=="meter" && unit2value=="km"){result=ipb_value/1000;}
      else if(unit1value=="meter" && unit2value=="cm"){result=ipb_value*100;}
      else if(unit1value=="meter" && unit2value=="mm"){result=ipb_value*1000;}
      else if(unit1value=="meter" && unit2value=="ft"){result=ipb_value*3.28084;}
      else if(unit1value=="meter" && unit2value=="inch"){result=ipb_value*39.3701;}
      else if(unit1value=="meter" && unit2value=="mile"){result=ipb_value*1609.344;}
      else if(unit1value=="cm" && unit2value=="km"){result=ipb_value/(10**5);}
      else if(unit1value=="cm" && unit2value=="meter"){result=ipb_value/(10**2);}
      else if(unit1value=="cm" && unit2value=="mm"){result=ipb_value*10;}
      else if(unit1value=="cm" && unit2value=="ft"){result=ipb_value/30.48;}
      else if(unit1value=="cm" && unit2value=="inch"){result=ipb_value/2.54;}
      else if(unit1value=="cm" && unit2value=="mile"){result=ipb_value/160934.4;}
      else if(unit1value=="mm" && unit2value=="km"){result=ipb_value/1000000;}
      else if(unit1value=="mm" && unit2value=="meter"){result=ipb_value/1000;}
      else if(unit1value=="mm" && unit2value=="cm"){result=ipb_value/10;}
      else if(unit1value=="mm" && unit2value=="ft"){result=ipb_value/304.8;}
      else if(unit1value=="mm" && unit2value=="inch"){result=ipb_value/25.4;}
      else if(unit1value=="mm" && unit2value=="mile"){result=(ipb_value/1.609)/(10**6);}
      else if(unit1value=="ft" && unit2value=="km"){result=ipb_value/3280.84;}
      else if(unit1value=="ft" && unit2value=="meter"){result=ipb_value/3.28084;}
      else if(unit1value=="ft" && unit2value=="cm"){result=ipb_value*30.48;}
      else if(unit1value=="ft" && unit2value=="mm"){result=ipb_value*304.8;}
      else if(unit1value=="ft" && unit2value=="inch"){result=ipb_value*12;}
      else if(unit1value=="ft" && unit2value=="mile"){result=ipb_value/5280;}
      else if(unit1value=="inch" && unit2value=="km"){result=ipb_value/39370.079;}
      else if(unit1value=="inch" && unit2value=="meter"){result=ipb_value/39.3701;}
      else if(unit1value=="inch" && unit2value=="cm"){result=ipb_value*2.54;}
      else if(unit1value=="inch" && unit2value=="mm"){result=ipb_value*25.4;}
      else if(unit1value=="inch" && unit2value=="ft"){result=ipb_value/12;}
      else if(unit1value=="inch" && unit2value=="mile"){result=ipb_value/63360;}
      else if(unit1value=="mile" && unit2value=="km"){result=ipb_value*1.609;}
      else if(unit1value=="mile" && unit2value=="meter"){result=ipb_value*1609.344;}
      else if(unit1value=="mile" && unit2value=="cm"){result=ipb_value*160934.4;}
      else if(unit1value=="mile" && unit2value=="mm"){result=ipb_value*1609344;}
      else if(unit1value=="mile" && unit2value=="ft"){result=ipb_value*5280;}
      else if(unit1value=="mile" && unit2value=="inch"){result=ipb_value*63360;}
                     ////////////////////////    LENGTH ENDS  //////////////////////
                     ////////////////////////    MASS START   //////////////////////
      else if(unit1value=="kg" && unit2value=="gram"){result=ipb_value*1000;}
      else if(unit1value=="kg" && unit2value=="pound"){result=ipb_value*2.205;}
      else if(unit1value=="kg" && unit2value=="tonne"){result=ipb_value/1000;}
      else if(unit1value=="gram" && unit2value=="kg"){result=ipb_value/1000;}
      else if(unit1value=="gram" && unit2value=="pound"){result=ipb_value/453.592;}
      else if(unit1value=="gram" && unit2value=="tonne"){result=ipb_value/(10**6);}
      else if(unit1value=="pound" && unit2value=="kg"){result=ipb_value/2.20462;}
      else if(unit1value=="pound" && unit2value=="gram"){result=ipb_value*453.529;}
      else if(unit1value=="pound" && unit2value=="tonne"){result=ipb_value/2204.623;}
      else if(unit1value=="tonne" && unit2value=="kg"){result=ipb_value*1000;}
      else if(unit1value=="tonne" && unit2value=="gram"){result=ipb_value*(10**6);}
      else if(unit1value=="tonne" && unit2value=="pound"){result=ipb_value*(2204.623);}
                     ////////////////////////    MASS ENDS   ///////////////////////
                     ////////////////////////    SPEED STARTS   ///////////////////////
      else if(unit1value=="m/s" && unit2value=="km/hr"){result=ipb_value*3.6;}               
      else if(unit1value=="m/s" && unit2value=="mile/hr"){result=ipb_value*2.237;}               
      else if(unit1value=="km/hr" && unit2value=="m/s"){result=ipb_value/3.6;}               
      else if(unit1value=="km/hr" && unit2value=="mile/hr"){result=ipb_value/1.609;}
      else if(unit1value=="mile/hr" && unit2value=="m/s"){result=ipb_value/2.237;}               
      else if(unit1value=="mile/hr" && unit2value=="km/hr"){result=ipb_value*1.609;}                              
                     ////////////////////////    SPEED ENDS   ///////////////////////
                     ////////////////////////    TEMPRATURE STARTS   ////////////////////////
      else if(unit1value=="celsius" && unit2value=="fahrenheit"){result=(ipb_value*1.8)+32;}
      else if(unit1value=="celsius" && unit2value=="kelvin"){result=parseInt(ipb_value)+273.15;}
      else if(unit1value=="fahrenheit" && unit2value=="celsius"){result=(ipb_value-32)*0.555555;}
      else if(unit1value=="fahrenheit" && unit2value=="kelvin"){result=((ipb_value-32)*0.555555)+273.15;}
      else if(unit1value=="kelvin" && unit2value=="celsius"){result=ipb_value-273.15;}
      else if(unit1value=="kelvin" && unit2value=="fahrenheit"){result=((ipb_value-273.15)*1.8)+32;}
                     ////////////////////////    TEMPRATURE ENDS   ////////////////////////
                     ////////////////////////    FREQUENCY STARTS    ///////////////////////
      else if(unit1value=="hz" && unit2value=="khz"){result=ipb_value/1000;}
      else if(unit1value=="hz" && unit2value=="mhz"){result=ipb_value/1000000;}
      else if(unit1value=="hz" && unit2value=="ghz"){result=(ipb_value/1000000)/1000;}
      else if(unit1value=="khz" && unit2value=="hz"){result=ipb_value*1000;}
      else if(unit1value=="khz" && unit2value=="mhz"){result=ipb_value/1000;}
      else if(unit1value=="khz" && unit2value=="ghz"){result=ipb_value/1000000;}
      else if(unit1value=="mhz" && unit2value=="hz"){result=ipb_value*1000*1000;}
      else if(unit1value=="mhz" && unit2value=="khz"){result=ipb_value*1000;}
      else if(unit1value=="mhz" && unit2value=="ghz"){result=ipb_value/1000;}
      else if(unit1value=="ghz" && unit2value=="hz"){result=ipb_value*1000*1000*1000;}
      else if(unit1value=="ghz" && unit2value=="khz"){result=ipb_value*1000*1000;}
      else if(unit1value=="ghz" && unit2value=="mhz"){result=ipb_value*1000;}

      $("#output_box").val(result);
                        ////////////////////////    FREQUENCY ENDS    ///////////////////////
        ////////////////////////////////   UNIT CONVERETER MAIN FUNCTIONING ///////////////////////////
    }
    ////////////////////////////////        UNIT CONVERTER END     ////////////////////////////////
}/////////////////////////////////        WINDOW FUNCTION ENDS HERE       /////////////////////////////////////////////////////////////////





///////////////////////////////////////////   CALCULATOR STARTS   ////////////////////////////////
function insert(num){
    $("#calc_text").val(
        $("#calc_text").val() + num
    );
}
const calc = () => {
    const exp = $("#calc_text").val();
    if(exp)
        $("#calc_text").val(eval(exp));
}
function clr(){
    document.getElementById("calc_text").value="";  ////  KHALI HI RAHEGA
}
function bksp(){
    let b=document.getElementById("calc_text").value;
    document.getElementById("calc_text").value=b.substring(0,b.length-1);
}
function lg(){
    let a=document.getElementById("calc_text").value;
    document.getElementById("calc_text").value=Math.log10(a);
}
function sqr(){
    let s=document.getElementById("calc_text").value;
    document.getElementById("calc_text").value=Math.sqrt(s);
}
function dtr(dg){return ((dg*Math.PI)/180);}
function sn(){
    let e=document.getElementById("calc_text").value;
    document.getElementById("calc_text").value=Math.sin(dtr(e));
}
function cs(){
    let e=document.getElementById("calc_text").value;
    document.getElementById("calc_text").value=Math.cos(dtr(e));
}
function tn(){
    let e=document.getElementById("calc_text").value;
    if(e==90)
    {document.getElementById("calc_text").value="infinite";}
    else {document.getElementById("calc_text").value=Math.tan(dtr(e));}
}
///////////////////////////////////////////   CALCULATOR ENDS   ////////////////////////////////






/////////////////////////////////       DIGITAL CLOCK   START   ///////////////////////////////
function printTime() {
    const d = new Date();
    let hours = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const day = DAY_LIST[d.getDay()];
    let date = d.getDate();
    const month = MONTH_LIST[d.getMonth()];
    const year = d.getFullYear();
    const meridian = (hours >= 12)  ? " pm" : " am";
    if(hours!=12) hours %= 12;
    if(hours<10) hours = "0" + hours;
    if(m<10){m="0"+m;}
    if(s<10){s="0"+s;}
    if(date<10) date="0"+date;

    $('#watch').text(`${hours} : ${m} : ${s} ${meridian}`);
    $('#date').text(`${day}, ${date} ${month} ${year}`);
    
}
/////////////////////////////////       DIGITAL CLOCK  END     ///////////////////////////////




/////////////////////////////////       TIMER / STOPWATCH  START   ///////////////////////////////
function start_pause(){
    if(running==0){ 
        running = 1;
        increment();
        $('#start-timer').val("PAUSE");
        $('#start-timer').toggleClass("btn-success btn-danger");
    }else{
        running=0;
        $("#start-timer").val("RESUME");
        document.getElementById("start-timer").className="btn btn-info";
      }
}
function resetTimer(){
      running = time = 0;
      $("#start-timer").val("START");
      document.getElementById("start-timer").className="btn btn-success";
      $("#timer").text("00:00");
      $("#lap-info").html(""); //KHALI HI REHNA HAI
}
function increment(){
    if(running==1){
        setTimeout(() => {
            time++;
            let mins = Math.floor(time/600);
            let secs = Math.floor(time/10);

            if(mins < 10) mins = "0" + mins;
            if(secs < 10) secs = "0" + secs;

            $("#timer").text(`${mins}:${secs}`);
            increment();
        },100);
    }
}
function lapTimer(){
      var p = document.createElement("p");
      p.append($("#timer").html());
      p.style.fontSize = "20pt";
    //   document.getElementById("lap-info").appendChild(p);
      $("#lap-info").append(p);
}
/////////////////////////////////       TIMER / STOPWATCH  END     ///////////////////////////////
