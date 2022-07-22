import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Button, Center, Flex, Stack, Text } from '@chakra-ui/react';

export default function Social() {
  return (
    <Flex justifyContent="center" gap="10px" direction="row">
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} direction="row" justifyContent="center">

        {/* Twitter */}
        <Button w="150px" variant={'outline'} leftIcon={<FaTwitter/>}>
          <Center>
            <Text> Twitter</Text>
          </Center>
        </Button>


        {/* Facebook */}
        <Button w="150px"  colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w="150px" variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text> Google</Text>
          </Center>
        </Button>

      </Stack>
    </Flex>
  );
}