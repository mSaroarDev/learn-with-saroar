import ExpertSaysCard from "@/components/sub-comp/ExpertSays";

export default function ExpertSaysSection() {
  return (
    <>
      <div className="bg-white py-20 px-5">
        <main>
          <h2 className="text-2xl font-bold font-LiAdorNoirrit_SemiBold mb-10 text-center lg:text-left">
            ইনডাস্ট্রি এক্সপার্টরা কি বলেন?
          </h2>

          <div className="grid grid-cols-12 gap-4">
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
            <ExpertSaysCard />
          </div>
        </main>
      </div>
    </>
  );
}
