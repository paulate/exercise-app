<div id="timerUI">
    <div><span class="numFont">00:00</span></div><div><span class="numFont">09:99</span><span class="x">X</span></div>
</div>
<div class="timerBar paused"></div>

<style>
#timerUI {
    position:relative;
    z-index:2;
    display:flex;
    flex-direction:row;
    height:20px;
    justify-content: space-between;
    mix-blend-mode:difference;
}

.timerBar {
        position:absolute;
        z-index:1;
        width:30%;
        background:black;
        height:20px;
        border-radius: 0 5px 5px 0;
    }
  
    #timerUI div {
        color:white;
        mix-blend-mode: difference;
        display:flex;
        flex-direction:row;
        gap: 4px;
    }

   
.x {
        padding:1px;
        font-weight:bold;
        
    }
</style>