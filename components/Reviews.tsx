import React from 'react'

const Reviews = () => {
    const reviews = [
        {
            headline: "9+",
            description: "Years of service"
        },
        {
            headline: "300+",
            description: "Happy pet families"
        },
        {
            headline: "6",
            description: "Experts of veterinarians"
        },
        {
            headline: "5⭐",
            description: "Average feedbacks"
        }
    ]
  return (
    <>
    <section className="w-screen h-full bg-headline bg-opacity-70  px-16 py-10 gap-6 sm:py-20 ">
        <div className="max-w-4xl mx-auto flex items-center justify-around">
        {reviews.map((review, index) => (
          <React.Fragment key={review.headline}>
            <div className="text-center">
              <h2 className="text-white text-3xl sm:text-4xl font-medium mb-1">
                {review.headline}
              </h2>
              <p className="text-white/65 text-sm tracking-wide">
                {review.description}
              </p>
            </div>
            {index < reviews.length - 1 && (
              <div className="w-px h-14 bg-white/50" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
    </>
  )
}

export default Reviews