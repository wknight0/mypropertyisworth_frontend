<?php
$con = mysqli_connect('WITHHELD', 'WITHHELD', 'WITHHELD','WITHHELD');

$code = $_POST['code'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$address = $_POST['ship-address'];
$unitnum = $_POST['address2'];
$suburb = $_POST['state'];
$towncity = $_POST['locality'];
$postcode = $_POST['postcode'];
$ownertenanted = $_POST['ownertenanted'];
$propertycondition = $_POST['propertycondition'];
$seaviews = $_POST['seaviews'];
$cityviews = $_POST['cityviews'];
$ruralviews = $_POST['ruralviews'];
$landscapedgardens = $_POST['landscapedgardens'];
$indoorfire = $_POST['indoorfire'];
$outdoorfire = $_POST['outdoorfire'];
$alarm = $_POST['alarm'];
$heatpump = $_POST['heatpump'];
$heatrecoverysys = $_POST['heatrecoverysys'];
$tenniscourt = $_POST['tenniscourt'];
$swimmingpool = $_POST['swimmingpool'];
$spapool = $_POST['spapool'];
$sauna = $_POST['sauna'];
$bbqarea = $_POST['bbqarea'];
$bedrooms = $_POST['bedrooms'];
$bathrooms = $_POST['bathrooms'];
$seperatetoilets = $_POST['seperatetoilets'];
$parking = $_POST['parking'];
$propertytype = $_POST['propertytype'];
$numberoflevels = $_POST['numberoflevels'];
$ageofproperty = $_POST['ageofproperty'];
$sizeofsection = $_POST['sizeofsection'];
$estimatedvalue = $_POST['estimatedvalue'];
$selltimeframe = $_POST['selltimeframe'];

$sql = "INSERT INTO `WITHHELD` (`code`, `p_fname`, `p_lname`, `p_email`, `p_mobile`, `p_address`, `p_unitnum`, `p_suburb`, `p_towncity`, `p_postcode`, 
`p_ownertenanted`, `p_bedrooms`, `p_bathrooms`, `p_seperatetoilets`, `p_parking`, `p_propertytype`, `p_numberoflevels`, `p_ageofproperty`, `p_sizeofsection`,
`p_estimatedvalue`, `p_selltimeframe`, `p_propertycondition`, `p_seaviews`, `p_cityviews`, `p_ruralviews`, `p_landscapedgardens`,
`p_indoorfire`, `p_outdoorfire`, `p_alarm`, `p_heatpump`, `p_heatrecoverysys`, `p_tenniscourt`, `p_swimmingpool`, `p_spapool`, `p_sauna`, `p_bbqarea`)
VALUES ('$code', '$fname', '$lname', '$email', '$mobile', '$address', '$unitnum', '$suburb', '$towncity', '$postcode', 
'$ownertenanted', '$bedrooms', '$bathrooms', '$seperatetoilets', '$parking', '$propertytype', '$numberoflevels', '$ageofproperty', '$sizeofsection',
'$estimatedvalue', '$selltimeframe', '$propertycondition', '$seaviews', '$cityviews', '$ruralviews', '$landscapedgardens',
'$indoorfire', '$outdoorfire', '$alarm', '$heatpump', '$heatrecoverysys', '$tenniscourt', '$swimmingpool', '$spapool', '$sauna', '$bbqarea')";

$rs = mysqli_query($con, $sql);

exec('/WITHHELD/php -f /WITHHELD/appraisalScript.php');
?>