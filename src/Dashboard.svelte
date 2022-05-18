<script>
    export let getReadyBG;
    export let hasNext;
</script>


<div class="wrapper" class:getReadyBG > 
    <div class="bod">
        <div class="side">
            
            <div class="left"><slot name="left"></slot></div>
            <div class="right"><slot name="right"></slot></div>
        </div>
        <div class="name"><slot name="name">Upside down bugs</slot></div>
        <div class="reps"><slot name="reps">1 / 10</slot></div>

        <div class="timer"><slot name="timer">10</slot></div>
        <div class="go-rest"><slot name="go-rest">go!</slot></div>
    </div>
    <div class="footer">
        <div class="next" class:hasNext><slot name="next">McGill curls</slot></div>
    </div>
</div>

<style>
    .wrapper {
        font-family:'Terminal Grotesque', sans-serif;
        font-size:16px;
        width: 360px;
        height: 640px;
        background:#C1F6F0;
        display:flex;
        flex-direction:column;
        gap:4px;
        align-items:center;
    
        
    }
    .getReadyBG {
        background:#E9F0F0; 
    }

    .hasNext::before {
        content:"Next: ";
    }
    .wrapper .bod {
        display:flex;
        flex-direction:column;
        /* justify-content:center; */
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
        font-size: 3em;
        padding-top:2.25em;
        
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
        font-size:6.75em;
        padding:0;
        font-family: 'Compagnon', sans-serif;
        font-weight:600;
        margin-top:-.2em;
    }
    .go-rest {
        padding-top:3.5em;
    }
    .reps {
        font-size: 1.5em;
        font-family: 'Compagnon', sans-serif;
        font-weight:600;
        height:1.5em;
        padding-top:.7em;
    }
    .next {
        width:100%;
        padding: 1em 0;
    }
</style>