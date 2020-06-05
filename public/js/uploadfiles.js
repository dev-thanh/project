//Javascript part
//file_input is a file input id
var formData = new FormData();
var filesLength=document.getElementById('file_input').files.length;
for(var i=0;i<filesLength;i++){
	formData.append("file[]", document.getElementById('file_input').files[i]);
}
$.ajax({
   url: 'upload.php',
   type: 'POST',
   data: formData,
   contentType: false,
   cache: false,
   processData: false,
   success: function (html) {
   
  }
});