import React from "react";

const LandingPage = () => {
	return (
		<>
			<div class="relative w-full bg-white">
				<div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
					<div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
						<h1 class="mt-0 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
							COMPANY NAME ADELAIDE
						</h1>
						<p class="mt-8 text-lg text-gray-700">
							The Best Movers in Adelaide, SA: We make moving
							something you look forward to and exciting
						</p>
						<form action="" class="mt-8 flex items-start space-x-2">
							<div>
								<div class="flex flex-wrap">
									<input
										class="rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Moving From"
										id="movingFrom"
									/>
									<input
										class="rounded-md border border-black/30 bg-transparent px-3 py-2 m-2  text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
										type="text"
										placeholder="Moving To"
										id="movingTo"
									/>
								</div>

								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="text"
									placeholder="Brief description of the goods"
									id="description"
								/>
								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="text"
									placeholder="Full Name"
									id="fullName"
								/>
								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="email"
									placeholder="Email"
									id="email"
								/>
								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="phone"
									placeholder="Phone"
									id="phone"
								/>
								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="number"
									placeholder="Postal Code"
									id="postalCode"
								/>
								<input
									class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 m-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="date"
									placeholder="Date of move"
									id="movingDate"
								/>

								<button
									type="button"
									class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								>
									Request a call
								</button>
							</div>
						</form>
					</div>
					<div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
						<img
							class="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] rounded-lg"
							src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="mx-auto my-32 max-w-7xl px-2 lg:px-8">
				<div class="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
					<div>
						<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
							<svg
								class="h-9 w-9 text-blue-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
								></path>
							</svg>
						</div>
						<h3 class="mt-8 text-lg font-semibold text-black">
							Secured Payments
						</h3>
						<p class="mt-4 text-sm text-gray-600">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
					<div>
						<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
							<svg
								class="h-9 w-9 text-orange-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
						<h3 class="mt-8 text-lg font-semibold text-black">
							Fast &amp; Easy to Load
						</h3>
						<p class="mt-4 text-sm text-gray-600">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
					<div>
						<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
							<svg
								class="h-9 w-9 text-green-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								></path>
							</svg>
						</div>
						<h3 class="mt-8 text-lg font-semibold text-black">
							Light &amp; Dark Version
						</h3>
						<p class="mt-4 text-sm text-gray-600">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
					<div>
						<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
							<svg
								class="h-9 w-9 text-red-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
								></path>
							</svg>
						</div>
						<h3 class="mt-8 text-lg font-semibold text-black">
							Filter Blocks
						</h3>
						<p class="mt-4 text-sm text-gray-600">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</p>
					</div>
				</div>
			</div>
			<section class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
				<div>
					<div class="mx-auto max-w-2xl lg:text-center">
						<h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
							Frequently Asked Questions
						</h2>
						<p class="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Facere, assumenda
						</p>
					</div>
					<div class="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
						<div class="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
							<button
								type="button"
								class="flex w-full items-center justify-between px-4 py-5 sm:p-6"
							>
								<span class="flex text-lg font-semibold text-black">
									How do I get started?
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-5 w-5 text-gray-500"
								>
									<polyline points="18 15 12 9 6 15"></polyline>
								</svg>
							</button>
							<div class="px-4 pb-5 sm:px-6 sm:pb-6">
								<p class="text-gray-500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Repellat aliquam adipisci
									iusto aperiam? Sint asperiores sequi nobis
									inventore ratione deleniti?
								</p>
							</div>
						</div>
						<div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
							<button
								type="button"
								class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
							>
								<span class="flex text-start text-lg font-semibold text-black">
									What is the difference between a free and
									paid account?
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="hidden h-5 w-5 text-gray-500 md:block"
								>
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</button>
						</div>
						<div class="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
							<button
								type="button"
								class="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
							>
								<span class="flex text-start text-lg font-semibold text-black">
									What is the difference between a free and
									paid account?
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="hidden h-5 w-5 text-gray-500 md:block"
								>
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</button>
						</div>
					</div>
					<p class="textbase mt-6 text-center text-gray-600">
						Can&#x27;t find what you&#x27;re looking for?{" "}
						<a
							href="#"
							title=""
							class="font-semibold text-black hover:underline"
						>
							Contact our support
						</a>
					</p>
				</div>
			</section>
			<div class="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
				<div class="lg:grid lg:grid-cols-12 lg:gap-x-6">
					<div class="px-4 py-10 lg:col-span-5 lg:px-0">
						<span class="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
							Pricing that fits your budget
						</span>
						<h1 class="text-3xl font-bold md:text-5xl">
							Lorem ipsum dolor sit amet consectetur.
						</h1>
						<p class="mt-8 font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laboriosam magni, rem sed sint neque doloribus
							saepe veniam minima quaerat minus.
						</p>
						<div class="mt-8 flex w-full max-w-sm items-center space-x-2">
							<input
								class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
								type="email"
								placeholder="Email"
							/>
							<button
								type="button"
								class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Subscribe
							</button>
						</div>
					</div>
					<div class="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
						<div class="w-full p-5 md:w-1/2">
							<div class="rounded-md border bg-white bg-opacity-90">
								<div class=" border-b">
									<div class="px-9 py-7">
										<h3 class="mb-3 text-xl font-bold leading-snug text-gray-900">
											Standard
										</h3>
										<p class="font-medium leading-relaxed text-gray-500">
											Lorem ipsum dolor sit amet, consect
											etur adipiscing maror.
										</p>
									</div>
								</div>
								<div class="px-9 pb-9 pt-8">
									<p class="mb-6 font-medium leading-relaxed text-gray-600">
										Features included:
									</p>
									<ul class="mb-11">
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												3 Team Members
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												1200+ UI Blocks
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												10 GB Cloud Storage
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												Individual Email Account
											</p>
										</li>
										<li class="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												Premium Support
											</p>
										</li>
									</ul>
									<p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
										<span>Starting from</span>
										<span class="ml-2 text-gray-900">
											$49/mo
										</span>
									</p>
									<div class="md:inline-block">
										<button
											type="button"
											class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
										>
											Start your free trial
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="w-full p-5 md:w-1/2">
							<div class="rounded-md border bg-white bg-opacity-90">
								<div class=" border-b">
									<div class="px-9 py-7">
										<h3 class="mb-3 text-xl font-bold leading-snug text-gray-900">
											Standard
										</h3>
										<p class="font-medium leading-relaxed text-gray-500">
											Lorem ipsum dolor sit amet, consect
											etur adipiscing maror.
										</p>
									</div>
								</div>
								<div class="px-9 pb-9 pt-8">
									<p class="mb-6 font-medium leading-relaxed text-gray-600">
										Features included:
									</p>
									<ul class="mb-11">
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												3 Team Members
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												1200+ UI Blocks
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												10 GB Cloud Storage
											</p>
										</li>
										<li class="mb-4 flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												Individual Email Account
											</p>
										</li>
										<li class="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="mr-2"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
												<polyline points="22 4 12 14.01 9 11.01"></polyline>
											</svg>
											<p class="font-semibold leading-normal">
												Premium Support
											</p>
										</li>
									</ul>
									<p class="mb-6 text-lg font-semibold leading-normal text-gray-600">
										<span>Starting from</span>
										<span class="ml-2 text-gray-900">
											$49/mo
										</span>
									</p>
									<div class="md:inline-block">
										<button
											type="button"
											class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
										>
											Start your free trial
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2">
				<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
					<div class="w-full md:w-2/3 lg:w-1/2">
						<h2 class="text-3xl font-bold text-black">
							Sign up for our weekly newsletter
						</h2>
						<p class="mt-4 text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aliquam at ipsum eu nunc commodo posuere et
							sit amet ligula.
						</p>
						<div class="mt-4">
							<p class="font-semibold text-gray-800">
								Trusted by over 100,000+ businesses and
								individuals
							</p>
							<div class="mt-2 flex items-center">
								<div class="flex space-x-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-5 w-5 text-yellow-400"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-5 w-5 text-yellow-400"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-5 w-5 text-yellow-400"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-5 w-5 text-yellow-400"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="h-5 w-5 text-yellow-400"
									>
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
								</div>
								<span class="ml-2 inline-block">
									<span class="text-sm font-semibold text-gray-800">
										4.8/5 . 3420 Reviews
									</span>
								</span>
							</div>
						</div>
					</div>
					<div class="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
						<form class="flex lg:justify-center">
							<div class="flex w-full max-w-md flex-col space-y-4">
								<input
									class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									type="email"
									placeholder="Email"
								/>
								<button
									type="button"
									class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								>
									Subscribe
								</button>
							</div>
						</form>
						<p class="mt-2 lg:text-center">
							<span class="text-sm text-gray-600">
								By signing up, you agree to our terms of service
								and privacy policy.
							</span>
						</p>
					</div>
				</div>
			</div>
			<div class="mx-auto mt-12 max-w-7xl">
				<footer class="px-4 py-10">
					<div class="flex flex-col md:flex-row md:items-center">
						<span>
							<svg
								width="40"
								height="46"
								viewBox="0 0 50 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
									fill="black"
								></path>
							</svg>
						</span>
						<div class="mt-4 grow md:ml-12 md:mt-0">
							<p class="text-base font-semibold text-gray-700">
								© 2023 DevUI Component Library
							</p>
						</div>
					</div>
					<div class="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
						<div class="mb-8 lg:mb-0">
							<p class="mb-6 text-lg font-semibold text-gray-700">
								Company
							</p>
							<ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
								<li>About us</li>
								<li>Company History</li>
								<li>Our Team</li>
								<li>Our Vision</li>
								<li>Press Release</li>
							</ul>
						</div>
						<div class="mb-8 lg:mb-0">
							<p class="mb-6 text-lg font-semibold text-gray-700">
								Our Stores
							</p>
							<ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
								<li>Washington</li>
								<li>New Hampshire</li>
								<li>Maine</li>
								<li>Texas</li>
								<li>Indiana</li>
							</ul>
						</div>
						<div class="mb-8 lg:mb-0">
							<p class="mb-6 text-lg font-semibold text-gray-700">
								Services
							</p>
							<ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
								<li>UI / UX Design</li>
								<li>App Development</li>
								<li>API reference</li>
								<li>API status</li>
								<li>Documentation</li>
							</ul>
						</div>
						<div class="mb-8 lg:mb-0">
							<p class="mb-6 text-lg font-semibold text-gray-700">
								Legal
							</p>
							<ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
								<li>Privacy Policy</li>
								<li>Terms of Service</li>
								<li>Cookie Policy</li>
								<li>Disclaimer</li>
								<li>Media Policy</li>
							</ul>
						</div>
						<div class="mb-8 lg:mb-0">
							<p class="mb-6 text-lg font-semibold text-gray-700">
								Social Links
							</p>
							<ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>Linkedin</li>
								<li>YouTube</li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default LandingPage;
