<script>

    
</script>



<main>
    
    <div id="top">
        <!-- <TimerUI /> -->
    
        <div id="timerUI">
            <div><span class="numFont">00:00</span></div><div><span class="numFont">09:99</span><span class="x">X</span></div>
        </div>
        <div class="timerBar paused"></div>

        <!-- <SideUI />  -->
        <div id="sideUI" class="left">
            <img src="img/armR1.gif" />
        </div>

    </div>
    <!-- <ContentUI /> -->
    <div id="contentUI" class="paused"> <div class="title">Forward Fold</div><div class="numFont reps">1/2</div><div class="numFont timeContent">00:10</div> </div>
    <!-- <ControlsUI /> -->
    <div id="controlsUI"><div class="prev">&lt;</div><div class="play"><img src="img/play.svg" /></div><div class="next">&gt;</div></div>
    <div id="bottom">
        <!-- <DogUI /> -->
        <div id="dogUI"><img src="img/dog_rest.gif"/></div>
        <!-- <NextUI /> -->
        <div id="nextUI" class="hasNext paused">IT Band Stretch</div>
    </div>
</main>

<style>
    .paused 
    {
        color:rgba(0, 0, 0, 0.37);
        background: rgba(0, 0, 0, 0.1) !important;
    }
    .play {
        border-radius: 10px;
        border-width: 4px 6px 6px 4px;
        border-style: solid;
        border-color: #000000;
        background-color:#FFC46B;
        width:1.5em;
        height:1.5em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-size:2.1em;
        font-weight:bold;
    }

    .prev, .next {
        border-radius: 10px;
        border-width: 4px 6px 6px 4px;
        border-style: solid;
        border-color: #000000;
        background-color:#FFC46B;
        width:1em;
        height:1em;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-size:2.1em;
        font-weight:bold;
    }
    #top {
        position:absolute;
        top:0;
        width:100%;
        display:flex; 
        flex-direction:column;
    }
    #bottom {
        position:absolute;
        bottom:0;
        width:100%;
        display:flex; 
        flex-direction:column;
        
    }
    .numFont {
        font-family: 'compagnon', sans-serif;
        line-height:.9em;
    }
    main {
        position:relative;
        width: 100vw;
		height: 100vh;
        font-family:'terminal_grotesque', sans-serif;
        font-size:18px;
        display:flex;
        flex-direction:column;
        background:#fff;
        justify-content:center;
    }

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
    
    #sideUI {
        height:11em;
        display:flex; 
        flex-direction:row;
        position:relative;
        z-index:3;
    }

    .left {
        justify-content:left;
    }
    .right {
        justify-content:right;
    }
    #sideUI img {
        height:100%;
        width:auto;
    }
    #dogUI {
        align-self:center;
        height:14em;
        margin-bottom:-2em;
        position:relative;
        z-index:3;
        overflow:hidden;
        height:12em;
    }
    #dogUI img {
        height:120%;
        width:auto;
    }
    #contentUI {
        border-radius: 10px;
        border-width: 4px 6px 6px 4px;
        border-style: solid;
        border-color: #000000;
        margin-left:1em;
        margin-right:1em;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:4em;
        padding-bottom:6em;
        margin-top:-6em;
     
    }

    #nextUI {
        font-size:1.3em;
        padding-top:1.3em;
        padding-bottom:.3em;
        border-radius: 10px 10px 0px 0px;
        border-width: 4px 6px 0px 4px;
        border-style: solid;
        border-color: #000000;
        margin-left:1em;
        margin-right:1em;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:4px;

    }
    .title {
        font-size:2.7em;
        
    }
    .reps {
        font-size:1.3em;
    }
    .timeContent {
        font-size: 5.5em;
        line-height:.5em;
    }
    #controlsUI {
        margin-top:-2em;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items:center;
    }

    .hasNext::before {
        content:"Next: ";
    }
</style>