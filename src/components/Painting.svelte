<script>
    export let title;
    export let subtitle;
    export let imageUrl;
    export let price;
    export let description;
</script>

<div class="painting-container drop-shadow-lg">
    <h2 class="text-xl font-semibold mb-2" style="margin-bottom: 10px;">{title}</h2>
    <h4 class="font-regular" style="margin-top: -15px;">{subtitle}</h4>
    <img src={imageUrl} alt={title} style="width: 300px;"/>
    <div>{price}</div>
    <div>{description}</div>
</div>