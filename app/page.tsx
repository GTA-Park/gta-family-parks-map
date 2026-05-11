import { getParks } from "./lib/parks";

export default async function Home() {
  const parks = await getParks();

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-gray-900">
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            GTA Family Activities Map
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Free & Fun Parks Around GTA
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Curated family-friendly parks, splash pads, animal experiences,
            trails, toboggan hills, community centre parks and hidden gems.
          </p>
        </div>

        <div className="bg-amber-100 border border-amber-200 rounded-2xl p-4 text-center mb-6">
          Banner Ad Space
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-6">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1GKx61MAzpii0OYi1pKGj1OIMcIjU8WU&ehbc=2E312F"
            width="100%"
            height="480"
            className="rounded-2xl border"
            loading="lazy"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {parks.map((park, index) => (
            <article
              key={`${park.Name}-${index}`}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500 mb-2">
                {park.City} {park.Region ? `• ${park.Region}` : ""}
              </p>

              <h2 className="text-2xl font-bold mb-3">
                {park.Name}
              </h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {park.Category && (
                  <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                    {park.Category}
                  </span>
                )}

                {park.Season && (
                  <span className="bg-green-100 rounded-full px-3 py-1 text-sm">
                    {park.Season}
                  </span>
                )}

                {park["Free/Paid"] && (
                  <span className="bg-blue-100 rounded-full px-3 py-1 text-sm">
                    {park["Free/Paid"]}
                  </span>
                )}
              </div>

              <p className="text-gray-700 text-sm leading-6">
                {park.Summary || park["Special Feature"] || park.Activities}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}