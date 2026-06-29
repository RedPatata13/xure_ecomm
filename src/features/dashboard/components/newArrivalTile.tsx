interface NewArrivalTileProps {
  productName: string;
  productDesc: string;
  imagePath: string;
  onShopNow?: () => void;
  className: string;
}

export default function NewArrivalTile({
  productName,
  productDesc,
  imagePath,
  onShopNow,
  className,
}: NewArrivalTileProps) {
  return (
    <div
      className={`relative w-full h-80 bg-black rounded-md overflow-hidden ${className} p-6`}
    >
      <div className="absolute inset-0 bg-black/10 z-10" />

      <img
        src={imagePath}
        alt={productName}
        className="absolute bottom-2 right-2 h-4/5 object-contain"
      />

      <div className="absolute bottom-0 left-0 z-20 p-6 flex flex-col gap-1">
        <h3 className="text-white font-semibold text-lg">{productName}</h3>
        <p className="text-gray-300 text-sm max-w-40">{productDesc}</p>
        <button
          onClick={onShopNow}
          className="text-white text-sm underline underline-offset-4 text-left mt-2 hover:text-gray-300 transition-colors"
        >
          Shop Now →
        </button>
      </div>
    </div>
  );
}
