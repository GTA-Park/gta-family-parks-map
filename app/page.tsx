export default function Home() {
  const parks = [
    {
      name: "High Park",
      city: "Toronto",
      feature: "Zoo, playground, trails",
    },
    {
      name: "Edwards Gardens",
      city: "Toronto",
      feature: "Nature trails, flowers",
    },
    {
      name: "Centennial Park",
      city: "Etobicoke",
      feature: "Playground, skating, fields",
    },
    {
      name: "Richmond Green",
      city: "Richmond Hill",
      feature: "Splash pad, sports fields",
    },
    {
      name: "Mill Pond Park",
      city: "Richmond Hill",
      feature: "Lake, trails, ducks",
    },
    {
      name: "Toogood Pond",
      city: "Unionville",
      feature: "Boardwalk and trails",
    },
    {
      name: "Berczy Park",
      city: "Markham",
      feature: "Castle playground",
    },
    {
      name: "Milne Dam Conservation Park",
      city: "Markham",
      feature: "Trails and picnic",
    },
    {
      name: "Lake Wilcox Park",
      city: "Richmond Hill",
      feature: "Beach and splash pad",
    },
    {
      name: "Kortright Centre",
      city: "Vaughan",
      feature: "Forest trails and nature",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          GTA Family Parks Map
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Discover free parks, splash pads, trails, playgrounds,
          and family-friendly outdoor activities across the GTA.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parks.map((park) => (
            <div
              key={park.name}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {park.name}
              </h2>

              <p className="text-gray-500 mb-3">
                📍 {park.city}
              </p>

              <p className="text-gray-700">
                {park.feature}
              </p>
            </div>
          ))}
        </div>
        <div className="my-10">
  <iframe
    src="https://www.google.com/maps/d/embed?mid=1GKx61MAzpii0OYi1pKGj1OIMcIjU8WU&ehbc=2E312F"
    width="100%"
    height="500"
    className="rounded-2xl border"
    loading="lazy"
  ></iframe>
</div>
        <div className="mt-16 border-t pt-8">
          <h3 className="text-2xl font-bold mb-4">
            Future Features
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>✅ Interactive GTA map</li>
            <li>✅ Nearby park search</li>
            <li>✅ Splash pad filter</li>
            <li>✅ Free weekend activities</li>
            <li>✅ Family event listings</li>
          </ul>
        </div>
      </div>
    </main>
  );
}