import SectionTitle from "../Common/SectionTitle";
const SociableKitWidget = () => {
  return (
    <section
      id="news"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Community"
            title="Latest in Community"
            paragraph="Stay updated with the latest insights and trends from our LinkedIn posts. Explore recent highlights and industry news!"
            width="640px"
            center
          />
        </div>
        <iframe src="https://widget.tagembed.com/2139413" style={{width:'100%', height:'455px',border:'none'}}></iframe>
      </div>
    </section>
  );
};

export default SociableKitWidget;
