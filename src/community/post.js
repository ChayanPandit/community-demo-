import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";
import VoteButtons from "./vote-button";

const Post = ({ post }) => {

  return (
    <HStack key={post.id} w="100%" alignItems="flex-start">
      <VoteButtons post={post} />
      <Box bg="gray.100" p={4} rounded="md" w="100%" >
        <Text>{post.user}</Text>
        <Text>{post.title}</Text>
      </Box>
    </HStack>
  );
};

export default Post;