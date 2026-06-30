import { CircleDollarSign, Gift, Handbag, Store } from "lucide-react";
import { motion } from "motion/react";
import SubFooter from "../../dashboard/components/subfooter";
import StatsTile from "../components/statsTile";
import ExecutiveCarousel from "../components/executiveCarousel";
import SectionHeader from "../../dashboard/components/sectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function AboutPage() {
  const X_PADDING = "px-12 lg:px-24";
  return (
    <div className="flex flex-col py-6 w-full gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`flex gap-6 ${X_PADDING}`}
      >
        <div>Home</div>
        <div>/</div>
        <div>About</div>
      </motion.div>

      <div className={`flex flex-col lg:flex-row ${X_PADDING} gap-10 items-center`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center gap-10 lg:w-1/2"
        >
          <div className="text-6xl">Our Story</div>
          <div>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer electronics to fashion.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-1/2 w-full"
        >
          <img
            className="w-full h-auto object-cover"
            src="/twoblackgirls.png"
            alt="Two people smiling"
          />
        </motion.div>
      </div>

      <div className={`w-full flex flex-col gap-6 ${X_PADDING} my-12`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader labelText="Numbers" headerText="Here in Exclusive" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full justify-items-center items-center"
        >
          <StatsTile icon={Store} count={10_500_100} label="Sellers active our site" />
          <StatsTile icon={CircleDollarSign} count={33000} label="Monthly Product Sale" />
          <StatsTile icon={Gift} count={45500} label="Customers active in our site" />
          <StatsTile icon={Handbag} count={67000} label="Annual gross sale in our site" />
        </motion.div>
      </div>

      <motion.div
        id="executives"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full flex items-center justify-center ${X_PADDING}`}
      >
        <ExecutiveCarousel />
      </motion.div>

      <SubFooter />
    </div>
  );
}