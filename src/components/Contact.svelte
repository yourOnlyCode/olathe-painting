<script>
  const handleSubmit = async data => {
    const formData = new FormData(data.currentTarget)

    console.log(formData.get('name'))
    console.log(formData.get('email'))
    console.log(formData.get('message'))
  }
</script>

<!---
<form class="form-container" on:submit|preventDefault={handleSubmit}>
  <label for="name">
    <span>Name</span>
  </label>
  <input
    type="text"
    name="name"
    aria-label="name"
    placeholder="Enter your name"
    required
  />
  <label for="email">
    <span>Email</span>
  </label>
  <input
    type="email"
    name="email"
    aria-label="email"
    placeholder="bill@hotmail.com"
    required
  />
  <label for="message">
    <span>Message</span>
  </label>
  <textarea
    name="message"
    aria-label="name"
    placeholder="Message"
    required
    rows="3"
  />
  <input type="submit" />
</form>
-->

<div class="form-container">
  <a class="contact-icon" href="mailto:mattyolathe@gmail.com?subject=Inquiry on Artwork">
    <img style="width: 80px;" alt="email" src="https://cdn-icons-png.flaticon.com/512/542/542638.png" />
  </a>
  <a class="contact-icon" href="https://www.instagram.com/mattyolathe/" target="_blank">
    <img style="width: 80px;" alt="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" />
  </a>
</div>