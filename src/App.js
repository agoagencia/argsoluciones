import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Components/Header';
import Home from './Components/Home';
import MenuProductos from './Components/MenuProductos';
import Conocenos from './Components/Conocenos';
import Contact from './Components/Contact';
import Servicios from './Components/Servicios';
import Footer from './Components/Footer';


import HerramientaElectricaBateria1Desc from './Components/ProductosDesc/HerramientaElectricaBateria1Desc';
import HerramientaElectricaBateria2Desc from './Components/ProductosDesc/HerramientaElectricaBateria2Desc';
import HerramientaElectricaBateria3Desc from './Components/ProductosDesc/HerramientaElectricaBateria3Desc';
import HerramientaElectricaBateria4Desc from './Components/ProductosDesc/HerramientaElectricaBateria4Desc';
import HerramientaElectricaBateria5Desc from './Components/ProductosDesc/HerramientaElectricaBateria5Desc';
import HerramientaElectricaBateria6Desc from './Components/ProductosDesc/HerramientaElectricaBateria6Desc';
import HerramientaElectricaBateria7Desc from './Components/ProductosDesc/HerramientaElectricaBateria7Desc';
import HerramientaElectricaBateria8Desc from './Components/ProductosDesc/HerramientaElectricaBateria8Desc';
import HerramientaElectricaBateria10Desc from './Components/ProductosDesc/HerramientaElectricaBateria10Desc';
import HerramientaElectricaBateria11Desc from './Components/ProductosDesc/HerramientaElectricaBateria11Desc';
import HerramientaElectricaBateria12Desc from './Components/ProductosDesc/HerramientaElectricaBateria12Desc';
import HerramientaElectricaBateria13Desc from './Components/ProductosDesc/HerramientaElectricaBateria13Desc';
import HerramientaElectricaBateria14Desc from './Components/ProductosDesc/HerramientaElectricaBateria14Desc';
import HerramientaElectricaBateria15Desc from './Components/ProductosDesc/HerramientaElectricaBateria15Desc';
import HerramientaElectricaBateria16Desc from './Components/ProductosDesc/HerramientaElectricaBateria16Desc';
import HerramientaElectricaBateria17Desc from './Components/ProductosDesc/HerramientaElectricaBateria17Desc';
import HerramientaElectricaBateria18Desc from './Components/ProductosDesc/HerramientaElectricaBateria18Desc';
import HerramientaElectricaBateria19Desc from './Components/ProductosDesc/HerramientaElectricaBateria19Desc';
import HerramientaElectricaBateria20Desc from './Components/ProductosDesc/HerramientaElectricaBateria20Desc';
import HerramientaElectricaBateria21Desc from './Components/ProductosDesc/HerramientaElectricaBateria21Desc';
import HerramientaElectricaBateria22Desc from './Components/ProductosDesc/HerramientaElectricaBateria22Desc';
import HerramientaElectricaBateria23Desc from './Components/ProductosDesc/HerramientaElectricaBateria23Desc';
import HerramientaElectricaBateria24Desc from './Components/ProductosDesc/HerramientaElectricaBateria24Desc';
import HerramientaElectricaBateria25Desc from './Components/ProductosDesc/HerramientaElectricaBateria25Desc';
import HerramientaElectricaBateria26Desc from './Components/ProductosDesc/HerramientaElectricaBateria26Desc';

import HerramientaElectricaCable1Desc from './Components/ProductosDesc/HerramientaElectricaCable1Desc';
import HerramientaElectricaCable2Desc from './Components/ProductosDesc/HerramientaElectricaCable2Desc';
import HerramientaElectricaCable3Desc from './Components/ProductosDesc/HerramientaElectricaCable3Desc';
import HerramientaElectricaCable4Desc from './Components/ProductosDesc/HerramientaElectricaCable4Desc';
import HerramientaElectricaCable5Desc from './Components/ProductosDesc/HerramientaElectricaCable5Desc';
import HerramientaElectricaCable6Desc from './Components/ProductosDesc/HerramientaElectricaCable6Desc';
import HerramientaElectricaCable7Desc from './Components/ProductosDesc/HerramientaElectricaCable7Desc';
import HerramientaElectricaCable8Desc from './Components/ProductosDesc/HerramientaElectricaCable8Desc';
import HerramientaElectricaCable9Desc from './Components/ProductosDesc/HerramientaElectricaCable9Desc';
import HerramientaElectricaCable10Desc from './Components/ProductosDesc/HerramientaElectricaCable10Desc';
import HerramientaElectricaCable11Desc from './Components/ProductosDesc/HerramientaElectricaCable11Desc';
import HerramientaElectricaCable12Desc from './Components/ProductosDesc/HerramientaElectricaCable12Desc';
import HerramientaElectricaCable13Desc from './Components/ProductosDesc/HerramientaElectricaCable13Desc';
import HerramientaElectricaCable14Desc from './Components/ProductosDesc/HerramientaElectricaCable14Desc';
import HerramientaElectricaCable15Desc from './Components/ProductosDesc/HerramientaElectricaCable15Desc';

import HerramientaVehicleService1Desc from './Components/ProductosDesc/HerramientaVehicleService1Desc';
import HerramientaVehicleService2Desc from './Components/ProductosDesc/HerramientaVehicleService2Desc';
import HerramientaVehicleService3Desc from './Components/ProductosDesc/HerramientaVehicleService3Desc';
import HerramientaVehicleService4Desc from './Components/ProductosDesc/HerramientaVehicleService4Desc';
import HerramientaVehicleService5Desc from './Components/ProductosDesc/HerramientaVehicleService5Desc';
import HerramientaVehicleService6Desc from './Components/ProductosDesc/HerramientaVehicleService6Desc';
import HerramientaVehicleService7Desc from './Components/ProductosDesc/HerramientaVehicleService7Desc';
import HerramientaVehicleService8Desc from './Components/ProductosDesc/HerramientaVehicleService8Desc';
import HerramientaVehicleService9Desc from './Components/ProductosDesc/HerramientaVehicleService9Desc';
import HerramientaVehicleService10Desc from './Components/ProductosDesc/HerramientaVehicleService10Desc';
import HerramientaVehicleService11Desc from './Components/ProductosDesc/HerramientaVehicleService11Desc';


import HerramientaIndustrial1Desc from './Components/ProductosDesc/HerramientaIndustrial1Desc';
import HerramientaIndustrial2Desc from './Components/ProductosDesc/HerramientaIndustrial2Desc';
import HerramientaIndustrial3Desc from './Components/ProductosDesc/HerramientaIndustrial3Desc';
import HerramientaIndustrial4Desc from './Components/ProductosDesc/HerramientaIndustrial4Desc';
import HerramientaIndustrial5Desc from './Components/ProductosDesc/HerramientaIndustrial5Desc';
import HerramientaIndustrial6Desc from './Components/ProductosDesc/HerramientaIndustrial6Desc';
import HerramientaIndustrial7Desc from './Components/ProductosDesc/HerramientaIndustrial7Desc';
import HerramientaIndustrial8Desc from './Components/ProductosDesc/HerramientaIndustrial8Desc';
import HerramientaIndustrial9Desc from './Components/ProductosDesc/HerramientaIndustrial9Desc';
import HerramientaIndustrial10Desc from './Components/ProductosDesc/HerramientaIndustrial10Desc';
import HerramientaIndustrial11Desc from './Components/ProductosDesc/HerramientaIndustrial11Desc';
import HerramientaIndustrial12Desc from './Components/ProductosDesc/HerramientaIndustrial12Desc';
import HerramientaIndustrial13Desc from './Components/ProductosDesc/HerramientaIndustrial13Desc';
import HerramientaIndustrial14Desc from './Components/ProductosDesc/HerramientaIndustrial14Desc';
import HerramientaIndustrial15Desc from './Components/ProductosDesc/HerramientaIndustrial15Desc';
import HerramientaIndustrial16Desc from './Components/ProductosDesc/HerramientaIndustrial16Desc';
import HerramientaIndustrial17Desc from './Components/ProductosDesc/HerramientaIndustrial17Desc';
import HerramientaIndustrial18Desc from './Components/ProductosDesc/HerramientaIndustrial18Desc';
import HerramientaIndustrial19Desc from './Components/ProductosDesc/HerramientaIndustrial19Desc';
import HerramientaIndustrial20Desc from './Components/ProductosDesc/HerramientaIndustrial20Desc';
import HerramientaIndustrial21Desc from './Components/ProductosDesc/HerramientaIndustrial21Desc';
import HerramientaIndustrial22Desc from './Components/ProductosDesc/HerramientaIndustrial22Desc';
import HerramientaIndustrial23Desc from './Components/ProductosDesc/HerramientaIndustrial23Desc';
import HerramientaIndustrial24Desc from './Components/ProductosDesc/HerramientaIndustrial24Desc';
import HerramientaIndustrial25Desc from './Components/ProductosDesc/HerramientaIndustrial25Desc';
import HerramientaIndustrial26Desc from './Components/ProductosDesc/HerramientaIndustrial26Desc';
import HerramientaIndustrial27Desc from './Components/ProductosDesc/HerramientaIndustrial27Desc';
import HerramientaIndustrial28Desc from './Components/ProductosDesc/HerramientaIndustrial28Desc';
import HerramientaIndustrial29Desc from './Components/ProductosDesc/HerramientaIndustrial29Desc';
import HerramientaIndustrial30Desc from './Components/ProductosDesc/HerramientaIndustrial30Desc';
import HerramientaIndustrial31Desc from './Components/ProductosDesc/HerramientaIndustrial31Desc';
import HerramientaIndustrial32Desc from './Components/ProductosDesc/HerramientaIndustrial32Desc';
import HerramientaIndustrial33Desc from './Components/ProductosDesc/HerramientaIndustrial33Desc';
import HerramientaIndustrial34Desc from './Components/ProductosDesc/HerramientaIndustrial34Desc';
import HerramientaIndustrial35Desc from './Components/ProductosDesc/HerramientaIndustrial35Desc';
import HerramientaIndustrial36Desc from './Components/ProductosDesc/HerramientaIndustrial36Desc';
import HerramientaIndustrial37Desc from './Components/ProductosDesc/HerramientaIndustrial37Desc';
import HerramientaIndustrial38Desc from './Components/ProductosDesc/HerramientaIndustrial38Desc';
import HerramientaIndustrial39Desc from './Components/ProductosDesc/HerramientaIndustrial39Desc';
import HerramientaIndustrial40Desc from './Components/ProductosDesc/HerramientaIndustrial40Desc';
import HerramientaIndustrial41Desc from './Components/ProductosDesc/HerramientaIndustrial41Desc';
import HerramientaIndustrial42Desc from './Components/ProductosDesc/HerramientaIndustrial42Desc';
import HerramientaIndustrial43Desc from './Components/ProductosDesc/HerramientaIndustrial43Desc';



