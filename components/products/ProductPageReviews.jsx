export default function ProductPageReviews({ reviews }) {
    return (
        <div>

            {
                reviews.map((review) => (
                    <div className="p-8 border border-orange-400 rounded-2xl">
                        <p>{review.text}</p>
                        <p>{review.mark}</p>
                    </div>
                ))
            }

        </div>
    )
}
