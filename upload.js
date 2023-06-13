console.log("upload Script Loaded");

var btn = document.getElementById("Browse-input");

var submit_btn = document.getElementById("butoon-submit");

// btn.onclick = function(){
//     alert("browse is selected")
// }
var resumeFile = ""

btn.addEventListener('input', function(event){
    
    resumeFile = event.target.value;
    console.log(resumeFile + "selected");

})


submit_btn.onclick = function(){
    if (resumeFile != ""){
        var file_path = resumeFile
        console.log("Uploading file" +":"+ resumeFile)
        // var file = new File (file_path);
        var ftp = new FtpConnection("ftp://72.181.173.108:22") ;
        ftp.login("vedanta", "vedanta");
        ftp.cd("ResumeDB")
        ftp.put(file_path,"test_file.pdf") ;
        ftp.close() ;
        file.close() ;
    }
    console.log(btn)
}

// function getTodoListFromBackend(){
//     var http = new XMLHttpRequest();
//     console.log("sending request")
//     http.onreadystatechange = function(){
//         if (this.readyState === 4){
//             if (this.responseText)
//             console.log("Response Received");
//             console.log(JSON.parse(this.responseText))
//         }
//     }
//     http.open('GET','https://jsonplaceholder.typicode.com/users', true);
    
//     http.send();
//     console.log("request is completed")
// }

// getTodoListFromBackend()

if (window.FormData !== undefined) {
    var formData = new FormData();
    let response = await fetch(path); // give local file path stored at appdata folder
    let data = await response.blob();          
    formData.append("file", new File([data], "YourfileName"))
    let _url = "api/webservice url";
    $.ajax({
      type: "POST",
      url: _url,
      contentType: false,
      processData: false,
      data: formData,
      success: function (result) {              
        console.log(result);
      },
      error: function (xhr, status, p3, p4) {                  
        var err = "Error " + " " + status + " " + p3 + " " + p4;
        if (xhr.responseText && xhr.responseText[0] == "{")
          err = JSON.parse(xhr.responseText).Message;
        console.log(err);
      }
    });
  } else {
    alert("This browser doesn't support HTML5 file uploads!");
  }