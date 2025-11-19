import Cards from "../component/Cards.jsx"

const cards = [
  {
    img: "https://picsum.photos/seed/1/600/400",
    title: "First card",
    desc: "Short description for card one.",
    tags: ["react", "ui"]
  },
  {
    img: "https://picsum.photos/seed/2/600/400",
    title: "Second card",
    desc: "Short description for card two.",
    tags: ["router", "tailwind"]
  },
  {
    img: "https://picsum.photos/seed/3/600/400",
    title: "Third card",
    desc: "Short description for card three.",
    tags: ["example"]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-start p-6 ">
      {cards.map((c, i) => (
        <Cards key={i} {...c} />
      ))}
    </div>
  )
}