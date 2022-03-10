export const Hero = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=800&h=600"
            alt="Album"
          />
        </figure>
      </div>
    </>
  )
}
