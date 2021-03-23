var i, j, ref, score, counter, flag=0;
var img=new Array(5); var once=new Array(5);
var t; var tobj, tobj1, tobj2;
function timer()
{
    document.getElementById("time").innerHTML="15";
    tobj=setInterval(t15, 1000); t=14;
}

function t15()
{
    if(t<=-1) clearInterval(tobj);
    else
    {
        document.getElementById("time").innerHTML=t;
        t--;
    }
}

function random()
{
    clearInterval(tobj); clearInterval(tobj1); clearInterval(tobj2);
    score=0; counter=0;
    document.getElementById("score").innerHTML=score;
    document.getElementById("time").innerHTML=11;
    for(i=0;i<5;i++) {img[i]=new Array(5); once[i]=new Array(5);}
    ref=Math.floor(((Math.random())*3)+1);
    document.getElementById("reference").src=ref + ".jpg";
    document.getElementById("rcard").classList.toggle("xflipped");
    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++) 
        {
            img[i][j]=Math.floor(((Math.random())*3)+1);
            if(ref==img[i][j]) counter++;
            document.getElementById("a"+i+j).src=img[i][j] + ".jpg";
            once[i][j]=1;
            document.getElementById("card"+i+j).classList.toggle("flipped");
            document.getElementById("card"+i+j).style.pointerEvents="auto";
        }
    }
    document.getElementById("button").style.pointerEvents="none";
    tobj1=setTimeout(hide, 5000); tobj2=setTimeout(gameover, 15000); //setTimeout(varassign, 3000);
}

function hide()
{
    flag=1;
    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++)
        {
            document.getElementById("card"+i+j).classList.remove("flipped");
            document.getElementById("a"+i+j).src="0.jpg";
        }
    }
}


