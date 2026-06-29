interface ExecutiveTileProps {
  executiveName: string;
  executiveTitle: string;
  imgPath: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

export default function ExecutiveTile({
  executiveName,
  executiveTitle,
  imgPath,
  twitterUrl,
  instagramUrl,
  linkedinUrl,
}: ExecutiveTileProps) {
  return (
    <div className="flex flex-col gap-3 w-full overflow-hidden">
      <div className="w-full overflow-hidden">
        <img
          src={imgPath}
          alt={executiveName}
          className="w-full origin-top object-cover object-top aspect-4/5 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="text-xl font-semibold">{executiveName}</h3>
        <p className="text-sm text-gray-800">{executiveTitle}</p>
      </div>

      <div className="flex gap-3 items-center">
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="/Vector.svg"
              alt="Twitter"
              className="w-5 h-5 hover:opacity-70 transition-opacity"
            />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="/icon-instagram.svg"
              alt="Instagram"
              className="w-5 h-5 hover:opacity-70 transition-opacity"
            />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="/Icon-Linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5 hover:opacity-70 transition-opacity"
            />
          </a>
        )}
      </div>
    </div>
  );
}
