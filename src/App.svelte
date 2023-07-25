<script>
	import Painting from './components/Painting.svelte';
	import Navbar from './components/Navbar.svelte';

	export let menu = 1;
	
	// Replace these with your painting data
	const paintings = [
	  {
		title: 'Ethereal',
		subtitle: 'You Are The Sky',
		imageUrl: '/images/Ethereal.jpg',
		price: '$800',
		description: 'Oil on Wood Panel'
	  },
	  {
		title: 'Wonderland',
		subtitle: '',
		imageUrl: 'images/WonderLand.jpg',
		price: '$800',
		description: 'Oil on Wood Panel'
	  }
	  // Add more paintings as needed
	];

	// VERY LIKELY TO REDO THE WHOLE ROUTING AND EVERYTHING. ITS JUST A MESS AND NOT SUSTAINABLE LONG TERM.
</script>

<div class="whole-container">
	<div>VERY LIKELY TO REDO THE WHOLE ROUTING AND EVERYTHING. ITS JUST A MESS AND NOT SUSTAINABLE LONG TERM.</div>

	<div id="menu">
		<a class="menu-item" href="/" on:click|preventDefault={() => (menu = 1)}>Home</a>
		<a class="menu-item" href="/" on:click|preventDefault={() => (menu = 2)}>Gallery</a>
		<a class="menu-item" href="/" on:click|preventDefault={() => (menu = 3)}>Contact</a>
	</div>

	{#if menu === 1}
	<main class="container">
		<div class="main-container">
			<h1 class="header drop-shadow-lg">Matty Olathe</h1>
			<div>
			{#each paintings as painting}
				<Painting {...painting} />
			{/each}
			</div>
			<br>
		</div>
	</main>
	
	{:else if menu === 2}
	<div>no</div>
	{:else}
	<h1>
		Page Not Found
	</h1>
	{/if}
</div>
  
