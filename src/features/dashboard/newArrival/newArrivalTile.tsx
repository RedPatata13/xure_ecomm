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
      className={`arrival-tile relative w-full h-80 bg-black rounded-md overflow-hidden ${className} p-6`}
    >
      <style>{`
        .arrival-tile {
          container-type: size;
          container-name: arrival-tile;
        }
        .arrival-tile-desc,
        .arrival-tile-btn {
          display: none;
        }
        .arrival-tile-btn {
          margin-top: 0.25rem;
        }
        /* Only show desc/button when the tile itself is tall enough */
        @container arrival-tile (min-height: 220px) {
          .arrival-tile-desc,
          .arrival-tile-btn {
            display: block;
          }
          .arrival-tile-btn {
            margin-top: 0.5rem;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-black/10 z-10" />
      <img
        src={imagePath}
        alt={productName}
        className="absolute bottom-2 right-2 h-4/5 object-contain"
      />
      <div className="absolute bottom-0 left-0 z-20 p-6 flex flex-col gap-0.5 sm:gap-1">
        <h3 className="text-white font-semibold text-base sm:text-lg">
          {productName}
        </h3>
        <p className="arrival-tile-desc text-gray-300 text-sm max-w-40">
          {productDesc}
        </p>
        <button
          onClick={onShopNow}
          className="arrival-tile-btn text-white text-sm underline underline-offset-4 text-left hover:text-gray-300 transition-colors"
        >
          Shop Now →
        </button>
      </div>
    </div>
  );
}