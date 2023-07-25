<script>
    export let title;
    export let subtitle;
    export let imageUrl;
    export let price;
    export let description;
</script>

<div class="border rounded-lg p-4">
    <h2 class="text-xl font-semibold mb-2">{title}</h2>
    <h4 class="font-regular" style="margin-top: -25px;">{subtitle}</h4>
    <img src={imageUrl} alt={title} class="w-full"/>
    <div>{price}</div>
    <div>{description}</div>
</div>