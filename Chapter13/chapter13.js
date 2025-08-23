const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const visualizer = document.querySelector(".visualizer");

const audioContext = new AudioContext()
const audio = new Audio("savage-love.mp3");
const source = audioContext.createMediaElementSource(audio);

const volume = audioContext.createGain();
volume.gain.value = 0.2;

source.connect(volume);
volume.connect(audioContext.destination);

const analyser = audioContext.createAnalyser();
source.connect(analyser)

// fft = Fast Fourier Transform
analyser.fftSize = 256;

//frequencyBinCount is the number of data points used for the frequency domain (half of fftSize).
const bufferLength = analyser.frequencyBinCount;

//Uint8Array is created to store the frequency data for visualization.
const dataArray = new Uint8Array(bufferLength)

// canvas API
const canvas = document.createElement("canvas");
canvas.width = visualizer.clientWidth;
canvas.height = visualizer.clientHeight;
visualizer.appendChild(canvas);

const canvasCtx = canvas.getContext("2d");

function draw(){
    // request animation looping
    requestAnimationFrame(draw);

    // get frequency data
    analyser.getByteFrequencyData(dataArray)

    canvasCtx.fillStyle = "rgba(0,0,0,0.2)";
    canvasCtx.fillRect(0,0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5
    let barHeight;
    let x = 0;

    for (let i=0; i<bufferLength; i++){
        barHeight = dataArray[i];

        const r = barHeight + (25*(i/bufferLength));
        const g = 250*(i/bufferLength);
        const b = 50;

        canvasCtx.fillStyle = `rgb(${r},${g},${b})`;
        canvasCtx.fillRect(x, canvas.height - barHeight/2, barWidth, barHeight/2);

        x+= barWidth+1;
    }

}

playBtn.addEventListener("click", ()=>{
    if(audioContext.state === "suspended"){
        audioContext.resume();
    }
    audio.play();
    // call canvas api
    draw();
});

pauseBtn.addEventListener("click", ()=>{
    audio.pause();
});


stopBtn.addEventListener("click", ()=>{
    audio.pause();
    audio.currentTime = 0;
    canvasCtx.clearRect(0,0, canvas.width, canvas.height);
});