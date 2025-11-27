import React from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import imgContact from '../img/slide/57295.jpg'
import whatsappIcon from '../img/icons/whatsapp.png'


function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_al3cine', 'template_959xdn3', e.target, 'user_pT3CvDhr4VVlY4O7LmmOG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    }
    return (
        <div className="contact" id='opacar3'>
            {/* <div className='contact_img'>
    
        <img src={imgContact}></img>
</div> */}<br />
            <h2 className='contact_title'>Contacto</h2>
            <div className="contact_flex">
                <div className="contact_left">
                    <h2>¡Cotiza con nosotros! </h2><br />

                    <p>Ingresa tus datos y en breve nos comunicamos contigo.</p><br />
                    <p>Email: contacto@argsoluciones.com.mx</p><br />
                    <p>Cel: 6621 11 30 20</p><br />
                    <p>Hermosillo, Son., Mex.</p><br />


                </div>
                <div class="contact_right">
                    <form  /* action="enviar-prueba.php" method="post" */ className="formulario column column--50" onSubmit={sendEmail}>

                        {/* <label for="" className="formulario__label">Nombre</label> */}

                        <div><input type="text" className="formulario__input-txt" name="nombre" /></div>

                        {/* <label for="" className="formulario__label">Correo electrónico</label> */}

                        <div><input type="text" className="formulario__input-txt" name="correo" /></div>
                        {/* <label for="" className="formulario__label">Teléfono</label> */}
                        <div><input type="text" className="formulario__input-txt" name="telefono" /></div>
                        {/*  <label for="" className="formulario__label">Mensaje:</label> */}
                        <div>
                            <textarea name="mensaje" id="" cols="30" rows="10" className="formulario__textarea"> </textarea>
                        </div>
                        <input type="submit" className="formulario__btn" value="Enviar"></input>
                    </form>
                </div>
            </div>

            {/* <Prueba/> */}

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            import whatsappIcon from '../img/icons/whatsapp.png'
            <div className='whatsapp_contact'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526621113020?text=Contactar%20con%20un%20asesor"><img src={whatsappIcon}></img></a>
            </div>


        </div>
    )
}

export default Contact