function clicked00()
{
    if(img[0][0]==ref)
    {
        document.getElementById("a00").src="yup.gif"; if((flag==1)&&(once[0][0]==1)) {score+=(100/counter); once[0][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else 
    {
        document.getElementById("a00").src="oops.jpg"; if((flag==1)&&(once[0][0]==1)) {score-=(110/counter); once[0][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked01()
{
    if(img[0][1]==ref)
    {
        document.getElementById("a01").src="yup.gif"; if((flag==1)&&(once[0][1]==1)) {score+=(100/counter); once[0][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a01").src="oops.jpg"; if((flag==1)&&(once[0][1]==1)) {score-=(110/counter); once[0][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked02()
{
    if(img[0][2]==ref)
    {
        document.getElementById("a02").src="yup.gif"; if((flag==1)&&(once[0][2]==1)) {score+=(100/counter); once[0][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a02").src="oops.jpg"; if((flag==1)&&(once[0][2]==1)) {score-=(110/counter); once[0][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked03()
{
    if(img[0][3]==ref)
    {
        document.getElementById("a03").src="yup.gif"; if((flag==1)&&(once[0][3]==1)) {score+=(100/counter); once[0][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a03").src="oops.jpg"; if((flag==1)&&(once[0][3]==1)) {score-=(110/counter); once[0][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked04()
{
    if(img[0][4]==ref)
    {
        document.getElementById("a04").src="yup.gif"; if((flag==1)&&(once[0][4]==1)) {score+=(100/counter); once[0][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a04").src="oops.jpg"; if((flag==1)&&(once[0][4]==1)) {score-=(110/counter); once[0][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
}

function clicked10()
{
    if(img[1][0]==ref)
    {
        document.getElementById("a10").src="yup.gif"; if((flag==1)&&(once[1][0]==1)) {score+=(100/counter); once[1][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a10").src="oops.jpg"; if((flag==1)&&(once[1][0]==1)) {score-=(110/counter); once[1][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked11()
{
    if(img[1][1]==ref)
    {
        document.getElementById("a11").src="yup.gif"; if((flag==1)&&(once[1][1]==1)) {score+=(100/counter); once[1][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a11").src="oops.jpg"; if((flag==1)&&(once[1][1]==1)) {score-=(110/counter); once[1][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked12()
{
    if(img[1][2]==ref)
    {
        document.getElementById("a12").src="yup.gif"; if((flag==1)&&(once[1][2]==1)) {score+=(100/counter); once[1][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a12").src="oops.jpg"; if((flag==1)&&(once[1][2]==1)) {score-=(110/counter); once[1][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked13()
{
    if(img[1][3]==ref)
    {
        document.getElementById("a13").src="yup.gif"; if((flag==1)&&(once[1][3]==1)) {score+=(100/counter); once[1][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a13").src="oops.jpg"; if((flag==1)&&(once[1][3]==1)) {score-=(110/counter); once[1][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked14()
{
    if(img[1][4]==ref)
    {
        document.getElementById("a14").src="yup.gif"; if((flag==1)&&(once[1][4]==1)) {score+=(100/counter); once[1][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a14").src="oops.jpg"; if((flag==1)&&(once[1][4]==1)) {score-=(110/counter); once[1][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
}

function clicked20()
{
    if(img[2][0]==ref)
    {
        document.getElementById("a20").src="yup.gif"; if((flag==1)&&(once[2][0]==1)) {score+=(100/counter); once[2][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a20").src="oops.jpg"; if((flag==1)&&(once[2][0]==1)) {score-=(110/counter); once[2][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked21()
{
    if(img[2][1]==ref)
    {
        document.getElementById("a21").src="yup.gif"; if((flag==1)&&(once[2][1]==1)) {score+=(100/counter); once[2][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a21").src="oops.jpg"; if((flag==1)&&(once[2][1]==1)) {score-=(110/counter); once[2][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked22()
{
    if(img[2][2]==ref)
    {
        document.getElementById("a22").src="yup.gif"; if((flag==1)&&(once[2][2]==1)) {score+=(100/counter); once[2][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a22").src="oops.jpg"; if((flag==1)&&(once[2][2]==1)) {score-=(110/counter); once[2][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked23()
{
    if(img[2][3]==ref)
    {
        document.getElementById("a23").src="yup.gif"; if((flag==1)&&(once[2][3]==1)) {score+=(100/counter); once[2][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a23").src="oops.jpg"; if((flag==1)&&(once[2][3]==1)) {score-=(110/counter); once[2][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked24()
{
    if(img[2][4]==ref)
    {
        document.getElementById("a24").src="yup.gif"; if((flag==1)&&(once[2][4]==1)) {score+=(100/counter); once[2][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a24").src="oops.jpg"; if((flag==1)&&(once[2][4]==1)) {score-=(110/counter); once[2][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
}

function clicked30()
{
    if(img[3][0]==ref)
    {
        document.getElementById("a30").src="yup.gif"; if((flag==1)&&(once[3][0]==1)) {score+=(100/counter); once[3][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a30").src="oops.jpg"; if((flag==1)&&(once[3][0]==1)) {score-=(110/counter); once[3][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked31()
{
    if(img[3][1]==ref)
    {
        document.getElementById("a31").src="yup.gif"; if((flag==1)&&(once[3][1]==1)) {score+=(100/counter); once[3][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a31").src="oops.jpg"; if((flag==1)&&(once[3][1]==1)) {score-=(110/counter); once[3][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked32()
{
    if(img[3][2]==ref)
    {
        document.getElementById("a32").src="yup.gif"; if((flag==1)&&(once[3][2]==1)) {score+=(100/counter); once[3][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a32").src="oops.jpg"; if((flag==1)&&(once[3][2]==1)) {score-=(110/counter); once[3][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked33()
{
    if(img[3][3]==ref)
    {
        document.getElementById("a33").src="yup.gif"; if((flag==1)&&(once[3][3]==1)) {score+=(100/counter); once[3][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a33").src="oops.jpg"; if((flag==1)&&(once[3][3]==1)) {score-=(110/counter); once[3][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked34()
{
    if(img[3][4]==ref)
    {
        document.getElementById("a34").src="yup.gif"; if((flag==1)&&(once[3][4]==1)) {score+=(100/counter); once[3][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a34").src="oops.jpg"; if((flag==1)&&(once[3][4]==1)) {score-=(110/counter); once[3][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
}

function clicked40()
{
    if(img[4][0]==ref)
    {
        document.getElementById("a40").src="yup.gif"; if((flag==1)&&(once[4][0]==1)) {score+=(100/counter); once[4][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a40").src="oops.jpg"; if((flag==1)&&(once[4][0]==1)) {score-=(110/counter); once[4][0]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked41()
{
    if(img[4][1]==ref)
    {
        document.getElementById("a41").src="yup.gif"; if((flag==1)&&(once[4][1]==1)) {score+=(100/counter); once[4][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a41").src="oops.jpg"; if((flag==1)&&(once[4][1]==1)) {score-=(110/counter); once[4][1]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked42()
{
    if(img[4][2]==ref)
    {
        document.getElementById("a42").src="yup.gif"; if((flag==1)&&(once[4][2]==1)) {score+=(100/counter); once[4][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a42").src="oops.jpg"; if((flag==1)&&(once[4][2]==1)) {score-=(110/counter); once[4][2]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked43()
{
    if(img[4][3]==ref)
    {
        document.getElementById("a43").src="yup.gif"; if((flag==1)&&(once[4][3]==1)) {score+=(100/counter); once[4][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a43").src="oops.jpg"; if((flag==1)&&(once[4][3]==1)) {score-=(110/counter); once[4][3]=0;}
        document.getElementById("score").innerHTML=score;
    }
}
function clicked44()
{
    if(img[4][4]==ref)
    {
        document.getElementById("a44").src="yup.gif"; if((flag==1)&&(once[4][4]==1)) {score+=(100/counter); once[4][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
    else
    {
        document.getElementById("a44").src="oops.jpg"; if((flag==1)&&(once[4][4]==1)) {score-=(110/counter); once[4][4]=0;}
        document.getElementById("score").innerHTML=score;
    }
}

function gameover()
{
    flag=0;
    document.getElementById("score").innerHTML=Math.round(score);
    document.getElementById("reference").src="0.jpg"; 
    document.getElementById("rcard").classList.remove("xflipped");
    for(i=0;i<5;i++)
    {
        for(j=0;j<5;j++)
        {
            document.getElementById("card"+i+j).classList.remove("flipped");
            document.getElementById("card"+i+j).style.pointerEvents="none";
            document.getElementById("a"+i+j).src="0.jpg";
        }
    }
    document.getElementById("button").style.pointerEvents="auto";
}
