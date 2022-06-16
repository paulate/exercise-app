<div id="controlsUI"><div class="prev">&lt;</div><div class="play"><img src="img/play.svg" /></div><div class="next">&gt;</div></div>

<style>

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

    #controlsUI {
        margin-top:-2em;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items:center;
    }
</style>