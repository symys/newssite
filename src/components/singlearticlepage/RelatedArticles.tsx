import RelatedArticleCard from "./RelatedArticleCard";

const RelatedArticles = ({relatedArticleData}:any) => {
//    actually I thought that I should add a map here but when I check API I saw there is no a relatedStory arrayBuffer, just 1 obj

  return <div className="mt-[36vh] flex flex-col ">
    <h3 className="roboto tracking-wider text-popularTitleGray ">RELATED</h3>
    <RelatedArticleCard img={relatedArticleData.mainImageUrl} title={relatedArticleData.title}/>
  </div>;
};

export default RelatedArticles;