import Dado1Desc from './Components/ProductosDesc/Dado1Desc';
import Dado2Desc from './Components/ProductosDesc/Dado2Desc';
import Dado3Desc from './Components/ProductosDesc/Dado3Desc';
import Dado4Desc from './Components/ProductosDesc/Dado4Desc';
import Dado5Desc from './Components/ProductosDesc/Dado5Desc';
import Dado6Desc from './Components/ProductosDesc/Dado6Desc';

import Punta1Desc from './Components/ProductosDesc/Punta1Desc';
import Punta2Desc from './Components/ProductosDesc/Punta2Desc';
import Punta3Desc from './Components/ProductosDesc/Punta3Desc';
import Punta4Desc from './Components/ProductosDesc/Punta4Desc';
import Punta5Desc from './Components/ProductosDesc/Punta5Desc';
import Punta6Desc from './Components/ProductosDesc/Punta6Desc';
import Punta7Desc from './Components/ProductosDesc/Punta7Desc';
import Punta8Desc from './Components/ProductosDesc/Punta8Desc';
import Punta9Desc from './Components/ProductosDesc/Punta9Desc';
import Punta10Desc from './Components/ProductosDesc/Punta10Desc';
import Punta11Desc from './Components/ProductosDesc/Punta11Desc';
import Punta12Desc from './Components/ProductosDesc/Punta12Desc';
import Punta13Desc from './Components/ProductosDesc/Punta13Desc';
import Punta14Desc from './Components/ProductosDesc/Punta14Desc';
import Punta15Desc from './Components/ProductosDesc/Punta15Desc';
import Punta16Desc from './Components/ProductosDesc/Punta16Desc';
import Punta17Desc from './Components/ProductosDesc/Punta17Desc';
import Punta18Desc from './Components/ProductosDesc/Punta18Desc';
import Punta19Desc from './Components/ProductosDesc/Punta19Desc';
import Punta20Desc from './Components/ProductosDesc/Punta20Desc';
import Punta21Desc from './Components/ProductosDesc/Punta21Desc';
import Punta22Desc from './Components/ProductosDesc/Punta22Desc';
import Punta23Desc from './Components/ProductosDesc/Punta23Desc';
import Punta24Desc from './Components/ProductosDesc/Punta24Desc';
import Punta25Desc from './Components/ProductosDesc/Punta25Desc';
import Punta26Desc from './Components/ProductosDesc/Punta26Desc';
import Punta27Desc from './Components/ProductosDesc/Punta27Desc';
import Punta28Desc from './Components/ProductosDesc/Punta28Desc';
import Punta29Desc from './Components/ProductosDesc/Punta29Desc';

import Resistencia1Desc from './Components/ProductosDesc/Resistencia1Desc';
import Resistencia2Desc from './Components/ProductosDesc/Resistencia2Desc';
import Resistencia3Desc from './Components/ProductosDesc/Resistencia3Desc';
import Resistencia4Desc from './Components/ProductosDesc/Resistencia4Desc';
import Resistencia5Desc from './Components/ProductosDesc/Resistencia5Desc';
import Resistencia6Desc from './Components/ProductosDesc/Resistencia6Desc';
import Resistencia7Desc from './Components/ProductosDesc/Resistencia7Desc';

import Adaptador1Desc from './Components/ProductosDesc/Adaptador1Desc';
import Adaptador2Desc from './Components/ProductosDesc/Adaptador2Desc';
import Adaptador3Desc from './Components/ProductosDesc/Adaptador3Desc';

import Extension1Desc from './Components/ProductosDesc/Extension1Desc';
import Extension2Desc from './Components/ProductosDesc/Extension2Desc';
import Extension3Desc from './Components/ProductosDesc/Extension3Desc';
import Extension4Desc from './Components/ProductosDesc/Extension4Desc';
import Extension6Desc from './Components/ProductosDesc/Extension6Desc';
import Extension7Desc from './Components/ProductosDesc/Extension7Desc';

import PolipastoN1Desc from './Components/ProductosDesc/PolipastoN1Desc';
import PolipastoN2Desc from './Components/ProductosDesc/PolipastoN2Desc';
import PolipastoN3Desc from './Components/ProductosDesc/PolipastoN3Desc';
import PolipastoN4Desc from './Components/ProductosDesc/PolipastoN4Desc';
import PolipastoN5Desc from './Components/ProductosDesc/PolipastoN5Desc';
import PolipastoN6Desc from './Components/ProductosDesc/PolipastoN6Desc';

import PolipastoE1Desc from './Components/ProductosDesc/PolipastoE1Desc';
import PolipastoE2Desc from './Components/ProductosDesc/PolipastoE2Desc';
import PolipastoE3Desc from './Components/ProductosDesc/PolipastoE3Desc';
import PolipastoE4Desc from './Components/ProductosDesc/PolipastoE4Desc';
import PolipastoE5Desc from './Components/ProductosDesc/PolipastoE5Desc';
import PolipastoE6Desc from './Components/ProductosDesc/PolipastoE6Desc';
import PolipastoE7Desc from './Components/ProductosDesc/PolipastoE7Desc';
import PolipastoE8Desc from './Components/ProductosDesc/PolipastoE8Desc';
import PolipastoE9Desc from './Components/ProductosDesc/PolipastoE9Desc';

import BalancinN1Desc from './Components/ProductosDesc/BalancinN1Desc';
import BalancinN2Desc from './Components/ProductosDesc/BalancinN2Desc';
import BalancinN3Desc from './Components/ProductosDesc/BalancinN3Desc';

import BalancinE1Desc from './Components/ProductosDesc/BalancinE1Desc';
import BalancinE2Desc from './Components/ProductosDesc/BalancinE2Desc';
import BalancinE3Desc from './Components/ProductosDesc/BalancinE3Desc';
import BalancinE4Desc from './Components/ProductosDesc/BalancinE4Desc';

import Accesorio1Desc from './Components/ProductosDesc/Accesorio1Desc';
import Accesorio2Desc from './Components/ProductosDesc/Accesorio2Desc';
import Accesorio3Desc from './Components/ProductosDesc/Accesorio3Desc';
import Accesorio4Desc from './Components/ProductosDesc/Accesorio4Desc';
import Accesorio5Desc from './Components/ProductosDesc/Accesorio5Desc';
import Accesorio6Desc from './Components/ProductosDesc/Accesorio6Desc';
import Accesorio7Desc from './Components/ProductosDesc/Accesorio7Desc';
import Accesorio8Desc from './Components/ProductosDesc/Accesorio8Desc';
import Accesorio9Desc from './Components/ProductosDesc/Accesorio9Desc';
import Accesorio10Desc from './Components/ProductosDesc/Accesorio10Desc';
import Accesorio11Desc from './Components/ProductosDesc/Accesorio11Desc';
import Accesorio12Desc from './Components/ProductosDesc/Accesorio12Desc';
import Accesorio13Desc from './Components/ProductosDesc/Accesorio13Desc';
import Accesorio14Desc from './Components/ProductosDesc/Accesorio14Desc';
import Accesorio15Desc from './Components/ProductosDesc/Accesorio15Desc';
import Accesorio16Desc from './Components/ProductosDesc/Accesorio16Desc';
import Accesorio17Desc from './Components/ProductosDesc/Accesorio17Desc';

