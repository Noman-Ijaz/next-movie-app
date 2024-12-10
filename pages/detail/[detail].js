import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {
  Cast,
  DetailHeaderCard,
  MovieDetail,
  Recommendations,
  Reviews,
  SimilarMovies,
} from "../../components";
import { Loader } from "../../shared/Loader";
import { getMovieDetail } from "../api/movie";

export async function getServerSideProps(context) {
  const { params } = context;
  const movieDetail = await getMovieDetail(params.detail);

  return { props: { movieDetail } };
}
export default function Detail(props) {
  const params = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-detail"],
    queryFn: ({ queryKey }) => getMovieDetail(params.query.detail),
    initialData: props.movieDetail,
  });

  if (isLoading) {
    return "loading";
  }
  return (
    <Grid>
      {data && <DetailHeaderCard data={data} />}
      <Recommendations key={data?.id} id={data.id} />
      <Cast key={data?.id} id={data.id} />
      <Reviews key={data?.id} id={data.id} />
      {data && <MovieDetail data={data} />}
      {data.id && <SimilarMovies id={data.id} />}
    </Grid>
  );
}
