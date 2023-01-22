import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function UserFeedback() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Users Feedback</Heading>
          <Text>We have been working together to improve the user experience</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Good Overall Experience</TestimonialHeading>
              <TestimonialText>
                This is the very Best services. Initially I always use olx, but when I came to know this platform and started using it so I love selling out buying old stuff here.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'Pune'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fast response time</TestimonialHeading>
              <TestimonialText>
                It was really great experience, Quikr came to doorstep and look my item, a happy user
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.gettyimages.com/id/sb10063580c-001/photo/profile-of-young-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=dsKd71dKBz6J-4XZWgA6qV7jlXPJ3CeS5q5h0cMW5JM='
              }
              name={'Saad Ahmad'}
              title={'Meerut'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Very fast and efficient way to sell and buy old items, tbh, I used to use olx but I now I only use Quikr to sell or buy old products
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.gettyimages.com/id/641402794/photo/profile-portrait-of-young-man-smiling.jpg?s=612x612&w=gi&k=20&c=6SviRKdvh8b3I0W8-4lRtwGhUPVUVUWJWAy9cSoo0uo='
              }
              name={'Mahesh Gupta'}
              title={'Jhansi'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}