
const Cancel = () => {

    document.title = "Canceled Transaction";

  setTimeout(function() {
    window.location.replace('http://127.0.0.1:5173/home');
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
