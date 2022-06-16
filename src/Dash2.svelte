<script>
    import TimerUI from './TimerUI.svelte';
    import SideUI from './SideUI.svelte';
    import ContentUI from './ContentUI.svelte';
    import ControlsUI from './ControlsUI.svelte';
    import DogUI from './DogUI.svelte';
    import NextUI from './NextUI.svelte';

</script>

<main> 
    <div id="top">
        <TimerUI />
        <SideUI /> 
    </div>
    <ContentUI />
    <ControlsUI />
    <div id="bottom">
        <DogUI />
        <NextUI />
    </div>
</main>

<style>

 
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

   

    
</style>