<script>
	import Header from '../../components/Header.svelte';
	import Bottom from '../../components/Bottom.svelte';

	const persons = ['Thomas', 'Idriss', 'Aman','Ada','Kardouch','Chris','Nuket','Zoe','Yann Proust','La Grenouille'];
    const colors = ['#36da16','#edc514','#ed145b','yellow'];
    let person = persons[Math.floor(Math.random() * persons.length)];
    let color = colors[Math.floor(Math.random() * colors.length)];

</script>
<style>
div{
	position: relative;
}
</style>
<svelte:head>
	<title>Sapper project template</title>
	<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@100,300,400,700,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
	<meta charset="UTF-8">
	<meta name="description" content="Mepa Yohann's personal website">
	<meta name="keywords" content="Yohann mepa,yohann,mepa,Python developer,threejs">
	<meta name="author" content="Yohann Mepa">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>&#60;&#9829;PekoChan&#9829;&#47;&#62;</title>
</svelte:head>
<Header {person} {color}/>
<Bottom {color}/>
