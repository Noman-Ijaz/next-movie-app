import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getYoutubeVideo } from "../pages/api/movie";
export const YTModal = ({ isOpen, onClose, movieId }) => {
  const { data, isloading } = useQuery({
    queryKey: ["youtube-videos"],
    queryFn: ({ queryKey }) => getYoutubeVideo(movieId),
    initialData: getYoutubeVideo(movieId),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="6xl" pt={10} backgroundColor={"themeInfo"}>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {data?.results?.map((data, i) => (
              <GridItem
                sx={{
                  _first: {
                    gridColumn: "1 / -1",
                    height: "350px",
                  },
                }}
                key={i}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${data.key}`}
                  height="100%"
                  width="100%"
                ></iframe>
              </GridItem>
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
