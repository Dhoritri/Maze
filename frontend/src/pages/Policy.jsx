
const Policy = () => {
  return (
    <div className="bg-[#191919] text-white min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-semibold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          Customers are required to read the terms and conditions before making any purchases with us. 
          If you have any questions please do not hesitate to call us at xxxxxxxxxx.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">General</h2>
        <p className="mb-4">
          These Terms and Conditions apply to all users of Maze, including browsers, customers, merchants, 
          and contributors of content. By using our website, you represent that you are at least the age of 18 or have 
          the consent of a legal guardian.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Products and Pricing</h2>
        <ul className="list-disc ml-5 mb-4">
          <li>All products listed on our website are subject to availability. We reserve the right to limit quantities of any product or service.</li>
          <li>Prices are subject to change without prior notice. Maze is not responsible for pricing errors but will notify customers promptly of any discrepancies.</li>
          <li>Customers can enquire about any promotional offers that are present to know the end date, discount and description.</li>
          <li>Colours and product images are displayed as accurately as possible, but we cannot guarantee perfect colour representation due to varying screen settings.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Orders and Payment</h2>
        <p className="mb-4">
          By placing an order, you agree to provide current, complete, and accurate purchase and account information.
        </p>
        <p className="mb-4">We accept the following payment methods:</p>
        <ul className="list-disc ml-5 mb-4">
          <li>Bikash</li>
          <li>Cash in hand</li>
        </ul>
        <p>Maze reserves the right to cancel or refuse any order for any reason, including suspected fraud or unauthorized transactions.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Shipping and Delivery</h2>
        {/* Additional sections go here following the same pattern */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including logos, images, text, and graphics, is the property of [Your Store Name] or its licensors and is protected by copyright laws.
          You may not reproduce, distribute, or exploit any part of the website without express written permission.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Privacy Policy</h2>
        <p className="mb-4">
          We are committed to protecting your privacy. Please review our [Privacy Policy link] to understand how we collect, use, and safeguard your information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
        <p className="mb-4">If you have any questions, please contact us at:</p>
        <ul className="list-disc ml-5 mb-4">
          <li>Email: xxxxxx@mazewears.com</li>
          <li>Phone: xxxxxxxxx</li>
          <li>Address: xxxxxxxxx</li>
        </ul>
        <p className="mb-4">Operating times:</p>
        <ul className="list-disc ml-5">
          <li>Weekdays - 08:00 AM - 10:00 PM</li>
          <li>Weekends - 10:00 AM - 5:00 PM</li>
        </ul>
        <p className="mt-6">Thank you for choosing Maze!</p>
      </div>
    </div>
  )
}

export default Policy
