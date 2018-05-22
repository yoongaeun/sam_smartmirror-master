var enabled = false; // A flag to know when start or stop the camera
var WebCamera = require("webcamjs"); // Use require to add webcamjs

function startwebcam() {
    if (!enabled) { // Start the camera !
        enabled = true;
        WebCamera.attach('#camdemo');
        console.log("The camera has been started");
    } else { // Disable the camera !
        enabled = false;
        WebCamera.reset();
        console.log("The camera has been disabled");
    }
};
startwebcam();

/*function savephoto() {
    console.log("Save button clicked");
    if (enabled) {
        WebCamera.snap(function (data_uri) {
            var now = new Date();
            var fileName = __dirname + '/UserFaces/' + now.getFullYear() + now.getMonth() + now.getDate() + "_" + now.getHours() + now.getMinutes() + now.getSeconds() + '.png';
            console.log(fileName);

            var imageBuffer = processBase64Image(data_uri);

            try {
                fs.mkdirSync('UserFaces');
            } catch (e) {
                if (e.code != 'EEXIST') throw e; // 존재할경우 패스처리함. 
            }

            fs.writeFile(fileName, imageBuffer.data, function (err) {
                if (err) {
                    console.log("Cannot save the file : time to cry !");
                } else {
                    console.log("Image saved succesfully");
                    document.getElementById("preview").setAttribute("src", fileName);
                }
            });

        });
    } else {
        console.log("Please enable the camera first to take the snapshot !");
    }
}*/