import { useState } from "react";

const RSVP = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		guests: "1",
		attending: "yes",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send this data to a server
		console.log("Form submitted:", formData);
		setIsSubmitted(true);

		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: "",
				email: "",
				guests: "1",
				attending: "yes",
				message: "",
			});
		}, 3000);
	};

	return (
		<section id="rsvp" className="section">
			<h2 className="section-title" data-aos="fade-up">
				RSVP
			</h2>

			<div className="max-w-4xl mx-auto">
				<p
					className="text-center text-gray-600 mb-10"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					Please let us know if you'll be joining us to celebrate Isabella's
					special day.
					<br />
					<span className="text-rose-500">RSVP by May 15, 2025</span>
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div
						className="bg-white p-8 rounded-lg shadow-lg"
						data-aos="fade-right"
						data-aos-delay="300"
					>
						{isSubmitted ? (
							<div className="text-center py-8">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="text-rose-500 lucide lucide-heart-icon lucide-heart"
									>
										<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
									</svg>
								</div>
								<h3 className="text-2xl font-display text-rose-600 mb-2">
									Thank You!
								</h3>
								<p className="text-gray-600">
									Your RSVP has been received. We look forward to celebrating
									with you!
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name" className="block text-gray-700 mb-2">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="form-input"
										required
										placeholder="Your Name"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email" className="block text-gray-700 mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="form-input"
										required
										placeholder="Your Email"
									/>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="form-group">
										<label
											htmlFor="guests"
											className="block text-gray-700 mb-2"
										>
											Number of Guests
										</label>
										<select
											id="guests"
											name="guests"
											value={formData.guests}
											onChange={handleChange}
											className="form-input"
											required
										>
											<option value="1">1 Person</option>
											<option value="2">2 People</option>
											<option value="3">3 People</option>
											<option value="4">4 People</option>
											<option value="5">5 People</option>
										</select>
									</div>

									<div className="form-group">
										<label
											htmlFor="attending"
											className="block text-gray-700 mb-2"
										>
											Will You Attend?
										</label>
										<select
											id="attending"
											name="attending"
											value={formData.attending}
											onChange={handleChange}
											className="form-input"
											required
										>
											<option value="yes">Yes, I'll be there!</option>
											<option value="no">Sorry, I can't make it</option>
										</select>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="message" className="block text-gray-700 mb-2">
										Message (Optional)
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										className="form-input h-24"
										placeholder="Any dietary restrictions or special notes?"
									></textarea>
								</div>

								<button type="submit" className="btn btn-primary w-full mt-4">
									Send RSVP
								</button>
							</form>
						)}
					</div>

					<div data-aos="fade-left" data-aos-delay="400">
						<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
							<h3 className="font-display text-2xl text-rose-600 mb-4">
								Contact Information
							</h3>
							<p className="mb-6">
								For any questions or special arrangements, please contact
								Isabella's parents:
							</p>
							<div className="space-y-3">
								<p>
									<span className="font-medium">Email:</span>
									<a
										href="mailto:isabellas.xv@example.com"
										className="text-rose-500 ml-2"
									>
										isabellas.xv@example.com
									</a>
								</p>
								<p>
									<span className="font-medium">Phone:</span>
									<a href="tel:+15551234567" className="text-rose-500 ml-2">
										(555) 123-4567
									</a>
								</p>
							</div>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="font-display text-2xl text-rose-600 mb-4">
								Gift Registry
							</h3>
							<p className="mb-4">
								Your presence is the best gift of all. However, if you wish to
								honor Isabella with a gift, she is registered at:
							</p>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-rose-500 flex items-center hover:underline"
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="text-rose-500 lucide lucide-heart-icon lucide-heart"
										>
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-rose-500 flex items-center hover:underline"
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="text-rose-500 lucide lucide-heart-icon lucide-heart"
										>
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RSVP;
