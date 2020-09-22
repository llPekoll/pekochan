<script>
    export let person;
    export let color;
</script>
<style>
    h1{
        font-style: normal;
        color:white;
        font-family: Poppins;
        font-weight: 100;
        animation-name: title;
        animation-duration: 2s;
        position: relative;
    }
    span {
        color: var(--theme-color);
        font-weight: 700;
        font-style: italic;
    }
    div{
        background-color: rgba(0,0,0,0.7);
        width: 100%;
    }
    @keyframes title {
    from {left: -1000px;}
    to {left: 0;}
}

</style>

<div class='float-right mt-2' style="--theme-color: {color}">
    <h1 class='float-right mr-5 mt-2'>Hello, <span>{person}</span>.</h1>
</div>
