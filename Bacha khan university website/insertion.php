<?php 
require("includes/conn.php");
?>

<?php 
/////////////////// Student Insertion //////
if(isset($_POST['insert']) && $_POST['insert'] == "Student"){
$studentName = $_POST['stname'];
$stFatherName = $_POST['fname'];
$stDept = $_POST['dept'];
$stAddress = $_POST['address'];
$insertQuery = "INSERT INTO student (st_Name, st_FName, st_Dept, st_Address) VALUES ('$studentName', '$stFatherName', '$stDept', '$stAddress')";
$insertStudent = mysql_query($insertQuery);
if($insertStudent){
header("location:index.php?stud_insertion=successful");
exit();
}
else {
header("location:index.php?stud_insertion=unsuccessful");
exit();
}
}
////////////////////////////////////////////

?>