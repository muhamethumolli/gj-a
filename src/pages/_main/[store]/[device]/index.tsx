import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Post from '../../../../components/organisms/Post';
import Container from '../../../../components/templates/Container';
import Layout from '../../../../components/templates/Layout';
import { UAType } from '../../../../interfaces/IUserAgent';
// import { PostModel } from '../interfaces/Post.model';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps<
  {},
  { store: string; device: UAType }
> = async () => {
  let getStoreInfo: any = [];
  let getRootCats: any = [];
  let getTopSections: any = [];
  let themeSettings: any = [];
  let localizationData: any = [];

  try {
    let [
      getStoreInfoRes,
      getRootCatsRes,
      getTopSectionsRes,
      themeSettingsRes,
      localizationDataRes
    ] = await Promise.all([
      await fetch(
        `https://ecommerce-client-api.gjirafa.dev/api/v1/catalog/currentstore`,
        {
          headers: { OriginHost: 'ecommerce.gjirafa.dev' }
        }
      ),
      await fetch(
        `https://ecommerce-client-api.gjirafa.dev/api/v1/catalog/searchcategories`,
        {
          headers: { OriginHost: 'ecommerce.gjirafa.dev' }
        }
      ),
      await fetch(
        `https://ecommerce-client-api.gjirafa.dev/api/v1/section/gethomepagesections?PageNumber=1&PageSize=9999`,
        {
          headers: { OriginHost: 'ecommerce.gjirafa.dev' }
        }
      ),
      await fetch(
        `https://ecommerce-settingloader-api.gjirafa.dev/settingLoader/themeSettings/0`,
        {
          headers: { OriginHost: 'ecommerce.gjirafa.dev' }
        }
      ),
      await fetch(
        `https://ecommerce-localization-api.gjirafa.dev/staticresources`,
        {
          headers: { OriginHost: 'ecommerce.gjirafa.dev' }
        }
      )
    ]);
    getStoreInfo = await getStoreInfoRes.json();
    getRootCats = await getRootCatsRes.json();
    getTopSections = await getTopSectionsRes.json();
    themeSettings = await themeSettingsRes.json();
    localizationData = await localizationDataRes.json();
  } catch (error) {}
  // let [getStoreInfo, getRootCats, getTopSections, initialData] =
  //   await Promise.all([
  //     fetchServerSide(
  //       "GET",
  //       `${process.env.NEXT_PUBLIC_API}catalog/currentstore`,
  //       ctx.params?.store || ""
  //     ),
  //     fetchServerSide(
  //       "GET",
  //       `${process.env.NEXT_PUBLIC_API}catalog/searchcategories`,
  //       ctx.params?.store || ""
  //     ),
  //     fetchServerSide(
  //       "GET",
  //       `${process.env.NEXT_PUBLIC_API}section/gethomepagesections?PageNumber=1&PageSize=9999`,
  //       ctx.params?.store || ""
  //     ),
  //     initialDataAPI(ctx.params?.store, ctx.params?.device),
  //   ]);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
      getStoreInfo,
      getTopSections: getTopSections,
      getRootCatsData: getRootCats,
      themeSettings,
      localizationData
    },
    revalidate: 300
  };
};

const Home = ({ posts, ...rest }: any) => {
  console.log(rest,"test-3");
  const [show, setShow] = useState<number>(10);

  const showMore = () => setShow(show + 10);
  return (
    <Layout title="Home" url="/">
      <section className="bg-gray-200 py-32">
        <Container>
          {posts.map(
            (el: any, key: number) =>
              key + 1 <= show && (
                <Post post={el} key={`${el.id}-${el.userId}`} />
              )
          )}
          <div className="flex justify-center">
            {show <= posts.length && (
              <button
                onClick={showMore}
                className="py-6 px-28 bg-gray-300 rounded-md text-gray-600 font-medium leading-7 focus:outline-none"
              >
                Shiko me shumë postime
              </button>
            )}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

// Home.getInitialProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { posts };
// };

export default Home;
