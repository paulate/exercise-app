<script>
    export let side;
</script>
<div id="sideUI" class="{side}">
    {#if side == "left"} 
        <img alt ="left" src="img/armR1.gif"/>
    {:else if side == "right"}
        <img alt ="right" src="img/armL.gif"/>
    {/if}
</div>

<style>
#sideUI {
    height:11em;
    display:flex; 
    flex-direction:row;
    position:relative;
    z-index:3;
}

:global(.left) {
    justify-content:left;
}
:global(.right) {
    justify-content:right;
}

#sideUI img {
    height:100%;
    width:auto;
}

</style>