var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  var Textbox = document.getElementById("textbox"); 
  function start()
   { Textbox.innerHTML = "";
   recognition.start();
 } recognition.onresult = function(event) { console.log(event);
     var Content = event.results[0][0].transcript; 
     Textbox.innerHTML = Content; 
     console.log(Content);
      if(Content =="Take my selfie.")
       { console.log("taking selfie --- ");
       speak(); } }

       function speak(){
        var synth = window.speechSynthesis;

        speak_data = "Taking you Selfie in 5 seconds";
        
        //speak_data = document.getElementById("textbox").value;//

        var utterThis = new SpeechSynthesisUtterance(speak_data);
      
        synth.speak(utterThis);
        
        Webcam.attach(camera);
        setTimeout(function() 
        { take_selfie();
           save();
        }, 5000);
       }
       
       camera = document.getElementById("camera");
       Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
       });
       
       function save()
        { link = document.getElementById("link");
        image = document.getElementById("selfie_image").src ;
         link.href = image;
          link.click();
         }


       function take_selfie()
       {
        Webcam.snap(function (data_uri) {
          document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        });
       }

