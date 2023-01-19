type GalleryPhotosProps = {
  images: string[],
  type: string,
};

function GalleryPhotos({ images, type }: GalleryPhotosProps): JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((image) => (
        <div className="property__image-wrapper" key={image}>
          <img className="property__image" src={image} alt={type} />
        </div>
      ))}
    </div>
  );
}

export { GalleryPhotos };
