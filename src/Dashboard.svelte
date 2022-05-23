<script>
    export let getReadyBG;
    export let leftBG;
    export let rightBG;
    export let hasNext;
    
</script>


<div class="wrapper" class:getReadyBG class:leftBG class:rightBG > 
    
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

    <slot name="timeBG"><div class="timeBG"></div></slot>
    <div class="dogLine"></div>
</div>

<style>
    .wrapper {
        position:relative;
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
    
    .dogLine {
        position:absolute;
        top:81%;
        height:8px;
        width:80%;
        background:#00000054;
        border-radius: 5px;
        z-index:1;
    }
    .getReadyBG {
        background:#E9F0F0; 
    }

    .leftBG {
        background: #F4FBD6;
    }

    .rightBG {
        background: #FBD6D6;
    }
    .hasNext::before {
        content:"Next: ";
    }
    .wrapper .bod {
        flex-direction:column;
        width:100%;
        /* justify-content:center; */
    }
    .wrapper .footer {
        flex-direction:row;
        align-items:flex-end;
        height:1em;
    }


    /* .wrapper > div > div {
        border:1px white solid;
        
    } */
    .wrapper .bod, .wrapper .footer {
        flex-grow:1;
        /* border:1px white solid; */
        text-align:center;
        position:relative;
        z-index:2;
        display:flex;

        
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
        text-align:left;
        flex-grow:1;
        height:1em;
    }
    .side .right {
        text-align:right;
        flex-grow:1;
        height:1em;
    }
    .timer {
        font-size:6.75em;
        padding:0;
        font-family: 'Compagnon', sans-serif;
        font-weight:600;
        margin-top:-.15em;
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
        padding: .5em 0;
        font-size:1.5em;
    }
</style>