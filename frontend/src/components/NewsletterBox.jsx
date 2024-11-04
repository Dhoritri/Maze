
const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-400">Subscribe to get the latest updates about the latest products!</p>
      <p className="text-gray-200 mt-3"> Enter your email address to get notified about new products and promotions.</p>
      <form onSubmit={onSubmitHandler} className="bg-white w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none " type="email" placeholder="Enter your Email" />
        <button type="submit" className="bg-black hover:bg-[#ffc4c4] text-white text-xs py-4 px-10">Subscribe</button>
      </form>


    </div>
  )
}

export default NewsletterBox