import DispAut1Desc from './Components/ProductosDesc/DispAut1Desc';
import DispAut2Desc from './Components/ProductosDesc/DispAut2Desc';

import EquiposHotMelt1Desc from './Components/ProductosDesc/EquiposHotMelt1Desc';
import EquiposHotMelt2Desc from './Components/ProductosDesc/EquiposHotMelt2Desc';

import Equipo2k1Desc from './Components/ProductosDesc/Equipo2k1Desc';
import Equipo2k2Desc from './Components/ProductosDesc/Equipo2k2Desc';
import Equipo2k3Desc from './Components/ProductosDesc/Equipo2k3Desc';


import ValvulaDispensacion1Desc from './Components/ProductosDesc/ValvulaDispensacion1Desc';
import ValvulaDispensacion2Desc from './Components/ProductosDesc/ValvulaDispensacion2Desc';

import SistemaSuministro1Desc from './Components/ProductosDesc/SistemaSuministro1Desc';
import SistemaSuministro2Desc from './Components/ProductosDesc/SistemaSuministro2Desc';

import AvisoPrivacidad from './Components/AvisoPrivacidad';

import EquipoAutomatizado1Desc from './Components/ProductosDesc/EquipoAutomatizado1Desc';
import EquipoAutomatizado2Desc from './Components/ProductosDesc/EquipoAutomatizado2Desc';
import EquipoAutomatizado3Desc from './Components/ProductosDesc/EquipoAutomatizado3Desc';
import EquipoAutomatizado4Desc from './Components/ProductosDesc/EquipoAutomatizado4Desc';

import EquipoCurado1Desc from './Components/ProductosDesc/EquipoCurado1Desc';

import EquipoRecubrimiento1Desc from './Components/ProductosDesc/EquipoRecubrimiento1Desc';
import EquipoRecubrimiento2Desc from './Components/ProductosDesc/EquipoRecubrimiento2Desc';
import EquipoRecubrimiento3Desc from './Components/ProductosDesc/EquipoRecubrimiento3Desc';
import EquipoRecubrimiento4Desc from './Components/ProductosDesc/EquipoRecubrimiento4Desc';
import EquipoRecubrimiento5Desc from './Components/ProductosDesc/EquipoRecubrimiento5Desc';
import EquipoRecubrimiento6Desc from './Components/ProductosDesc/EquipoRecubrimiento6Desc';
import EquipoRecubrimiento7Desc from './Components/ProductosDesc/EquipoRecubrimiento7Desc';
import EquipoRecubrimiento8Desc from './Components/ProductosDesc/EquipoRecubrimiento8Desc';
import EquipoRecubrimiento9Desc from './Components/ProductosDesc/EquipoRecubrimiento9Desc';
import EquipoRecubrimiento10Desc from './Components/ProductosDesc/EquipoRecubrimiento10Desc';
import EquipoRecubrimiento11Desc from './Components/ProductosDesc/EquipoRecubrimiento11Desc';
import EquipoRecubrimiento12Desc from './Components/ProductosDesc/EquipoRecubrimiento12Desc';
import EquipoRecubrimiento13Desc from './Components/ProductosDesc/EquipoRecubrimiento13Desc';
import EquipoRecubrimiento14Desc from './Components/ProductosDesc/EquipoRecubrimiento14Desc';
import EquipoRecubrimiento15Desc from './Components/ProductosDesc/EquipoRecubrimiento15Desc';
import EquipoRecubrimiento16Desc from './Components/ProductosDesc/EquipoRecubrimiento16Desc';
import EquipoRecubrimiento17Desc from './Components/ProductosDesc/EquipoRecubrimiento17Desc';
import EquipoRecubrimiento18Desc from './Components/ProductosDesc/EquipoRecubrimiento18Desc';
import EquipoRecubrimiento19Desc from './Components/ProductosDesc/EquipoRecubrimiento19Desc';
import EquipoRecubrimiento20Desc from './Components/ProductosDesc/EquipoRecubrimiento20Desc';
import EquipoRecubrimiento21Desc from './Components/ProductosDesc/EquipoRecubrimiento21Desc';
import EquipoRecubrimiento22Desc from './Components/ProductosDesc/EquipoRecubrimiento22Desc';
import EquipoRecubrimiento23Desc from './Components/ProductosDesc/EquipoRecubrimiento23Desc';
import EquipoRecubrimiento24Desc from './Components/ProductosDesc/EquipoRecubrimiento24Desc';
import EquipoRecubrimiento25Desc from './Components/ProductosDesc/EquipoRecubrimiento25Desc';
import EquipoRecubrimiento26Desc from './Components/ProductosDesc/EquipoRecubrimiento26Desc';
import EquipoRecubrimiento27Desc from './Components/ProductosDesc/EquipoRecubrimiento27Desc';
import EquipoRecubrimiento28Desc from './Components/ProductosDesc/EquipoRecubrimiento28Desc';
import EquipoRecubrimiento29Desc from './Components/ProductosDesc/EquipoRecubrimiento29Desc';
import EquipoRecubrimiento30Desc from './Components/ProductosDesc/EquipoRecubrimiento30Desc';
import EquipoRecubrimiento31Desc from './Components/ProductosDesc/EquipoRecubrimiento31Desc';

import Dosificador1Desc from './Components/ProductosDesc/Dosificador1Desc';
import Dosificador2Desc from './Components/ProductosDesc/Dosificador2Desc';
import Dosificador3Desc from './Components/ProductosDesc/Dosificador3Desc';
import Dosificador4Desc from './Components/ProductosDesc/Dosificador4Desc';
import Dosificador5Desc from './Components/ProductosDesc/Dosificador5Desc';
import Dosificador6Desc from './Components/ProductosDesc/Dosificador6Desc';

import SistemaMedicionEq1Desc from './Components/ProductosDesc/SistemaMedicionEq1Desc';
import SistemaMedicionEq2Desc from './Components/ProductosDesc/SistemaMedicionEq2Desc';
import SistemaMedicionEq3Desc from './Components/ProductosDesc/SistemaMedicionEq3Desc';

import PistolaElectrostatica1Desc from './Components/ProductosDesc/PistolaElectrostatica1Desc';
import PistolaElectrostatica2Desc from './Components/ProductosDesc/PistolaElectrostatica2Desc';

import BombaSuministro1Desc from './Components/ProductosDesc/BombaSuministro1Desc';
import BombaSuministro2Desc from './Components/ProductosDesc/BombaSuministro2Desc';
import BombaSuministro3Desc from './Components/ProductosDesc/BombaSuministro3Desc';
import BombaSuministro4Desc from './Components/ProductosDesc/BombaSuministro4Desc';
import BombaSuministro5Desc from './Components/ProductosDesc/BombaSuministro7Desc';
import BombaSuministro6Desc from './Components/ProductosDesc/BombaSuministro5Desc';
import BombaSuministro7Desc from './Components/ProductosDesc/BombaSuministro7Desc';
import BombaSuministro8Desc from './Components/ProductosDesc/BombaSuministro8Desc';

import PaqueteBomba1Desc from './Components/ProductosDesc/PaqueteBomba1Desc';
import PaqueteBomba2Desc from './Components/ProductosDesc/PaqueteBomba2Desc';
import PaqueteBomba3Desc from './Components/ProductosDesc/PaqueteBomba3Desc';
import PaqueteBomba4Desc from './Components/ProductosDesc/PaqueteBomba4Desc';
import PaqueteBomba5Desc from './Components/ProductosDesc/PaqueteBomba5Desc';
import PaqueteBomba6Desc from './Components/ProductosDesc/PaqueteBomba6Desc';
import PaqueteBomba7Desc from './Components/ProductosDesc/PaqueteBomba7Desc';

import EquipoSanitizante1Desc from './Components/ProductosDesc/EquipoSanitizante1Desc';
import EquipoSanitizante2Desc from './Components/ProductosDesc/EquipoSanitizante2Desc';
import EquipoSanitizante3Desc from './Components/ProductosDesc/EquipoSanitizante3Desc';

import Pistola1Desc from './Components/ProductosDesc/Pistola1Desc';
import Pistola2Desc from './Components/ProductosDesc/Pistola2Desc';
import Pistola3Desc from './Components/ProductosDesc/Pistola3Desc';
import Pistola4Desc from './Components/ProductosDesc/Pistola4Desc';
import Pistola5Desc from './Components/ProductosDesc/Pistola5Desc';
import Pistola6Desc from './Components/ProductosDesc/Pistola6Desc';
import Pistola7Desc from './Components/ProductosDesc/Pistola7Desc';
import Pistola8Desc from './Components/ProductosDesc/Pistola8Desc';
import Pistola9Desc from './Components/ProductosDesc/Pistola9Desc';
import Pistola10Desc from './Components/ProductosDesc/Pistola10Desc';
import Pistola11Desc from './Components/ProductosDesc/Pistola11Desc';
import Pistola12Desc from './Components/ProductosDesc/Pistola12Desc';
import Pistola13Desc from './Components/ProductosDesc/Pistola13Desc';
import Pistola14Desc from './Components/ProductosDesc/Pistola14Desc';
import Pistola15Desc from './Components/ProductosDesc/Pistola15Desc';

