import SubFooter from "../../dashboard/components/subfooter";

export default function AboutPage(){
    const X_PADDING = "px-24";
    return (
        <div className="flex flex-col py-6 w-fill gap-6">
            <div className={`flex gap-6 w-100 ${X_PADDING}`}>
                <div>Home</div>
                <div>/</div>
                <div>About</div>
            </div>

            <div className="flex pl-24">
                <div className="flex flex-col">
                    <div>Our Story</div>
                    <div>Launched in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                    <br />
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </div>
                </div>
                <img className="lg:hidden"src="/test.svg" alt="TwoBlackGirlsSmiling" />
                
            </div>

            <div id="executives">

            </div>
            <SubFooter />
        </div>
    )
}