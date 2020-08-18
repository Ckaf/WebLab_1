<?php
//запускаем таймер
$time = microtime(true);
//получаем значения
$x = $_GET["x"];
$y = $_GET["y"];
$r = $_GET["r"];
$hit=false;

//переменные для определения находится ли точка в треугольнике
$inTriangle1=(0-$x)*(0-$r/2);
$inTriangle2=-($r/2-0)*(0-$y);
$inTriangle3=($r/2-$x)*($r/2-0)-(0-$r/2)*(0-$y);

if ($x<=$r && $x>=-$r/2){
    //определяем, попадает ли точка в четверть откужности
    if ($y^2+$x^2<=($r/2)^2 && $x<=0) $hit=true;
    //определяем, попадает ли точка в треугольник
    if ($inTriangle1<=0 && $inTriangle2<=0 && $inTriangle3<=0)$hit=true;
    if ($inTriangle1>0 && $inTriangle2>=0 && $inTriangle3>=0)$hit=true;
//    if ($inTriangle1==0 && $inTriangle2==0 && $inTriangle3==0)$hit=true;
    //определяем, попадает ли точка в прямоугольник
    if ($x>=0&&$x<=$r&&$y<=0&&$y>=-$r/2)$hit=true;
}

echo( $hit ? 'true' : 'false') . ','.(microtime(true)-$time).'sec';
