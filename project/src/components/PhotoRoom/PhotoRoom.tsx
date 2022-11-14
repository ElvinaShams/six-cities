type PhotoRoomProps = {
  image: string,
};

function PhotoRoom({ image }: PhotoRoomProps) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
}

export { PhotoRoom };
