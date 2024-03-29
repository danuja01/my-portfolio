const Card = ({ works }) => {
  return (
    <div className="bg-blue-ac2 relative rounded-[3px] inline-block mx-4 snap-center center-div mb-4 w-[20rem] h-[28rem] p-5 dark:bg-muted">
      <div className="w-[17.5rem] h-[11rem] mb-3 shadow-md">
        <img
          src={works.image}
          className="  object-fit 
          w-full h-full

           rounded-sm "
          alt={`A thumbnail of the "${works.title}" project`}
        />
      </div>

      <div id="tags">
        {works.tags.map((tag, index) => (
          <span
            key={index}
            className="text-[10px] hover:opacity-70 text-white bg-muted  dark:bg-blue-ac2 rounded-sm px-2 py-1 mr-2 "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-white text-[16.5px] font-bold h-10 mb-2 dark:text-blue-ac1">
          {works.title}
        </h3>
        <p className="text-white text-[12.38px] dark:text-blue-ac1">
          {works.desc.substring(0, 200) + "..."}
        </p>
      </div>

      <div className="  absolute bottom-4 right-4 text-muted dark:text-blue-ac2  text-xs items-center ">
        <a
          href={works.link}
          className="hover:bg-blue-ac1 flex items-center  p-1 rounded-sm"
        >
          {!works.deployed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="inline-flex fill-muted dark:fill-blue-ac2 mr-1.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="inline-flex fill-muted dark:fill-blue-ac2 mr-1.5"
              viewBox="0 0 64 64"
            >
              <path d="M32 2C15.459 2 2 15.459 2 32c0 16.543 13.459 30 30 30 16.542 0 30-13.457 30-30C62 15.459 48.543 2 32 2m20.047 46.204c-1.195-1.083-2.463-2.058-3.793-2.923 1.674-3.385 2.703-7.074 3.012-10.859h6.41c-.487 5.191-2.518 9.941-5.629 13.782M6.326 34.422h6.297c.311 3.803 1.35 7.514 3.039 10.914-1.299.852-2.539 1.809-3.709 2.868-3.111-3.841-5.142-8.591-5.627-13.782m5.627-18.625c1.17 1.061 2.41 2.018 3.709 2.867-1.783 3.588-2.842 7.52-3.084 11.547H6.273c.375-5.438 2.444-10.418 5.68-14.414m17.942-6.238v9.648c-2.926-.234-5.746-.955-8.367-2.125 2.189-3.07 5.04-5.654 8.367-7.523m0 13.869v6.783H16.797c.234-3.359 1.127-6.57 2.557-9.488 3.283 1.531 6.839 2.452 10.541 2.705m0 10.994v6.15c-3.713.255-7.281 1.181-10.574 2.723-1.326-2.732-2.182-5.727-2.473-8.873h13.047m0 10.373v9.668c-3.363-1.867-6.225-4.447-8.412-7.523 2.634-1.182 5.468-1.911 8.412-2.145m4.21 9.58v-9.58c2.895.23 5.682.938 8.277 2.084-2.167 3.05-4.987 5.623-8.277 7.496m0-13.803v-6.15h12.934c-.297 3.111-1.156 6.088-2.488 8.812-3.256-1.505-6.78-2.41-10.446-2.662m0-10.361v-6.783c3.666-.25 7.193-1.156 10.451-2.662 1.418 2.906 2.301 6.102 2.535 9.445H34.105m0-11.004V9.623c3.293 1.872 6.113 4.445 8.283 7.496-2.597 1.149-5.386 1.856-8.283 2.088m10.428-6.241c-1.984-2.404-4.328-4.471-6.918-6.138 4.357.971 8.301 3.048 11.523 5.92-.953.857-1.961 1.637-3.016 2.333-.495-.727-1.026-1.433-1.589-2.115m-25.178.001c-.549.666-1.068 1.354-1.555 2.063-1.027-.684-2.008-1.445-2.939-2.281 3.182-2.835 7.064-4.896 11.355-5.883-2.568 1.659-4.89 3.713-6.861 6.101m-1.554 36.004c.408.594.838 1.174 1.291 1.738 2.021 2.521 4.439 4.689 7.129 6.428-4.291-.986-8.178-3.048-11.359-5.884.931-.837 1.913-1.599 2.939-2.282m26.773 2.013c.547-.666 1.064-1.355 1.551-2.064 1.053.696 2.061 1.476 3.014 2.333-3.223 2.872-7.166 4.948-11.523 5.92 2.609-1.679 4.964-3.763 6.958-6.189m6.737-20.773c-.24-4.008-1.289-7.92-3.057-11.492 1.33-.864 2.598-1.839 3.793-2.922 3.238 3.996 5.305 8.977 5.68 14.414h-6.416" />
            </svg>
          )}
          {works.deployed ? "View Live" : "View Repo"}
        </a>
      </div>
    </div>
  );
};

export default Card;
