import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const JoinCard = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4">
      <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Creative Community</h2>
        <p className="text-gray-600 mb-8">
          Create memes, discover music, and connect with like-minded creators.
          Sign up now and start your journey!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-3 rounded-xl bg-indigo-500 text-white shadow-neumorph-colored hover:shadow-neumorph-colored-hover transition-all inline-flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 rounded-xl bg-gray-100 shadow-neumorph hover:shadow-neumorph-hover transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </section>
);
