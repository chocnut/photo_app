import type { NextPage } from "next";
import { PexelData } from "../types";
import { queryPexelApi } from "../utils/api";

import HomePage from "../containers/HomePage/HomePage";

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
  // Pass similar object QueryKeys from react-query
  const { data } = await queryPexelApi({
    queryKey: [null, { page: 1, searchValue: undefined }],
  });

  return {
    props: { data },
  };
}

export default Home;
