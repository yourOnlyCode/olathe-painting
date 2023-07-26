export const post = async ({ request }) => {
    const fd = await request.formData()
  
    const name = fd.get('name')
    const email = fd.get('email')
    const message = fd.get('message')
  
    console.log('name:', name)
    console.log('email:', email)
    console.log('message:', message)
  
    return {
      status: 200,
      body: { message: 'success' },
    }
  }