import BombaDiafragma1Desc from './Components/ProductosDesc/BombaDiafragma1Desc';
import BombaDiafragma2Desc from './Components/ProductosDesc/BombaDiafragma2Desc';
import BombaDiafragma3Desc from './Components/ProductosDesc/BombaDiafragma3Desc';
import BombaDiafragma4Desc from './Components/ProductosDesc/BombaDiafragma4Desc';
import BombaDiafragma5Desc from './Components/ProductosDesc/BombaDiafragma5Desc';
import BombaDiafragma6Desc from './Components/ProductosDesc/BombaDiafragma6Desc';
import BombaDiafragma7Desc from './Components/ProductosDesc/BombaDiafragma7Desc';
import BombaDiafragma8Desc from './Components/ProductosDesc/BombaDiafragma8Desc';
import BombaDiafragma9Desc from './Components/ProductosDesc/BombaDiafragma9Desc';
import BombaDiafragma10Desc from './Components/ProductosDesc/BombaDiafragma10Desc';
import BombaDiafragma11Desc from './Components/ProductosDesc/BombaDiafragma11Desc';
import BombaDiafragma12Desc from './Components/ProductosDesc/BombaDiafragma12Desc';
import BombaDiafragma13Desc from './Components/ProductosDesc/BombaDiafragma13Desc';
import BombaDiafragma14Desc from './Components/ProductosDesc/BombaDiafragma14Desc';
import BombaDiafragma15Desc from './Components/ProductosDesc/BombaDiafragma15Desc';
import BombaDiafragma16Desc from './Components/ProductosDesc/BombaDiafragma16Desc';
import BombaDiafragma17Desc from './Components/ProductosDesc/BombaDiafragma17Desc';
import BombaDiafragma18Desc from './Components/ProductosDesc/BombaDiafragma18Desc';
import BombaDiafragma19Desc from './Components/ProductosDesc/BombaDiafragma19Desc';
import BombaDiafragma20Desc from './Components/ProductosDesc/BombaDiafragma20Desc';
import BombaDiafragma21Desc from './Components/ProductosDesc/BombaDiafragma21Desc';
import BombaDiafragma22Desc from './Components/ProductosDesc/BombaDiafragma22Desc';
import BombaDiafragma23Desc from './Components/ProductosDesc/BombaDiafragma23Desc';
import BombaDiafragma24Desc from './Components/ProductosDesc/BombaDiafragma24Desc';
import BombaDiafragma25Desc from './Components/ProductosDesc/BombaDiafragma25Desc';
import BombaDiafragma26Desc from './Components/ProductosDesc/BombaDiafragma26Desc';
import BombaDiafragma27Desc from './Components/ProductosDesc/BombaDiafragma27Desc';
import BombaDiafragma28Desc from './Components/ProductosDesc/BombaDiafragma28Desc';
import BombaDiafragma29Desc from './Components/ProductosDesc/BombaDiafragma29Desc';
import BombaDiafragma30Desc from './Components/ProductosDesc/BombaDiafragma30Desc';
import BombaDiafragma31Desc from './Components/ProductosDesc/BombaDiafragma31Desc';
import BombaDiafragma32Desc from './Components/ProductosDesc/BombaDiafragma32Desc';

import BombaPiston1Desc from './Components/ProductosDesc/BombaPiston1Desc';
import BombaPiston2Desc from './Components/ProductosDesc/BombaPiston2Desc';
import BombaPiston3Desc from './Components/ProductosDesc/BombaPiston3Desc';
import BombaPiston4Desc from './Components/ProductosDesc/BombaPiston4Desc';
import BombaPiston5Desc from './Components/ProductosDesc/BombaPiston5Desc';
import BombaPiston6Desc from './Components/ProductosDesc/BombaPiston6Desc';
import BombaPiston7Desc from './Components/ProductosDesc/BombaPiston7Desc';
import BombaPiston8Desc from './Components/ProductosDesc/BombaPiston8Desc';
import BombaPiston9Desc from './Components/ProductosDesc/BombaPiston9Desc';
import BombaPiston10Desc from './Components/ProductosDesc/BombaPiston10Desc';
import BombaPiston11Desc from './Components/ProductosDesc/BombaPiston11Desc';
import BombaPiston12Desc from './Components/ProductosDesc/BombaPiston12Desc';
import BombaPiston13Desc from './Components/ProductosDesc/BombaPiston13Desc';
import BombaPiston14Desc from './Components/ProductosDesc/BombaPiston14Desc';
import BombaPiston15Desc from './Components/ProductosDesc/BombaPiston15Desc';


import BombaGrasa1Desc from './Components/ProductosDesc/BombaGrasa1Desc';
import BombaGrasa2Desc from './Components/ProductosDesc/BombaGrasa2Desc';
import BombaGrasa3Desc from './Components/ProductosDesc/BombaGrasa3Desc';
import BombaGrasa4Desc from './Components/ProductosDesc/BombaGrasa4Desc';
import BombaGrasa5Desc from './Components/ProductosDesc/BombaGrasa5Desc';
import BombaGrasa6Desc from './Components/ProductosDesc/BombaGrasa6Desc';
import BombaGrasa7Desc from './Components/ProductosDesc/BombaGrasa7Desc';
import BombaGrasa8Desc from './Components/ProductosDesc/BombaGrasa8Desc';

import BombaTransfPolvos1Desc from './Components/ProductosDesc/BombaTransfPolvos1Desc';
import BombaTransfPolvos2Desc from './Components/ProductosDesc/BombaTransfPolvos2Desc';

import BombaCompuerta1Desc from './Components/ProductosDesc/BombaCompuerta1Desc';
import BombaCompuerta2Desc from './Components/ProductosDesc/BombaCompuerta2Desc';

/* import BombaInterfazElectronica1Desc from './Components/ProductosDesc/BombaInterfazElectronica1Desc';
import BombaInterfazElectronica2Desc from './Components/ProductosDesc/BombaInterfazElectronica2Desc'; */

import BombaAltaPresion1Desc from './Components/ProductosDesc/BombaAltaPresion1Desc';

import BombaPseudoSanitaria1Desc from './Components/ProductosDesc/BombaPseudoSanitaria1Desc';
import BombaPseudoSanitaria2Desc from './Components/ProductosDesc/BombaPseudoSanitaria2Desc';

import BombaSanitaria1Desc from './Components/ProductosDesc/BombaSanitaria1Desc';
import BombaSanitaria2Desc from './Components/ProductosDesc/BombaSanitaria2Desc';
import BombaSanitaria3Desc from './Components/ProductosDesc/BombaSanitaria3Desc';
import BombaSanitaria4Desc from './Components/ProductosDesc/BombaSanitaria4Desc';
import BombaSanitaria5Desc from './Components/ProductosDesc/BombaSanitaria5Desc';
import BombaSanitaria6Desc from './Components/ProductosDesc/BombaSanitaria6Desc';
import BombaSanitaria7Desc from './Components/ProductosDesc/BombaSanitaria7Desc';
import BombaSanitaria8Desc from './Components/ProductosDesc/BombaSanitaria8Desc';
import BombaSanitaria9Desc from './Components/ProductosDesc/BombaSanitaria9Desc';
import BombaSanitaria10Desc from './Components/ProductosDesc/BombaSanitaria10Desc';
import BombaSanitaria11Desc from './Components/ProductosDesc/BombaSanitaria11Desc';
import BombaSanitaria12Desc from './Components/ProductosDesc/BombaSanitaria12Desc';
import BombaSanitaria13Desc from './Components/ProductosDesc/BombaSanitaria13Desc';
import BombaSanitaria14Desc from './Components/ProductosDesc/BombaSanitaria14Desc';
import BombaSanitaria15Desc from './Components/ProductosDesc/BombaSanitaria15Desc';

import BombaCentrifuga1Desc from './Components/ProductosDesc/BombaCentrifuga1Desc';

import HerramientaTorque1Desc from './Components/ProductosDesc/HerramientaTorque1Desc';
import HerramientaTorque2Desc from './Components/ProductosDesc/HerramientaTorque2Desc';
import HerramientaTorque3Desc from './Components/ProductosDesc/HerramientaTorque3Desc';
import HerramientaTorque4Desc from './Components/ProductosDesc/HerramientaTorque4Desc';
import HerramientaTorque5Desc from './Components/ProductosDesc/HerramientaTorque5Desc';
import HerramientaTorque6Desc from './Components/ProductosDesc/HerramientaTorque6Desc';
import HerramientaTorque7Desc from './Components/ProductosDesc/HerramientaTorque7Desc';
import HerramientaTorque8Desc from './Components/ProductosDesc/HerramientaTorque8Desc';
import HerramientaTorque9Desc from './Components/ProductosDesc/HerramientaTorque9Desc';
import HerramientaTorque10Desc from './Components/ProductosDesc/HerramientaTorque10Desc';
import HerramientaTorque11Desc from './Components/ProductosDesc/HerramientaTorque11Desc';
import HerramientaTorque12Desc from './Components/ProductosDesc/HerramientaTorque12Desc';
import HerramientaTorque13Desc from './Components/ProductosDesc/HerramientaTorque13Desc';
import HerramientaTorque14Desc from './Components/ProductosDesc/HerramientaTorque14Desc';

