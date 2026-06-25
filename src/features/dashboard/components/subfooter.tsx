import SubFooterItem from "./subFooterItem";

export default function SubFooter() {
    return (
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center py-20">
            <SubFooterItem itemHeader="Free and Fast Delivery" itemLabel="Free delivery for all orders over $140" logoPath="/subfooter/delivery.svg" />
            <SubFooterItem itemHeader="24/7 Customer Service" itemLabel="Friendly 24/7 customer support" logoPath="/subfooter/call.svg" />
            <SubFooterItem itemHeader="Money Back Guarantee" itemLabel="We return money within 30 days" logoPath="/subfooter/shield.svg" />
        </div>
    )
}