<script>
    export let dogType;
</script>
<div id="dogUI" class="{dogType == "end" ? dogType : "notEnd"}">
    {#if dogType=="intro" || dogType=="rest" || dogType =="exercise-rest"}
        <img alt="rest" src="img/dog_rest.gif"/>
    {:else if (dogType=="exercise") || (dogType=="exercise-left") || (dogType == "exercise-right") }
        <img alt="go" src="img/dog_work.gif"/>
    {:else if dogType=="end"}
        <img alt="done" src="img/finished.gif"/>
    {/if}
</div>

<style>
#dogUI {
    align-self:center;
    position:relative;
    z-index:3;
}

:global(.notEnd) {
    overflow:hidden;
    height:12em;
    margin-bottom:-2em;
}
:global(.end) {
    margin-bottom:2.5em;
    height:22em;
    overflow:visible;
}
#dogUI img {
    height:120%;
    width:auto;
}
</style>
