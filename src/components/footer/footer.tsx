import Exclusive from "../exclusive/exclusive";
import FooterColumnAnchor from "./footerColumnAnchor";
import FooterColumnHeadItem from "./footerColumnHead";
import FooterColumnLink from "./footerColumnLink";

export default function Footer() {
    return (
        <div className="bg-black text-white w-full px-6 py-10 md:px-12 lg:px-24" id="footer">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
                <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                    <Exclusive theme="dark" />
                    <FooterColumnHeadItem className="text-sm sm:text-base">
                        Subscribe
                    </FooterColumnHeadItem>
                    <FooterColumnAnchor
                        cutoffs={[12]}
                        className="text-xs sm:text-sm text-gray-300"
                    >
                        Get 10% off your first order
                    </FooterColumnAnchor>
                </div>

                <div className="flex flex-col gap-3">
                    <FooterColumnHeadItem className="text-sm sm:text-base">
                        Support
                    </FooterColumnHeadItem>
                    <FooterColumnAnchor
                        cutoffs={[25]}
                        className="text-xs sm:text-sm text-gray-300"
                    >
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </FooterColumnAnchor>
                    <FooterColumnAnchor
                        href="mailto:exclusive@gmail.com"
                        className="text-xs sm:text-sm text-gray-300"
                    >
                        exclusive@gmail.com
                    </FooterColumnAnchor>
                    <FooterColumnAnchor
                        href="tel:+88015888889999"
                        className="text-xs sm:text-sm text-gray-300"
                    >
                        +88015-88888-9999
                    </FooterColumnAnchor>
                </div>

                <div className="flex flex-col gap-3">
                    <FooterColumnHeadItem className="text-sm sm:text-base">
                        Account
                    </FooterColumnHeadItem>
                    <FooterColumnLink target="/account" className="text-xs sm:text-sm">
                        My Account
                    </FooterColumnLink>
                    <FooterColumnLink target="/cart" className="text-xs sm:text-sm">
                        Cart
                    </FooterColumnLink>
                    <FooterColumnLink target="/wishlist" className="text-xs sm:text-sm">
                        Wishlist
                    </FooterColumnLink>
                    <FooterColumnLink target="/shop" className="text-xs sm:text-sm">
                        Shop
                    </FooterColumnLink>
                </div>

                <div className="flex flex-col gap-3">
                    <FooterColumnHeadItem className="text-sm sm:text-base">
                        Quick Link
                    </FooterColumnHeadItem>
                    <FooterColumnLink target="/privacy-policy" className="text-xs sm:text-sm">
                        Privacy Policy
                    </FooterColumnLink>
                    <FooterColumnLink target="/terms-of-use" className="text-xs sm:text-sm">
                        Terms Of Use
                    </FooterColumnLink>
                    <FooterColumnLink target="/faq" className="text-xs sm:text-sm">
                        FAQ
                    </FooterColumnLink>
                    <FooterColumnLink target="/contact" className="text-xs sm:text-sm">
                        Contact
                    </FooterColumnLink>
                </div>

                <div className="flex flex-col gap-3">
                    <FooterColumnHeadItem className="text-sm sm:text-base">
                        Download App
                    </FooterColumnHeadItem>
                    <div className="flex gap-3">
                        <img src="/Icon-Facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
                        <img src="/Vector.svg" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
                        <img src="/icon-instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                        <img src="/Icon-Linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}