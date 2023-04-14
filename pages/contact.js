import { LocationIcon, MailIcon, PhoneIcon } from "../assets/icons";
import Image from "next/image";

function ContactItem({ icon, title, details }) {
  return (
    <div className="mb-11 flex items-start gap-4">
      <div className="px-6 py-7 bg-primary text-white">{icon}</div>
      <div className="space-y-2 text-secondary">
        <h3>{title}</h3>
        <p className="max-w-[15rem] text-lg lg:text-xl">{details}</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section className="mb-16 md:mb-32">
      {/* GLOBAL CONTAINER */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
        {/* flex container */}
        <div className="mb-16 space-y-6 gap-4  items-center md:space-y-0 md:mb-32 md:flex">
          {/* flex item 1 */}
          <div className="basis-[calc(50%-1rem)]">
            {/* section container */}
            <div className="flex gap-4 items-center">
              <div className="w-16 border-4 border-primary"></div>
              <h3 className="text-primary ">Contact us?</h3>
            </div>
            <h1 className="mb-16 text-3xl lg:text-5xl lg:leading-[1.36]">
              Get in Touch with Us
            </h1>

            {/* contact details */}
            <ContactItem
              icon={<LocationIcon />}
              title="Our Location"
              details="Plot 6, Sangotedo Market Ajah, Lagos"
            />

            <ContactItem
              icon={<PhoneIcon />}
              title="Phone no"
              details="2348122334455"
            />

            <ContactItem
              icon={<MailIcon />}
              title="Email"
              details="info@meekdeco.com"
            />
          </div>

          {/* flex item 2 */}
          <div className="basis-[calc(50%-1rem)]">
            <Image
              src="/images/contact/phone-desk.png"
              width="650"
              height="640"
            />
          </div>
        </div>

        {/* image container */}
        <div className="">
          <Image src="/images/contact/map.png" width="1320" height="434" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
