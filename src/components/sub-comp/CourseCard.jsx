export default function CourseCard() {
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="badge badge-accent font-LiAdorNoirrit_Regular">
            ফ্রি
          </div>
          <h2 className="card-title font-HindSiliguri_Regular">
            Web Design with HTML, CSS & JavaScript
          </h2>
          <div className="card-actions justify-end">
            <button className="bg-brandColor text-white px-3 py-2 rounded-full hover:bg-brandColor/20 hover:text-brandColor duration-300 font-LiAdorNoirrit_Regular flex items-center gap-1 mt-2">
              <span>বিস্তারিত দেখুন</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
