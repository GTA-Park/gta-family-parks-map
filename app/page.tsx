const parks = [
  "Lynde Shores Conservation Area - Bird feeding, deer",
  "Lake Wilcox Park - Lakeview, splash pad",
  "Chinguacousy Park - Zoo, splash pad, playground",
  "Sixteen Mile Sports Park - Skate park, zipline, splash pad, pump track",
  "Happy Rolph's Animal Farm - Free farm and park",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] p-6">
      <section className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            GTA Family Activities Map
          </p>
          <h1 className="text-4xl font-bold mt-2">
            Free & Fun Parks Around GTA
          </h1>
          <p className="text-gray-600 mt-3">
            Curated family-friendly parks, splash pads, animal experiences,
            trails, toboggan hills and hidden gems.
          </p>
        </div>

        <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-4 mb-6 text-center">
          Banner Ad Space
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {["Splash Pad", "Animal Experience", "Zipline", "Tobogganing", "Community Centre"].map(
            (tag) => (
              <button
                key={tag}
                className="bg-white rounded-full px-4 py-3 shadow-sm text-sm font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-3">Map Coming Soon</h2>
          <div className="h-80 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
            Interactive map placeholder
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {parks.map((park) => (
            <div key={park} className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold">{park}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Family-friendly local spot. Full review coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}