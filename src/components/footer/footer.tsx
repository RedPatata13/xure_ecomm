import Exclusive from "../exclusive/exclusive";
import FooterColumnAnchor from "./footerColumnAnchor";
import FooterColumnHeadItem from "./footerColumnHead";
import FooterColumnLink from "./footerColumnLink";

export default function Footer() {
	return (
		<div className="bg-black text-white w-full px-6 py-8 md:px-12 lg:px-24 justify-items-center" id="footer">
			<div className="flex flex-wrap gap-10 sm:grid-cols-3 lg:grid-cols-5 justify-center sm:justify-between">

				<div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
					<Exclusive theme="dark" />
					<FooterColumnHeadItem>Support</FooterColumnHeadItem>
					<FooterColumnAnchor
						cutoffs={[12]}
					>
						Get 10% off your first order
					</FooterColumnAnchor>
				</div>

				<div className="flex flex-col gap-2">
					<FooterColumnHeadItem>Support</FooterColumnHeadItem>

					<FooterColumnAnchor
						cutoffs={[25]}
					>
						111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
					</FooterColumnAnchor>

					<FooterColumnAnchor href="mailto:exclusive@gmail.com">
						exclusive@gmail.com
					</FooterColumnAnchor>

					<FooterColumnAnchor href="tel:+88015888889999">
						+88015-88888-9999
					</FooterColumnAnchor>
				</div>

				<div className="flex flex-col gap-2">
					<FooterColumnHeadItem>Account</FooterColumnHeadItem>

					<FooterColumnLink target="/account">
						My Account
					</FooterColumnLink>

					<FooterColumnLink target="/cart">
						Cart
					</FooterColumnLink>

					<FooterColumnLink target="/wishlist">
						Wishlist
					</FooterColumnLink>

					<FooterColumnLink target="/shop">
						Shop
					</FooterColumnLink>
				</div>

				<div className="flex flex-col gap-2">
					<FooterColumnHeadItem>Quick Link</FooterColumnHeadItem>

					<FooterColumnLink target="/privacy-policy">
						Privacy Policy
					</FooterColumnLink>

					<FooterColumnLink target="/terms-of-use">
						Terms Of Use
					</FooterColumnLink>

					<FooterColumnLink target="/faq">
						FAQ
					</FooterColumnLink>

					<FooterColumnLink target="/contact">
						Contact
					</FooterColumnLink>
				</div>

				<div className="flex flex-col gap-2">
					<FooterColumnHeadItem>Download App</FooterColumnHeadItem>

					<div className="flex gap-3">
						<img src="/Icon-Facebook.svg" alt="Facebook" />
						<img src="/Vector.svg" alt="Twitter" />
						<img src="/icon-instagram.svg" alt="Instagram" />
						<img src="/Icon-Linkedin.svg" alt="LinkedIn" />
					</div>
				</div>

			</div>
		</div>
	);
}