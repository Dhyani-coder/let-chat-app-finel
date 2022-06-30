// https://teachablemachine.withgoogle.com/models/9r_5KZYMA/

Webcam.set({
    width : 350,
    height : 300,
    image_format : "jpeg",
    jpeg_quality : 90    
});

my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function CAPTURE(){
    Webcam.snap(function(snap_shot){

        document.getElementById("result").innerHTML ="<img src= '" + snap_shot + "' id = 'RESULT'>";

    })

    
}

console.log("ML5 Version",ml5.version);

my_classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9r_5KZYMA/model.json",my_model_loaded);

function my_model_loaded(){

    console.log("model is loaded");

}

function IDENTIFY(){

    MY_IMG = document.getElementById("RESULT");

    my_classifier.classify(MY_IMG,got_results );
    
}

function got_results(error, results){

    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("OBJECT").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
    }

}