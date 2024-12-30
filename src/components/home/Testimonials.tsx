import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    text: "This platform has completely transformed how I express myself online. The meme generator is incredibly intuitive!",
    author: "Sarah Johnson",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "2",
    text: "The mood-based playlists are exactly what I needed. It's like having a personal DJ that knows my emotions.",
    author: "Michael Chen",
    role: "Music Enthusiast",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];

export const Testimonials = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-12">
        <Quote className="w-8 h-8 text-indigo-500" />
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 rounded-xl bg-gray-100 shadow-neumorph"
          >
            <p className="text-lg text-gray-700 mb-6">{testimonial.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
