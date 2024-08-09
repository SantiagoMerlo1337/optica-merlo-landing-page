import { socialMedia } from "@/components/constants";
import SocialMediaButton from "@/components/shared/SocialMediaButton";

const Contacto = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <iframe
            className="w-full h-full min-h-72 lg:min-h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.86727391933!2d-61.49295852363709!3d-31.252097374338003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae45c2216e65%3A0x3e72d28866ef1584!2sOptica%20Merlo!5e0!3m2!1ses!2sar!4v1722759926233!5m2!1ses!2sar"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

        <ul>
          {socialMedia.map((item)=>
            (
              <li className="w-fit mx-auto lg:mx-0 mb-4" key={item.url}>
                <SocialMediaButton
                url={item.url}
                label={item.label}
                imgUrl={item.imgUrl}
                otherClasses={item.otherClasses}
                />
              </li>
            )
          )}
          <div>
            <li className="w-fit mx-auto lg:mx-0">
              <p><span className="font-bold">Telefono:</span> 03492 42-2462</p>
            </li>
            <li className="w-fit mx-auto lg:mx-0">
              <p><span className="font-bold">Dirección:</span> Lavalle 90 (Frente a la plaza 25 de mayo)</p>
            </li>
          </div>
        </ul>
      </div>
    );
};

export default Contacto;
