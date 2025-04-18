<script>
  import { Link } from 'svelte-routing';
  let isMenuOpen = false; 

</script>



<div class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="relative bg-white overflow-hidden">
    <div class="absolute inset-0">
      <img class="w-full h-64 sm:h-80 md:h-full object-cover" src="/assets/hero.png" alt="A scenic view of the property">
      <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="pt-25 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block">Floor Booking</span>
              <span class="block text-indigo-400">Smart Booking</span>
            </h1>
            
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Simplify your property bookings with our intuitive floor booking app. Browse available spaces, select your ideal floor, and secure your reservation in just a few taps.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <Link to="/dashboard" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/units" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  View Units
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center">
          Features
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          Everything you need to manage your apartment bookings
        </p>
      </div>
      

      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <!-- Feature 1 -->
          <div class="relative">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-16">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Easy Booking</h3>
              <p class="mt-2 text-base text-gray-500">
                Book your apartment in just a few clicks with our intuitive interface.
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="relative">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div class="ml-16">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Real-time Updates</h3>
              <p class="mt-2 text-base text-gray-500">
                Get instant notifications about your bookings and apartment availability.
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="relative">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-16">
              <h3 class="text-lg leading-6 font-medium text-gray-900">24/7 Access</h3>
              <p class="mt-2 text-base text-gray-500">
                Book and manage your apartment anytime, anywhere with our web platform.
              </p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="relative">
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="ml-16">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Secure Platform</h3>
              <p class="mt-2 text-base text-gray-500">
                Your data is protected with enterprise-grade security and encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- CTA Section -->
<div class="bg-indigo-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
    
    <!-- CTA Heading -->
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left">
      <span class="block">Ready to get started?</span>
      <span class="block text-indigo-600">Start booking your apartment today.</span>
    </h2>

    <!-- Outer Container (the one you update) -->
    <div class="mt-8 lg:mt-0 lg:flex-shrink-0 flex justify-center lg:justify-start">
      <div class="inline-flex rounded-md shadow w-full sm:w-auto">
        <Link to="/login"
          class="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Sign up now
        </Link>
      </div>
    </div>

  </div>
</div>


