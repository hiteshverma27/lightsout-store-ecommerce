import React from 'react'

export default function Footer() {
    return <footer className="w-100vw pb-2">
      <div className="mx-5 flex flex-wrap flex-space_between-center">
        <div className="mb-auto my-5">
          <a href="/index.html">
            <h2>LightsOut</h2>
          </a>
          <p>Its LightsOut and away we go...</p>
          <p className="mt-8">Made by Hitesh, supercharged by <a href="https://orcaui.netlify.app/"
            className="font-size-larger bold text-underline">Orca UI.</a></p>
          <p>© 2022, All rights reserved</p>
          <hr className="mt-2 hr-color-accent" />
          <a href="https://twitter.com/hitesh27v" target="_blank">
            <img className="m-1 mt-3 ml-0" src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/twitter.svg" alt="twitter" />
          </a>
          <a href="https://github.com/hiteshverma27" target="_blank">
            <img className="m-1 mt-3" src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/github.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/hitesh-verma-8727921b2/" target="_blank">
            <img className="m-1 mt-3" src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className="mb-auto my-5">
          <h2>Catagory</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            <li className="my-1"><a href="#">Posters</a></li>
            <li className="my-1"><a href="#">Scale Models</a></li>
            <li className="my-1"><a href="#">Flags</a></li>
            <li className="my-1"><a href="#">Garments</a></li>
          </ul>
        </div>
        <div className="mb-auto my-5">
          <h2>Account</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            <li className="my-1"><a href="#">My Account</a></li>
            <li className="my-1"><a href="#">Wishlist</a></li>
            <li className="my-1"><a href="#">Track order</a></li>
            <li className="my-1"><a href="#">View Cart</a></li>
            <li className="my-1"><a href="#">Priacy Policy</a></li>
          </ul>
        </div>
        <div className="mb-auto my-5 pr-3">
          <h2>Contact</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            <li className="my-1"><strong>Location:</strong> India </li>
            <li className="my-1"><strong>Call:</strong> +91-9090909090 </li>
            <li className="my-1"><strong>Email:</strong> support @lightsout.com </li>
          </ul>
        </div>
      </div>
    </footer>;
  }
