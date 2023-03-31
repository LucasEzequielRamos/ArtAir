import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import cartContext from '../../context/cartContext';
import { clearForm, validateForm, totalPrice } from './functionsForm';
import './Style.css'



function CheckoutForm(props) {

    const { cart, clearCart } = useContext(cartContext)

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState(
        {
            fullName: "",
            email: "",
            phone: "",
            country: "",
            targetName: "",
            numberCard: "",
            expDate: "",
            cvv: "",
        });


    const mostrarAlerta = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Confirmar compra?',
            text: 'Estas a punto de realizar la compra',
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
            showDenyButton: 'true',
            confirmButtonColor: '#178080'

        }).then(response => {
            if (response.isConfirmed) {
                submitData(cart, totalPrice(cart))
                Swal.fire({
                    icon: "success",
                    title: "Compra realizada",
                    text: "Tu compra ha sido realizada, nos comunicaremos via mail",
                    timer: 3000,
                    confirmButtonColor: '#178080'

                })
            } else {
                clearForm(setUserData)
            }
        })
    }

    function handleChange(evt) {
        const { value, name } = evt.target;

        const newuserData = { ...userData }
        newuserData[name] = value;
        setUserData(newuserData)
        setErrors(validateForm(newuserData))
    }

    function submitData(cart, totalPrice) {

        props.onSubmitData(userData, cart, totalPrice)
        clearCart()

    }



    return (
        <div className='container-form-checkout'>
            <div className='container-user-data' >
                <div className='container-title'>
                    <h2 className='title-checkout'>Orden de compra</h2>
                </div>
                <div className='container-form'>
                    <div className='cart-checkout row'>
                        <div className='container-data'>
                            <h4>Datos del comprador</h4>
                            <label > Nombre completo </label>
                            <input
                                type="text "
                                value={userData.fullName}
                                name="fullName"
                                required onChange={handleChange} />
                            {errors.fullName && <p className='errors-msg'>{errors.fullName}</p>}
                            <label >E-mail</label>
                            <input
                                value={userData.email}
                                name="email"
                                type="email"
                                required
                                onChange={handleChange} />
                            {errors.email && <p className='errors-msg'>{errors.email}</p>}
                            <label>Telefono</label>
                            <input
                                value={userData.phone}
                                name="phone"
                                type="text"
                                required
                                onChange={handleChange} />
                            {errors.phone && <p className='errors-msg'>{errors.phone}</p>}

                            <form>
                                <label >Pais</label>
                                <select value={userData.country} required onChange={handleChange} name="country">
                                    <option value="Afganistán">Afganistán</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Alemania">Alemania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option value="Arabia Saudita">Arabia Saudita</option>
                                    <option value="Argelia">Argelia</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaiyán">Azerbaiyán</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bangladés">Bangladés</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Baréin">Baréin</option>
                                    <option value="Bélgica">Bélgica</option>
                                    <option value="Belice">Belice</option>
                                    <option value="Benín">Benín</option>
                                    <option value="Bielorrusia">Bielorrusia</option>
                                    <option value="Birmania/Myanmar">Birmania/Myanmar</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                    <option value="Botsuana">Botsuana</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Brunéi">Brunéi</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Bután">Bután</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Camboya">Camboya</option>
                                    <option value="Camerún">Camerún</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Catar">Catar</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Chipre">Chipre</option>
                                    <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoras">Comoras</option>
                                    <option value="Corea del Norte">Corea del Norte</option>
                                    <option value="Corea del Sur">Corea del Sur</option>
                                    <option value="Costa de Marfil">Costa de Marfil</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croacia">Croacia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Dinamarca">Dinamarca</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egipto">Egipto</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Eslovaquia">Eslovaquia</option>
                                    <option value="Eslovenia">Eslovenia</option>
                                    <option value="España">España</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Etiopía">Etiopía</option>
                                    <option value="Filipinas">Filipinas</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Fiyi">Fiyi</option>
                                    <option value="Francia">Francia</option>
                                    <option value="Gabón">Gabón</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Grecia">Grecia</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea ecuatorial">Guinea ecuatorial</option>
                                    <option value="Guinea-Bisáu">Guinea-Bisáu</option>
                                    <option value="Haití">Haití</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungría">Hungría</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Irak">Irak</option>
                                    <option value="Irán">Irán</option>
                                    <option value="Irlanda">Irlanda</option>
                                    <option value="Islandia">Islandia</option>
                                    <option value="Islas Marshall">Islas Marshall</option>
                                    <option value="Islas Salomón">Islas Salomón</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japón">Japón</option>
                                    <option value="Jordania">Jordania</option>
                                    <option value="Kazajistán">Kazajistán</option>
                                    <option value="Kenia">Kenia</option>
                                    <option value="Kirguistán">Kirguistán</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Lesoto">Lesoto</option>
                                    <option value="Letonia">Letonia</option>
                                    <option value="Líbano">Líbano</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libia">Libia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lituania">Lituania</option>
                                    <option value="Luxemburgo">Luxemburgo</option>
                                    <option value="Macedonia del Norte">Macedonia del Norte</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malasia">Malasia</option>
                                    <option value="Malaui">Malaui</option>
                                    <option value="Maldivas">Maldivas</option>
                                    <option value="Malí">Malí</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marruecos">Marruecos</option>
                                    <option value="Mauricio">Mauricio</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="México">México</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldavia">Moldavia</option>
                                    <option value="Mónaco">Mónaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Níger">Níger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Noruega">Noruega</option>
                                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                                    <option value="Omán">Omán</option>
                                    <option value="Países Bajos">Países Bajos</option>
                                    <option value="Pakistán">Pakistán</option>
                                    <option value="Palaos">Palaos</option>
                                    <option value="Panamá">Panamá</option>
                                    <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Polonia">Polonia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="República Centroafricana">República Centroafricana</option>
                                    <option value="República Checa">República Checa</option>
                                    <option value="República del Congo">República del Congo</option>
                                    <option value="República Democrática del Congo">República Democrática del Congo</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="República Sudafricana">República Sudafricana</option>
                                    <option value="Ruanda">Ruanda</option>
                                    <option value="Rumanía">Rumanía</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leona">Sierra Leona</option>
                                    <option value="Singapur">Singapur</option>
                                    <option value="Siria">Siria</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Suazilandia">Suazilandia</option>
                                    <option value="Sudán">Sudán</option>
                                    <option value="Sudán del Sur">Sudán del Sur</option>
                                    <option value="Suecia">Suecia</option>
                                    <option value="Suiza">Suiza</option>
                                    <option value="Surinam">Surinam</option>
                                    <option value="Tailandia">Tailandia</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Tayikistán">Tayikistán</option>
                                    <option value="Timor Oriental">Timor Oriental</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                    <option value="Túnez">Túnez</option>
                                    <option value="Turkmenistán">Turkmenistán</option>
                                    <option value="Turquía">Turquía</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Ucrania">Ucrania</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistán">Uzbekistán</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Yibuti">Yibuti</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabue">Zimbabue</option>
                                </select>
                            </form>

                        </div>
                        <div className='container-data'>
                            <h4>Datos de pago</h4>
                            <label > Nombre en tarjeta </label>
                            <input
                                type="text "
                                value={userData.targetName}
                                name="targetName"
                                required onChange={handleChange} />
                            <label > Numero de tarjeta </label>
                            <input
                                type="number"
                                value={userData.numberCard}
                                name="numberCard"
                                required onChange={handleChange} />
                            <div className='row'>
                                <div className='exp-cvv'>
                                    <label > Fecha de vencimiento </label>
                                    <input
                                        type="number"
                                        value={userData.expDate}
                                        name="expDate"
                                        required onChange={handleChange} />
                                </div>
                                <div className='exp-cvv'>
                                    <label > CVV </label>
                                    <input
                                        type="number"
                                        value={userData.cvv}
                                        name="cvv"
                                        required onChange={handleChange} />
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='btn-confirm-container'>
                        <button className={Object.keys(errors).length > 0 || userData.fullName === "" ? 'disabled btn-confirm' :  'btn-confirm '} disabled={Object.keys(errors).length > 0 || userData.fullName === "" && true} onClick={() => mostrarAlerta()}>Continuar</button>
                    </div>

                </div>
            </div>
            <div className='purchase-summary-container'>
                <div className='purchase-summary'>
                    <h3 style={{ 'buserBottom': 'solid 1px #000' }}> Articulos en carrito </h3>
                    <ul>
                        {cart.map((prod) => <li className='purchase-detail' style={{ listStyle: 'none' }} key={prod.id}>
                            <div className='detail'>
                                <h6>*{prod.title}</h6>
                                <p>Cantidad:{prod.quantity}</p>
                            </div>
                            <div className='subtotal-detail'>
                                <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(prod.price.toFixed(2))}</p>
                            </div>
                        </li>)}
                    </ul>
                    <div style={{ buserTop: totalPrice(cart) < 1 ? 'none' : 'solid 2px #6e6e6e' }} className='total-detail' >
                        <div>{totalPrice(cart) < 1 ?
                            <div style={{ textAlign: 'center' }}>
                                <p>No hay articulos cargados </p> <Link to='/'> <button className='back-to-commerce-btn'>Regresar a la tienda</button></Link>
                            </div>
                            : <p>Total: {totalPrice(cart)}</p>}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}




export default CheckoutForm