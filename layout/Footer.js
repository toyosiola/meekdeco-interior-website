import Image from "next/image";
import Link from "next/link";

function FooterLink({ href = "#", title }) {
  return (
    <li className="mb-4 text-base">
      <Link href={href}>{title}</Link>
    </li>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-primary font-semibold text-white">
      {/* footer container */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-15 pb-4 ">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:items-start">
          {/* logo container */}
          <div className="self-start">
            <Link href="/">
              <Image
                src="/images/logo-white.png"
                width={173}
                height={57}
                alt="MeekDeco logo"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:flex-row lg:gap-24 mb-8">
            <ul>
              <h4 className=" mb-5 text-xl text-white">Company</h4>
              <FooterLink href="/about" title="About us" />
              <FooterLink href="/product" title="Product" />
              <FooterLink title="Services" />
              <FooterLink title="Terms of services" />
              <FooterLink title="Privacy Policy" />
            </ul>
            <ul>
              <h4 className=" mb-5 text-xl text-white">Contact</h4>
              <FooterLink href="/contact" title="Contact us" />
              <FooterLink title="Help center" />
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-8">
          <p className="text-base mb-2">
            Get in touch with us, Subscribe to our Newsletter!
          </p>
          {/* FORM */}
          <form className="bg-white p-3 rounded-md max-w-2xl space-y-4  xs:flex xs:space-y-0">
            <input
              type="email"
              className="w-full p-4 text-xs flex-grow text-[#8c8c8d] focus:outline-none xs:w-auto"
              placeholder="Enter your email address"
            />
            <button className="btn block mx-auto text-lg py-3 px-6 rounded-md xs:mx-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* LINE */}
      <div className="w-full border-t border-white"></div>
      <p className="mt-4 text-base text-center font-semibold text-white">
        &copy; 2022 MeekDeco. All rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