import HerramientaTorque16Desc from './Components/ProductosDesc/HerramientaTorque16Desc';
import HerramientaTorque17Desc from './Components/ProductosDesc/HerramientaTorque17Desc';

import HerramientaTorque19Desc from './Components/ProductosDesc/HerramientaTorque19Desc';
import HerramientaTorque20Desc from './Components/ProductosDesc/HerramientaTorque20Desc';
import HerramientaTorque21Desc from './Components/ProductosDesc/HerramientaTorque21Desc';
import HerramientaTorque22Desc from './Components/ProductosDesc/HerramientaTorque22Desc';
import HerramientaTorque23Desc from './Components/ProductosDesc/HerramientaTorque23Desc';
import HerramientaTorque24Desc from './Components/ProductosDesc/HerramientaTorque24Desc';
import HerramientaTorque25Desc from './Components/ProductosDesc/HerramientaTorque25Desc';
import HerramientaTorque26Desc from './Components/ProductosDesc/HerramientaTorque26Desc';

import Tanque1Desc from './Components/ProductosDesc/Tanque1Desc';
import BombasDiafragma from './Components/BombasDiafragma';
/* import Blog from './Components/Blog'; */

function App() {

  return (
    <div className="App">
      <Router>

        <Header />
     
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/conocenos" component={Conocenos} />
          <Route path="/productos" component={MenuProductos} />
          <Route path="/servicios" component={Servicios}></Route>
          <Route path="/contacto" component={Contact} />
          {/*--------- Productos------------- */}
          <Route exact path="/HEB1" component={HerramientaElectricaBateria1Desc}></Route>
          <Route exact path="/HEB2" component={HerramientaElectricaBateria2Desc}></Route>
          <Route exact path="/HEB3" component={HerramientaElectricaBateria3Desc}></Route>
          <Route exact path="/HEB4" component={HerramientaElectricaBateria4Desc}></Route>
          <Route exact path="/HEB5" component={HerramientaElectricaBateria5Desc}></Route>
          <Route exact path="/HEB6" component={HerramientaElectricaBateria6Desc}></Route>
          <Route exact path="/HEB7" component={HerramientaElectricaBateria7Desc}></Route>
          <Route exact path="/HEB8" component={HerramientaElectricaBateria8Desc}></Route>
          <Route exact path="/HEB10" component={HerramientaElectricaBateria10Desc}></Route>
          <Route exact path="/HEB11" component={HerramientaElectricaBateria11Desc}></Route>
          <Route exact path="/HEB12" component={HerramientaElectricaBateria12Desc}></Route>
          <Route exact path="/HEB13" component={HerramientaElectricaBateria13Desc}></Route>
          <Route exact path="/HEB14" component={HerramientaElectricaBateria14Desc}></Route>
          <Route exact path="/HEB15" component={HerramientaElectricaBateria15Desc}></Route>
          <Route exact path="/HEB16" component={HerramientaElectricaBateria16Desc}></Route>
          <Route exact path="/HEB17" component={HerramientaElectricaBateria17Desc}></Route>
          <Route exact path="/HEB18" component={HerramientaElectricaBateria18Desc}></Route>
          <Route exact path="/HEB19" component={HerramientaElectricaBateria19Desc}></Route>
          <Route exact path="/HEB20" component={HerramientaElectricaBateria20Desc}></Route>
          <Route exact path="/HEB21" component={HerramientaElectricaBateria21Desc}></Route>
          <Route exact path="/HEB22" component={HerramientaElectricaBateria22Desc}></Route>
          <Route exact path="/HEB23" component={HerramientaElectricaBateria23Desc}></Route>
          <Route exact path="/HEB24" component={HerramientaElectricaBateria24Desc}></Route>
          <Route exact path="/HEB25" component={HerramientaElectricaBateria25Desc}></Route>
          <Route exact path="/HEB26" component={HerramientaElectricaBateria26Desc}></Route>

          <Route exact path="/HEC1" component={HerramientaElectricaCable1Desc}></Route>
          <Route exact path="/HEC2" component={HerramientaElectricaCable2Desc}></Route>
          <Route exact path="/HEC3" component={HerramientaElectricaCable3Desc}></Route>
          <Route exact path="/HEC4" component={HerramientaElectricaCable4Desc}></Route>
          <Route exact path="/HEC5" component={HerramientaElectricaCable5Desc}></Route>
          <Route exact path="/HEC6" component={HerramientaElectricaCable6Desc}></Route>
          <Route exact path="/HEC7" component={HerramientaElectricaCable7Desc}></Route>
          <Route exact path="/HEC8" component={HerramientaElectricaCable8Desc}></Route>
          <Route exact path="/HEC9" component={HerramientaElectricaCable9Desc}></Route>
          <Route exact path="/HEC10" component={HerramientaElectricaCable10Desc}></Route>
          <Route exact path="/HEC11" component={HerramientaElectricaCable11Desc}></Route>
          <Route exact path="/HEC12" component={HerramientaElectricaCable12Desc}></Route>
          <Route exact path="/HEC13" component={HerramientaElectricaCable13Desc}></Route>
          <Route exact path="/HEC14" component={HerramientaElectricaCable14Desc}></Route>
          <Route exact path="/HEC15" component={HerramientaElectricaCable15Desc}></Route>

          <Route exact path="/HVS1" component={HerramientaVehicleService1Desc}></Route>
          <Route exact path="/HVS2" component={HerramientaVehicleService2Desc}></Route>
          <Route exact path="/HVS3" component={HerramientaVehicleService3Desc}></Route>
          <Route exact path="/HVS4" component={HerramientaVehicleService4Desc}></Route>
          <Route exact path="/HVS5" component={HerramientaVehicleService5Desc}></Route>
          <Route exact path="/HVS6" component={HerramientaVehicleService6Desc}></Route>
          <Route exact path="/HVS7" component={HerramientaVehicleService7Desc}></Route>
          <Route exact path="/HVS8" component={HerramientaVehicleService8Desc}></Route>
          <Route exact path="/HVS9" component={HerramientaVehicleService9Desc}></Route>
          <Route exact path="/HVS10" component={HerramientaVehicleService10Desc}></Route>
          <Route exact path="/HVS11" component={HerramientaVehicleService11Desc}></Route>


          <Route exact path="/HI1" component={HerramientaIndustrial1Desc}></Route>
          <Route exact path="/HI2" component={HerramientaIndustrial2Desc}></Route>
          <Route exact path="/HI3" component={HerramientaIndustrial3Desc}></Route>
          <Route exact path="/HI4" component={HerramientaIndustrial4Desc}></Route>
          <Route exact path="/HI5" component={HerramientaIndustrial5Desc}></Route>
          <Route exact path="/HI6" component={HerramientaIndustrial6Desc}></Route>
          <Route exact path="/HI7" component={HerramientaIndustrial7Desc}></Route>
          <Route exact path="/HI8" component={HerramientaIndustrial8Desc}></Route>
          <Route exact path="/HI9" component={HerramientaIndustrial9Desc}></Route>
          <Route exact path="/HI10" component={HerramientaIndustrial10Desc}></Route>
          <Route exact path="/HI11" component={HerramientaIndustrial11Desc}></Route>
          <Route exact path="/HI12" component={HerramientaIndustrial12Desc}></Route>
          <Route exact path="/HI13" component={HerramientaIndustrial13Desc}></Route>
          <Route exact path="/HI14" component={HerramientaIndustrial14Desc}></Route>
          <Route exact path="/HI15" component={HerramientaIndustrial15Desc}></Route>
          <Route exact path="/HI16" component={HerramientaIndustrial16Desc}></Route>
          <Route exact path="/HI17" component={HerramientaIndustrial17Desc}></Route>
          <Route exact path="/HI18" component={HerramientaIndustrial18Desc}></Route>
          <Route exact path="/HI19" component={HerramientaIndustrial19Desc}></Route>
          <Route exact path="/HI20" component={HerramientaIndustrial20Desc}></Route>
          <Route exact path="/HI21" component={HerramientaIndustrial21Desc}></Route>
          <Route exact path="/HI22" component={HerramientaIndustrial22Desc}></Route>
          <Route exact path="/HI23" component={HerramientaIndustrial23Desc}></Route>
          <Route exact path="/HI24" component={HerramientaIndustrial24Desc}></Route>
          <Route exact path="/HI25" component={HerramientaIndustrial25Desc}></Route>
          <Route exact path="/HI26" component={HerramientaIndustrial26Desc}></Route>
          <Route exact path="/HI27" component={HerramientaIndustrial27Desc}></Route>
          <Route exact path="/HI28" component={HerramientaIndustrial28Desc}></Route>
          <Route exact path="/HI29" component={HerramientaIndustrial29Desc}></Route>
          <Route exact path="/HI30" component={HerramientaIndustrial30Desc}></Route>
          <Route exact path="/HI31" component={HerramientaIndustrial31Desc}></Route>
          <Route exact path="/HI32" component={HerramientaIndustrial32Desc}></Route>
          <Route exact path="/HI33" component={HerramientaIndustrial33Desc}></Route>
          <Route exact path="/HI34" component={HerramientaIndustrial34Desc}></Route>
          <Route exact path="/HI35" component={HerramientaIndustrial35Desc}></Route>
          <Route exact path="/HI36" component={HerramientaIndustrial36Desc}></Route>
          <Route exact path="/HI37" component={HerramientaIndustrial37Desc}></Route>
          <Route exact path="/HI38" component={HerramientaIndustrial38Desc}></Route>
          <Route exact path="/HI39" component={HerramientaIndustrial39Desc}></Route>
          <Route exact path="/HI40" component={HerramientaIndustrial40Desc}></Route>
          <Route exact path="/HI41" component={HerramientaIndustrial41Desc}></Route>
          <Route exact path="/HI42" component={HerramientaIndustrial42Desc}></Route>
          <Route exact path="/HI43" component={HerramientaIndustrial43Desc}></Route>


          <Route exact path="/dado1" component={Dado1Desc}></Route>
          <Route exact path="/dado2" component={Dado2Desc}></Route>
          <Route exact path="/dado3" component={Dado3Desc}></Route>
          <Route exact path="/dado4" component={Dado4Desc}></Route>
          <Route exact path="/dado5" component={Dado5Desc}></Route>
          <Route exact path="/dado6" component={Dado6Desc}></Route>

          <Route exact path="/punta1Desc" component={Punta1Desc}></Route>
          <Route exact path="/punta2Desc" component={Punta2Desc}></Route>
          <Route exact path="/punta3Desc" component={Punta3Desc}></Route>
          <Route exact path="/punta4Desc" component={Punta4Desc}></Route>
          <Route exact path="/punta5Desc" component={Punta5Desc}></Route>
          <Route exact path="/punta6Desc" component={Punta6Desc}></Route>
          <Route exact path="/punta7Desc" component={Punta7Desc}></Route>
          <Route exact path="/punta8Desc" component={Punta8Desc}></Route>
          <Route exact path="/punta9Desc" component={Punta9Desc}></Route>
          <Route exact path="/punta10Desc" component={Punta10Desc}></Route>
          <Route exact path="/punta11Desc" component={Punta11Desc}></Route>
          <Route exact path="/punta12Desc" component={Punta12Desc}></Route>
          <Route exact path="/punta13Desc" component={Punta13Desc}></Route>
          <Route exact path="/punta14Desc" component={Punta14Desc}></Route>
          <Route exact path="/punta15Desc" component={Punta15Desc}></Route>
          <Route exact path="/punta16Desc" component={Punta16Desc}></Route>
          <Route exact path="/punta17Desc" component={Punta17Desc}></Route>
          <Route exact path="/punta18Desc" component={Punta18Desc}></Route>
          <Route exact path="/punta19Desc" component={Punta19Desc}></Route>
          <Route exact path="/punta20Desc" component={Punta20Desc}></Route>
          <Route exact path="/punta21Desc" component={Punta21Desc}></Route>
          <Route exact path="/punta22Desc" component={Punta22Desc}></Route>
          <Route exact path="/punta23Desc" component={Punta23Desc}></Route>
          <Route exact path="/punta24Desc" component={Punta24Desc}></Route>
          <Route exact path="/punta25Desc" component={Punta25Desc}></Route>
          <Route exact path="/punta26Desc" component={Punta26Desc}></Route>
          <Route exact path="/punta27Desc" component={Punta27Desc}></Route>
          <Route exact path="/punta28Desc" component={Punta28Desc}></Route>
          <Route exact path="/punta29Desc" component={Punta29Desc}></Route>

          <Route exact path="/resistencia1" component={Resistencia1Desc}></Route>
          <Route exact path="/resistencia2" component={Resistencia2Desc}></Route>
          <Route exact path="/resistencia3" component={Resistencia3Desc}></Route>
          <Route exact path="/resistencia4" component={Resistencia4Desc}></Route>
          <Route exact path="/resistencia5" component={Resistencia5Desc}></Route>
          <Route exact path="/resistencia6" component={Resistencia6Desc}></Route>
          <Route exact path="/resistencia7" component={Resistencia7Desc}></Route>

          <Route exact path="/adaptador1" component={Adaptador1Desc}></Route>
          <Route exact path="/adaptador2" component={Adaptador2Desc}></Route>
          <Route exact path="/adaptador3" component={Adaptador3Desc}></Route>

          <Route exact path="/extension1" component={Extension1Desc}></Route>
          <Route exact path="/extension2" component={Extension2Desc}></Route>
          <Route exact path="/extension3" component={Extension3Desc}></Route>
          <Route exact path="/extension4" component={Extension4Desc}></Route>
          <Route exact path="/extension6" component={Extension6Desc}></Route>
          <Route exact path="/extension7" component={Extension7Desc}></Route>

          <Route exact path="/polipastoN1" component={PolipastoN1Desc}></Route>
          <Route exact path="/polipastoN2" component={PolipastoN2Desc}></Route>
          <Route exact path="/polipastoN3" component={PolipastoN3Desc}></Route>
          <Route exact path="/polipastoN4" component={PolipastoN4Desc}></Route>
          <Route exact path="/polipastoN5" component={PolipastoN5Desc}></Route>
          <Route exact path="/polipastoN6" component={PolipastoN6Desc}></Route>

          <Route exact path="/polipastoE1" component={PolipastoE1Desc}></Route>
          <Route exact path="/polipastoE2" component={PolipastoE2Desc}></Route>
          <Route exact path="/polipastoE3" component={PolipastoE3Desc}></Route>
          <Route exact path="/polipastoE4" component={PolipastoE4Desc}></Route>
          <Route exact path="/polipastoE5" component={PolipastoE5Desc}></Route>
          <Route exact path="/polipastoE6" component={PolipastoE6Desc}></Route>
          <Route exact path="/polipastoE7" component={PolipastoE7Desc}></Route>
          <Route exact path="/polipastoE8" component={PolipastoE8Desc}></Route>
          <Route exact path="/polipastoE9" component={PolipastoE9Desc}></Route>

          <Route exact path="/balancinN1" component={BalancinN1Desc}></Route>
          <Route exact path="/balancinN2" component={BalancinN2Desc}></Route>
          <Route exact path="/balancinN3" component={BalancinN3Desc}></Route>

          <Route exact path="/balancinE1" component={BalancinE1Desc}></Route>
          <Route exact path="/balancinE2" component={BalancinE2Desc}></Route>
          <Route exact path="/balancinE3" component={BalancinE3Desc}></Route>
          <Route exact path="/balancinE4" component={BalancinE4Desc}></Route>

          <Route exact path="/accesorio1" component={Accesorio1Desc}></Route>
          <Route exact path="/accesorio2" component={Accesorio2Desc}></Route>
          <Route exact path="/accesorio3" component={Accesorio3Desc}></Route>
          <Route exact path="/accesorio4" component={Accesorio4Desc}></Route>
          <Route exact path="/accesorio5" component={Accesorio5Desc}></Route>
          <Route exact path="/accesorio6" component={Accesorio6Desc}></Route>
          <Route exact path="/accesorio7" component={Accesorio7Desc}></Route>
          <Route exact path="/accesorio8" component={Accesorio8Desc}></Route>
          <Route exact path="/accesorio9" component={Accesorio9Desc}></Route>
          <Route exact path="/accesorio10" component={Accesorio10Desc}></Route>
          <Route exact path="/accesorio11" component={Accesorio11Desc}></Route>
          <Route exact path="/accesorio12" component={Accesorio12Desc}></Route>
          <Route exact path="/accesorio13" component={Accesorio13Desc}></Route>
          <Route exact path="/accesorio14" component={Accesorio14Desc}></Route>
          <Route exact path="/accesorio15" component={Accesorio15Desc}></Route>
          <Route exact path="/accesorio16" component={Accesorio16Desc}></Route>
          <Route exact path="/accesorio17" component={Accesorio17Desc}></Route>

          <Route exact path="/DispAut1" component={DispAut1Desc}></Route>
          <Route exact path="/DispAut2" component={DispAut2Desc}></Route>

          <Route exact path="/EquiposHotMelt1" component={EquiposHotMelt1Desc}></Route>
          <Route exact path="/EquiposHotMelt2" component={EquiposHotMelt2Desc}></Route>

          <Route exact path="/Equipo2k1" component={Equipo2k1Desc}></Route>
          <Route exact path="/Equipo2k2" component={Equipo2k2Desc}></Route>
          <Route exact path="/Equipo2k3" component={Equipo2k3Desc}></Route>

          
          

          <Route exact path="/ValvulaDispensacion1" component={ValvulaDispensacion1Desc}></Route>
          <Route exact path="/ValvulaDispensacion2" component={ValvulaDispensacion2Desc}></Route>

          <Route exact path="/SistemaSuministro1" component={SistemaSuministro1Desc}></Route>
          <Route exact path="/SistemaSuministro2" component={SistemaSuministro2Desc}></Route>

          <Route exact path="/aviso_privacidad" component={AvisoPrivacidad}></Route>

          <Route exact path="/equipo_automatizado1" component={EquipoAutomatizado1Desc}/>
          <Route exact path="/equipo_automatizado2" component={EquipoAutomatizado2Desc}/>
          <Route exact path="/equipo_automatizado3" component={EquipoAutomatizado3Desc}/>
          <Route exact path="/equipo_automatizado4" component={EquipoAutomatizado4Desc}/>

          <Route exact path="/equipo_curado1" component={EquipoCurado1Desc}/>

          <Route exact path="/equipo_recubrimiento1" component={EquipoRecubrimiento1Desc}/>
          <Route exact path="/equipo_recubrimiento2" component={EquipoRecubrimiento2Desc}/>
          <Route exact path="/equipo_recubrimiento3" component={EquipoRecubrimiento3Desc}/>
          <Route exact path="/equipo_recubrimiento4" component={EquipoRecubrimiento4Desc}/>
          <Route exact path="/equipo_recubrimiento5" component={EquipoRecubrimiento5Desc}/>
          <Route exact path="/equipo_recubrimiento6" component={EquipoRecubrimiento6Desc}/>
          <Route exact path="/equipo_recubrimiento7" component={EquipoRecubrimiento7Desc}/>
          <Route exact path="/equipo_recubrimiento8" component={EquipoRecubrimiento8Desc}/>
          <Route exact path="/equipo_recubrimiento9" component={EquipoRecubrimiento9Desc}/>
          <Route exact path="/equipo_recubrimiento10" component={EquipoRecubrimiento10Desc}/>
          <Route exact path="/equipo_recubrimiento11" component={EquipoRecubrimiento11Desc}/>
          <Route exact path="/equipo_recubrimiento12" component={EquipoRecubrimiento12Desc}/>
          <Route exact path="/equipo_recubrimiento13" component={EquipoRecubrimiento13Desc}/>
          <Route exact path="/equipo_recubrimiento14" component={EquipoRecubrimiento14Desc}/>
          <Route exact path="/equipo_recubrimiento15" component={EquipoRecubrimiento15Desc}/>
          <Route exact path="/equipo_recubrimiento16" component={EquipoRecubrimiento16Desc}/>
          <Route exact path="/equipo_recubrimiento17" component={EquipoRecubrimiento17Desc}/>
          <Route exact path="/equipo_recubrimiento18" component={EquipoRecubrimiento18Desc}/>
          <Route exact path="/equipo_recubrimiento19" component={EquipoRecubrimiento19Desc}/>
          <Route exact path="/equipo_recubrimiento20" component={EquipoRecubrimiento20Desc}/>
          <Route exact path="/equipo_recubrimiento21" component={EquipoRecubrimiento21Desc}/>
          <Route exact path="/equipo_recubrimiento22" component={EquipoRecubrimiento22Desc}/>
          <Route exact path="/equipo_recubrimiento23" component={EquipoRecubrimiento23Desc}/>
          <Route exact path="/equipo_recubrimiento24" component={EquipoRecubrimiento24Desc}/>
          <Route exact path="/equipo_recubrimiento25" component={EquipoRecubrimiento25Desc}/>
          <Route exact path="/equipo_recubrimiento26" component={EquipoRecubrimiento26Desc}/>
          <Route exact path="/equipo_recubrimiento27" component={EquipoRecubrimiento27Desc}/>
          <Route exact path="/equipo_recubrimiento28" component={EquipoRecubrimiento28Desc}/>
          <Route exact path="/equipo_recubrimiento29" component={EquipoRecubrimiento29Desc}/>
          <Route exact path="/equipo_recubrimiento30" component={EquipoRecubrimiento30Desc}/>
          <Route exact path="/equipo_recubrimiento31" component={EquipoRecubrimiento31Desc}/>

          <Route exact path="/dosificador1" component={Dosificador1Desc}/>
          <Route exact path="/dosificador2" component={Dosificador2Desc}/>
          <Route exact path="/dosificador3" component={Dosificador3Desc}/>
          <Route exact path="/dosificador4" component={Dosificador4Desc}/>
          <Route exact path="/dosificador5" component={Dosificador5Desc}/>
          <Route exact path="/dosificador6" component={Dosificador6Desc}/>  
          
          <Route exact path="/SistemaMedicionEq1" component={SistemaMedicionEq1Desc}/>  
          <Route exact path="/SistemaMedicionEq2" component={SistemaMedicionEq2Desc}/>  
          <Route exact path="/SistemaMedicionEq3" component={SistemaMedicionEq3Desc}/>  
          
          <Route exact path="/pistola_electrostatica1" component={PistolaElectrostatica1Desc}/>  
          <Route exact path="/pistola_electrostatica2" component={PistolaElectrostatica2Desc}/>  

          <Route exact path="/bomba_suministro1" component={BombaSuministro1Desc}/>  
          <Route exact path="/bomba_suministro2" component={BombaSuministro2Desc}/>  
          <Route exact path="/bomba_suministro3" component={BombaSuministro3Desc}/>  
          <Route exact path="/bomba_suministro4" component={BombaSuministro4Desc}/>  
          <Route exact path="/bomba_suministro5" component={BombaSuministro5Desc}/>  
          <Route exact path="/bomba_suministro6" component={BombaSuministro6Desc}/>  
          <Route exact path="/bomba_suministro7" component={BombaSuministro7Desc}/>  
          <Route exact path="/bomba_suministro8" component={BombaSuministro8Desc}/>  

          <Route exact path="/paquete_bomba1" component={PaqueteBomba1Desc}/>  
          <Route exact path="/paquete_bomba2" component={PaqueteBomba2Desc}/>  
          <Route exact path="/paquete_bomba3" component={PaqueteBomba3Desc}/>  
          <Route exact path="/paquete_bomba4" component={PaqueteBomba4Desc}/>  
          <Route exact path="/paquete_bomba5" component={PaqueteBomba5Desc}/>  
          <Route exact path="/paquete_bomba6" component={PaqueteBomba6Desc}/>  
          <Route exact path="/paquete_bomba7" component={PaqueteBomba7Desc}/>  

          <Route exact path="/equipo_sanitizante1" component={EquipoSanitizante1Desc}/>  
          <Route exact path="/equipo_sanitizante2" component={EquipoSanitizante2Desc}/>  
          <Route exact path="/equipo_sanitizante3" component={EquipoSanitizante3Desc}/>  
            
          <Route exact path="/pistola1" component={Pistola1Desc}/>  
          <Route exact path="/pistola2" component={Pistola2Desc}/>  
          <Route exact path="/pistola3" component={Pistola3Desc}/>  
          <Route exact path="/pistola4" component={Pistola4Desc}/>  
          <Route exact path="/pistola5" component={Pistola5Desc}/>  
          <Route exact path="/pistola6" component={Pistola6Desc}/>  
          <Route exact path="/pistola7" component={Pistola7Desc}/>  
          <Route exact path="/pistola8" component={Pistola8Desc}/>  
          <Route exact path="/pistola9" component={Pistola9Desc}/>  
          <Route exact path="/pistola10" component={Pistola10Desc}/>  
          <Route exact path="/pistola11" component={Pistola11Desc}/>  
          <Route exact path="/pistola12" component={Pistola12Desc}/>  
          <Route exact path="/pistola13" component={Pistola13Desc}/>  
          <Route exact path="/pistola14" component={Pistola14Desc}/>  
          <Route exact path="/pistola15" component={Pistola15Desc}/>  
       
          <Route exact path="/bomba_diafragma1" component={BombaDiafragma1Desc}/>  
          <Route exact path="/bomba_diafragma2" component={BombaDiafragma2Desc}/>  
          <Route exact path="/bomba_diafragma3" component={BombaDiafragma3Desc}/>  
          <Route exact path="/bomba_diafragma4" component={BombaDiafragma4Desc}/>  
          <Route exact path="/bomba_diafragma5" component={BombaDiafragma5Desc}/>  
          <Route exact path="/bomba_diafragma6" component={BombaDiafragma6Desc}/>  
          <Route exact path="/bomba_diafragma7" component={BombaDiafragma7Desc}/>  
          <Route exact path="/bomba_diafragma8" component={BombaDiafragma8Desc}/>  
          <Route exact path="/bomba_diafragma9" component={BombaDiafragma9Desc}/>  
          <Route exact path="/bomba_diafragma10" component={BombaDiafragma10Desc}/>  
          <Route exact path="/bomba_diafragma11" component={BombaDiafragma11Desc}/>  
          <Route exact path="/bomba_diafragma12" component={BombaDiafragma12Desc}/>  
          <Route exact path="/bomba_diafragma13" component={BombaDiafragma13Desc}/>  
          <Route exact path="/bomba_diafragma14" component={BombaDiafragma14Desc}/>  
          <Route exact path="/bomba_diafragma15" component={BombaDiafragma15Desc}/>  
          <Route exact path="/bomba_diafragma16" component={BombaDiafragma16Desc}/>  
          <Route exact path="/bomba_diafragma17" component={BombaDiafragma17Desc}/>  
          <Route exact path="/bomba_diafragma18" component={BombaDiafragma18Desc}/>  
          <Route exact path="/bomba_diafragma19" component={BombaDiafragma19Desc}/>  
          <Route exact path="/bomba_diafragma20" component={BombaDiafragma20Desc}/>  
          <Route exact path="/bomba_diafragma21" component={BombaDiafragma21Desc}/>  
          <Route exact path="/bomba_diafragma22" component={BombaDiafragma22Desc}/>  
          <Route exact path="/bomba_diafragma23" component={BombaDiafragma23Desc}/>  
          <Route exact path="/bomba_diafragma24" component={BombaDiafragma24Desc}/>  
          <Route exact path="/bomba_diafragma25" component={BombaDiafragma25Desc}/>  
          <Route exact path="/bomba_diafragma26" component={BombaDiafragma26Desc}/>  
          <Route exact path="/bomba_diafragma27" component={BombaDiafragma27Desc}/>  
          <Route exact path="/bomba_diafragma28" component={BombaDiafragma28Desc}/>  
          <Route exact path="/bomba_diafragma29" component={BombaDiafragma29Desc}/>  
          <Route exact path="/bomba_diafragma30" component={BombaDiafragma30Desc}/>  
          <Route exact path="/bomba_diafragma31" component={BombaDiafragma31Desc}/>  
          <Route exact path="/bomba_diafragma32" component={BombaDiafragma32Desc}/>  
          
          <Route exact path="/bombaGrasa1" component={BombaGrasa1Desc}/>  
          <Route exact path="/bombaGrasa2" component={BombaGrasa2Desc}/>  
          <Route exact path="/bombaGrasa3" component={BombaGrasa3Desc}/>  
          <Route exact path="/bombaGrasa4" component={BombaGrasa4Desc}/>  
          <Route exact path="/bombaGrasa5" component={BombaGrasa5Desc}/>  
          <Route exact path="/bombaGrasa6" component={BombaGrasa6Desc}/>  
          <Route exact path="/bombaGrasa7" component={BombaGrasa7Desc}/>  
          <Route exact path="/bombaGrasa8" component={BombaGrasa8Desc}/>  



          <Route exact path="/tanque1" component={Tanque1Desc}/>  

          <Route exact path="/bombaPiston1" component={BombaPiston1Desc}/>  
          <Route exact path="/bombaPiston2" component={BombaPiston2Desc}/>  
          <Route exact path="/bombaPiston3" component={BombaPiston3Desc}/>  
          <Route exact path="/bombaPiston4" component={BombaPiston4Desc}/>  
          <Route exact path="/bombaPiston5" component={BombaPiston5Desc}/>  
          <Route exact path="/bombaPiston6" component={BombaPiston6Desc}/>  
          <Route exact path="/bombaPiston7" component={BombaPiston7Desc}/>  
          <Route exact path="/bombaPiston8" component={BombaPiston8Desc}/>  
          <Route exact path="/bombaPiston9" component={BombaPiston9Desc}/>  
          <Route exact path="/bombaPiston10" component={BombaPiston10Desc}/>  
          <Route exact path="/bombaPiston11" component={BombaPiston11Desc}/>  
          <Route exact path="/bombaPiston12" component={BombaPiston12Desc}/>  
          <Route exact path="/bombaPiston13" component={BombaPiston13Desc}/>  
          <Route exact path="/bombaPiston14" component={BombaPiston14Desc}/>  
          <Route exact path="/bombaPiston15" component={BombaPiston15Desc}/>  
          

          <Route exact path="/bomba_transf_polvos1" component={BombaTransfPolvos1Desc}/>  
          <Route exact path="/bomba_transf_polvos2" component={BombaTransfPolvos2Desc}/>  

          <Route exact path="/bomba_compuerta1" component={BombaCompuerta1Desc}/>  
          <Route exact path="/bomba_compuerta2" component={BombaCompuerta2Desc}/>  

          {/* <Route exact path="/bomba_interfaz_electronica1" component={BombaInterfazElectronica1Desc}/>  
          <Route exact path="/bomba_interfaz_electronica2" component={BombaInterfazElectronica2Desc}/>   */}
          
          <Route exact path="/bomba_alta_presion1" component={BombaAltaPresion1Desc}/>  

          <Route exact path="/bombaPseudo1" component={BombaPseudoSanitaria1Desc}/>  
          <Route exact path="/bombaPseudo2" component={BombaPseudoSanitaria2Desc}/>  

          <Route exact path="/bombaSanitaria1" component={BombaSanitaria1Desc}/>  
          <Route exact path="/bombaSanitaria2" component={BombaSanitaria2Desc}/>  
          <Route exact path="/bombaSanitaria3" component={BombaSanitaria3Desc}/>  
          <Route exact path="/bombaSanitaria4" component={BombaSanitaria4Desc}/>  
          <Route exact path="/bombaSanitaria5" component={BombaSanitaria5Desc}/>  
          <Route exact path="/bombaSanitaria6" component={BombaSanitaria6Desc}/>  
          <Route exact path="/bombaSanitaria7" component={BombaSanitaria7Desc}/>  
          <Route exact path="/bombaSanitaria8" component={BombaSanitaria8Desc}/>  
          <Route exact path="/bombaSanitaria9" component={BombaSanitaria9Desc}/>  
          <Route exact path="/bombaSanitaria10" component={BombaSanitaria10Desc}/>  
          <Route exact path="/bombaSanitaria11" component={BombaSanitaria11Desc}/>  
          <Route exact path="/bombaSanitaria12" component={BombaSanitaria12Desc}/>  
          <Route exact path="/bombaSanitaria13" component={BombaSanitaria13Desc}/>  
          <Route exact path="/bombaSanitaria14" component={BombaSanitaria14Desc}/>  
          <Route exact path="/bombaSanitaria15" component={BombaSanitaria15Desc}/>  

          <Route exact path="/bomba_centrifuga1" component={BombaCentrifuga1Desc}/>  

          <Route exact path="/herramienta_torque1" component={HerramientaTorque1Desc}/>  
          <Route exact path="/herramienta_torque2" component={HerramientaTorque2Desc}/>  
          <Route exact path="/herramienta_torque3" component={HerramientaTorque3Desc}/>  
          <Route exact path="/herramienta_torque4" component={HerramientaTorque4Desc}/>  
          <Route exact path="/herramienta_torque5" component={HerramientaTorque5Desc}/>  
          <Route exact path="/herramienta_torque6" component={HerramientaTorque6Desc}/>  
          <Route exact path="/herramienta_torque7" component={HerramientaTorque7Desc}/>  
          <Route exact path="/herramienta_torque8" component={HerramientaTorque8Desc}/>  
          <Route exact path="/herramienta_torque9" component={HerramientaTorque9Desc}/>  
          <Route exact path="/herramienta_torque10" component={HerramientaTorque10Desc}/>  
          <Route exact path="/herramienta_torque11" component={HerramientaTorque11Desc}/>  
          <Route exact path="/herramienta_torque12" component={HerramientaTorque12Desc}/>  
          <Route exact path="/herramienta_torque13" component={HerramientaTorque13Desc}/>  
          <Route exact path="/herramienta_torque14" component={HerramientaTorque14Desc}/>  
       
          <Route exact path="/herramienta_torque16" component={HerramientaTorque16Desc}/>  
          <Route exact path="/herramienta_torque17" component={HerramientaTorque17Desc}/>  

          <Route exact path="/herramienta_torque19" component={HerramientaTorque19Desc}/>  
          <Route exact path="/herramienta_torque20" component={HerramientaTorque20Desc}/>  
          <Route exact path="/herramienta_torque21" component={HerramientaTorque21Desc}/>  
          <Route exact path="/herramienta_torque22" component={HerramientaTorque22Desc}/>  
          <Route exact path="/herramienta_torque23" component={HerramientaTorque23Desc}/>  
          <Route exact path="/herramienta_torque24" component={HerramientaTorque24Desc}/>  
          <Route exact path="/herramienta_torque25" component={HerramientaTorque25Desc}/>  
          <Route exact path="/herramienta_torque26" component={HerramientaTorque26Desc}/>  
          
          {/* <Route exact path="/blog" component={Blog}/>  */} 


        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
