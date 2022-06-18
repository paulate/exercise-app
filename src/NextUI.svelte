<script>
    export let nextTitle;
    export let isPlaying;
    export let isEnded;
</script>
<div id="nextUI" class:hasNext={nextTitle ? true : false} class:paused={!(isPlaying || isEnded)} class:isEnded>
        {nextTitle}
</div>

<style>
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
        height:1em;
}

div {
    background:#fff;
}

.hasNext::before {
    content:"Next: ";
}
</style>