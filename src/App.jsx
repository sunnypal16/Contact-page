import './App.css'
import Navigation from './componant/Navigation/Navigation'
import ContactHeader from './componant/contactHeader/ContactHeader'
import ContactForm from './componant/ContactForm/ContactForm'

function App() {

  return (

    <>
    <Navigation/>
    <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
    </main>
  </>
  )
}

export default App
