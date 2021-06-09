<script>
</script>


<div class="wrapper"> 
    <div class="bod">
        <div class="name"><slot name="name">Upside down bugs</slot></div>
        <div class="side">
            <div class="left">Left</div>
            <div class="right">Right</div>
        </div>
        <div class="timer"><slot name="timer">10</slot></div>
        <div class="go-rest"><slot name="go-rest">go!</slot></div>
        <div class="reps"><slot name="reps">1 / 10</slot></div>
    </div>
    <div class="footer">
        <div class="next">Next: <slot name="next">McGill curls</slot></div>
    </div>
</div>

<style>
    .wrapper {
        font-size:16px;
        width: 360px;
        height: 640px;
        background:lightblue;
        display:flex;
        flex-direction:column;
        gap:4px;
        align-items:center;
    
        
    }
    .wrapper .bod {
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .wrapper .footer {
        display:flex;
        flex-direction:row;
        align-items:flex-end;
    }


    /* .wrapper > div > div {
        border:1px white solid;
        
    } */
    .wrapper > div {
        flex-grow:1;
        /* border:1px white solid; */
        width:90%;
        text-align:center;

        
    }

    .name {
        font-size: 2.5em;
        padding-top:2.5em;
        
    }
    .side {
        padding:1em 0;
        display:flex;
        flex-direction:row;
    }
    .side .left {
        text-align:center;
        flex-grow:1;
    }
    .side .right {
        text-align:center;
        flex-grow:1;
    }
    .timer {
        font-size:10em;
    }
    .go-rest {
        padding: 1em 0;
    }
    .reps {
        font-size: 2em;
    }
    .next {
        width:100%;
        padding: 1em 0;
    }
</style>