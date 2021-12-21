import type { NextPage } from "next";
import { PexelData } from "../types";
import { fetchCuratedPhotos } from "./api";

import HomePage from "./containers/HomePage/HomePage";

type Props = {
  data: PexelData;
};

const Home: NextPage<Props> = (props) => {
  return (
    <main>
      <HomePage photoData={props} />
    </main>
  );
};

export async function getServerSideProps() {
  const { data } = await fetchCuratedPhotos();

  return {
    props: { data },
  };
}

export default Home;
