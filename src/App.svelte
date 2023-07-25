<script>
	import Painting from './components/Painting.svelte';
  
	// Replace these with your painting data
	const paintings = [
	  {
		title: 'Ethereal',
		subtitle: 'You Are The Sky',
		imageUrl: 'path/to/painting1.jpg',
		price: '$800',
		description: 'Oil on Wood Panel'
	  },
	  {
		title: 'Ethereal 2',
		subtitle: 'You Are The Sky',
		imageUrl: 'path/to/painting1.jpg',
		price: '$800',
		description: 'Oil on Wood Panel'
	  }
	  // Add more paintings as needed
	];
</script>
  
<main class="container mx-auto py-8">
	<h1 class="text-3xl font-semibold mb-4">My Paintings</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	  {#each paintings as painting}
		<Painting {...painting} />
	  {/each}
	</div>
</main>
  
<style>
	/* Add any custom styling here or modify existing Tailwind CSS classes */ 
	main {
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
  
