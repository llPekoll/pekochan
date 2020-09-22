<script>
    export let color;
    let months = 0;
    let years =1;
    let charIn ="{";
    let charIn2 ="==>";
    let charOut ="}";
    let charOut2 ="<==";
</script>

<style>
div{
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    margin-top:30%;
    color:white;
}
    span {
        color: var(--theme-color);
        font-weight: 700;
        font-style: italic;
    }
</style>
<div class="float-left" style="--theme-color: {color}">
    <h2 >My name is <span >Yohann Mepa</span>,</h2> 
    <h3 >I used to do some 2d/3d animation.</h3>
    <h2 >Now recycled in <span >Python Development</span>,</h2>
    {#if months}
        <h3>for <span >{years}</span> years and <span >{months}</span> months.</h3>
    {:else}
        <h3>for <span >{years}</span> years.</h3>
    {/if}
    <h2>I used to do some AR/VR, Lecturer at University, etc ...</h2>
    <h3>Unity/Unreal, Htc Vive, Hololens stuff, Also, I won 
        <span >Suzzane Award</span> 
        and special Selection to the 
        <span >Annecy Festival</span>.</h3>
    <h2>Now doing mostly 
        <span >Python</span>
        /{charIn}
        <span >Flask</span>, 
        <span >Starlette</span>
        {charOut}, 
        <span >Js</span>
        /<span >Threejs</span>, 
        <span >C#/Unity</span>. Plus some 
        <span >Docker</span>/
        <span >Nginx</span>.</h2>
    <h3> And I used to work for
    <span >Augment</span>, 
    <span >Addsome</span>, 
    <span >Fixstudio</span>, 
    processing datas with python moslty.</h3>
    <h2>  {charIn2}
    <a href="mailto:yoyo.mepa@gmail.com?Subject=Hello from the website" target="_top"> contact me </a>
        {charOut2} </h2>
</div>