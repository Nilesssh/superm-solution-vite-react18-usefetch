
const Cancel = () => {

    document.title = "Canceled Transaction";

  setTimeout(function() {
    window.location.replace('https://superm-solution-vite-react18-usefetch.vercel.app/home');
  }, 7000);
    

  return (
    <>
    <title>canceled transaction</title>
  <h1>Unfortunately we are unable to get your request please try again.</h1>
  <p>
    We appreciate your business! If you have any questions, please email
    <a href="mailto:orders@example.com"> contact@gmail.com</a>.
  </p>
  <p className='blink'>
    Redirecting to Home Page...
  </p>
    </>
  )
}

export default Cancel
