<script>
	import Painting from './components/Painting.svelte';
	import Navbar from './components/Navbar.svelte';
	import Contact from './components/Contact.svelte';
	
	// Replace these with your painting data
	const paintings = [
	  {
		title: 'Ethereal',
		subtitle: 'You Are The Sky',
		imageUrl: '/images/Ethereal.jpg',
		description: '18x24, Oil on Wood Panel',
		price: '$600'
	  },
	  {
		title: 'Missing Morality',
		subtitle: '',
		imageUrl: 'images/MissingMyMorality.jpg',
		description: '18x24, Oil on Wood Panel',
		price: '$600'
	  },
	  {
		title: 'Wonderland',
		subtitle: '',
		imageUrl: 'images/WonderLand.jpg',
		description: '9x12, Oil on Wood Panel',
		price: '$300'
	  },
	  {
		title: 'In Her Moment',
		subtitle: '',
		imageUrl: 'images/InHerMoment.jpg',
		description: '12x24, Oil on Wood Panel',
		price: '$450'
	  },
	  {
		title: 'Our Horizon Is Missing',
		subtitle: '',
		imageUrl: 'images/OurHorizonIsMissing.jpg',
		description: '12x24, Oil on Wood Panel',
		price: '$450'
	  },
	  {
		title: 'A Chimes Whistle',
		subtitle: 'From a Dream',
		imageUrl: 'images/ChimesWhistle.jpg',
		description: '12x24, Oil on Wood Panel',
		price: '$450'
	  },
	  {
		title: 'Commission',
		subtitle: '',
		imageUrl: 'images/Commission.png',
		description: 'Your Inspiration',
		price: 'Contact For Inquiry'
	  },
	  // Add more paintings as needed
	];

	export let menu = 1;

	// VERY LIKELY TO REDO THE WHOLE ROUTING AND EVERYTHING. ITS JUST A MESS AND NOT SUSTAINABLE LONG TERM.
</script>

<Navbar />

<div class="navbar">
	<a href="/" on:click|preventDefault={() => (menu = 1)}>Gallery</a>
	<!--<a href="/" on:click|preventDefault={() => (menu = 2)}>Gallery</a>-->
	<a href="/" on:click|preventDefault={() => (menu = 3)}>Contact</a>
</div>

{#if menu === 1}
<div class="whole-container">
	<main class="container">
		<div class="main-container">
			<div style="margin-top: 80px;">
			{#each paintings as painting}
				<Painting {...painting} />
			{/each}
			</div>
			<br>
		</div>
	</main>
</div>
{:else if menu === 3}
<Contact />
{/if}
