import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "../styles/Footer.scss"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__info">
          <span>
            Universidad de Antioquia | Vigilada Mineducación | Acreditación
            institucional hasta el 2022{" "}<br/>
          </span>
          <span>
            Recepción de correspondencia: calle 70 No. 52 - 21 | Apartado Aéreo
            1226 | Dirección: calle 67 No. 53 - 108 |{" "}
            <Link to="http://portal.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/horario-atencion-publico/">
              Horario de atención{" "}
            </Link><br/>
          </span>
          <span>
            Conmutador: [57+4] 219 8332 | Línea gratuita de atención al
            ciudadano: 018000 416384 | Fax: [57+4] 263 8282 |{" "}
            <Link to="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/pqrs/!ut/p/z1/zVJNj4IwEP0revBIWihgORIWv1b8xg8uphbQbqSgVLPZX7_FRLOyusbEw_bU6bx5nXnzQADmIODkyNZEsJSTrYwXgbnElqOptg67_dEUQ9sc-81ec6g2TQhmJUCrUQB020JWXx27KgieqofvqgHtoTvoTfrO4K2jPVn_G1DUwzvHhmAKAhBQLjKxAYss3QuyPYQRqUGSX0ebNInOd8ZzwcSBnjSSDyLixb1CthXKDiEJCU_Pz1WKqitUztGUyywLC1h-CfIk4ocazHb7vGgroywEixihOtJXVIFqjBUdQ0Mhmh4pMTJJRDXVIpSCziOd5CK1ved4a0lLxEZhPE7B_PIzmJfbAPNTG7KOfex2gS1VKvKfQib-kUyzQqifozdHHUeO7thufTxVR0NYBtyw6DUAQ9yQHpx0Xd33IOwbZcANkz6y2ULatH5_P3UwfnLhfxN65qsJ0YsJXf3VhK8dueV1jKcJs8T3_QQjY7vGwmqztkJWGCIjO35N4iRZ9jy7-g1jDDgi/dz/d5/L2dBISEvZ0FBIS9nQSEh/?urile=wcm%3Apath%3A%2FPortalUdeA%2FasPortalUdeA%2FasHomeUdeA%2FasInstitucional%2FAtencion%20al%20ciudadano%2FAtenci!c3!b3n%20al%20ciudadano%2FContenido%2FasContenidosMenu%2Fpqrs">
              Peticiones, Quejas, Reclamos y Sugerencias
            </Link>{" "}<br/>
          </span>
          <span>NIT 890980040-8<br/></span>
          <span>
            <Link to="http://www.udea.edu.co/wps/wcm/connect/udea/328fd736-37e3-46b0-b43c-beb24cb8c6e3/rr-39994.pdf?MOD=AJPERES&amp;CVID=lZbell4&amp;CVID=lZbell4&amp;CVID=lZbell4&amp;CVID=lZbell4&amp;CVID=lZbell4&amp;CVID=lZbell4">
              Política de Tratamiento de Datos Personales
            </Link><br/>
          </span>
          <span>
            Medellín - Colombia | Todos los Derechos Reservados © 2018<br/>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
